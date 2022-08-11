import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectResturant } from "../features/resturant/resturantSlice";
import {
  removeFromBasket,
  selectBasketItems,
  selectBasketTotal,
} from "../features/basket/basketSlice";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

import { XCircleIcon } from "react-native-heroicons/solid";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";

export default function BasketScreen() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);
  const items = useSelector(selectBasketItems);
  const basketTotal = useSelector(selectBasketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (items.length == 0) {
      return navigation.goBack();
    }
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="flex-1 bg-white"
    >
      <View className="bg-gray-200 flex-1">
        <View className="flex-row items-center justify-between px-4 py-2 border-b border-gray-300 bg-white">
          <View className="bg-red-500 flex-1 opacity-0">
            <XCircleIcon color="#00CCBB" size={32} />
          </View>
          <View className="flex-1">
            <Text className="text-lg font-bold text-center">Basket</Text>
            <Text className="text-center text-gray-400">{resturant.title}</Text>
          </View>
          <View className="flex-1 items-end">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <XCircleIcon color="#00CCBB" size={38} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-row items-center space-x-4 px-4 py-3 bg-white my-5">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 50-75 min</Text>
          <TouchableOpacity>
            <Text className="text-[#00CCBB]">Change</Text>
          </TouchableOpacity>
        </View>
        <ScrollView className="divide-y divide-gray-200 bg-gray-200 flex-1">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 px-3 py-2 bg-white"
            >
              <Text className="text-[#00CCBB]">{items.length}x</Text>
              <Image
                source={{
                  uri: urlFor(items[0]?.image).url(),
                }}
                className="h-12 w-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text className="text-gray-500">
                <Currency quantity={items[0].price} currency="AED" />
              </Text>
              <TouchableOpacity
                onPress={() => {
                  dispatch(removeFromBasket({ id: key }));
                }}
              >
                <Text className="text-[#00CCBB] text-sm">Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal} currency="AED" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-gray-400">Delivery fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={9} currency="AED" />
            </Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="font-extrabold">Order Total</Text>
            <Text className="text-gray-400">
              <Currency quantity={basketTotal + 9} currency="AED" />
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00CCBB] p-4"
            onPress={() => navigation.navigate("PrepareOrderScreen")}
          >
            <Text className="text-white text-center text-lg font-bold">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
