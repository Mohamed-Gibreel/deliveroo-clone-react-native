import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import {
  selectBasketItems,
  selectBasketTotal,
} from "../features/basket/basketSlice";
import { useNavigation } from "@react-navigation/native";
import Currency from "react-currency-formatter";
import * as Animatable from "react-native-animatable";

export default function BasketTotalCart() {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketTotal);
  return (
    <>
      {items.length > 0 && (
        <Animatable.View
          className="absolute bottom-10 w-full z-50"
          animation="slideInUp"
          duration={300}
        >
          <TouchableOpacity
            className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center justify-between"
            onPress={() => {
              navigation.navigate("Basket");
            }}
          >
            <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
              {items.length}
            </Text>
            <Text className="text-lg text-white font-extrabold text-center">
              View Basket
            </Text>
            <Text className="text-lg text-white font-extrabold">
              <Currency quantity={basketTotal} currency="AED" />
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      )}
      {items.length <= 0 && (
        <Animatable.View
          className="absolute bottom-0 w-full z-50"
          animation="slideOutDown"
          duration={300}
        >
          <TouchableOpacity
            className="mx-5 bg-[#00CCBB] p-4 rounded-lg flex-row items-center justify-between"
            onPress={() => {
              navigation.navigate("Basket");
            }}
          >
            <Text className="text-white font-extrabold text-lg bg-[#01A296] py-1 px-2">
              {items.length}
            </Text>
            <Text className="text-lg text-white font-extrabold text-center">
              View Basket
            </Text>
            <Text className="text-lg text-white font-extrabold">
              <Currency quantity={basketTotal} currency="AED" />
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      )}
    </>
  );
}
