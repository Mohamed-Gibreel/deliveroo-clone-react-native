import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../features/basket/basketSlice";

export default function DishCard({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const togglePressed = () => {
    setIsPressed(!isPressed);
  };

  const addItemToBasket = () => {
    dispatch(addToBasket({ id, name, description, price, image }));
  };

  const removeItemFromBasket = () => {
    if (items.length == 0) return;
    dispatch(removeFromBasket({ id }));
  };

  return (
    <>
      <TouchableOpacity
        className={`bg-white border-y border-gray-200 p-4 space-y-4 ${
          isPressed && "border-b-0"
        }`}
        onPress={togglePressed}
      >
        <View className="space-y-2 space-x-4 flex-row">
          <View className="flex-1">
            <Text className="text-lg font-bold">{name}</Text>
            <Text className="text-sm text-gray-400" numberOfLines={2}>
              {description}
            </Text>
          </View>
          <Image
            source={{
              uri: urlFor(image).url(),
            }}
            style={{
              borderWidth: 1,
              borderColor: "#F3F3F4",
            }}
            className="h-20 w-20 rounded"
          />
        </View>
        <View>
          <Text className="text-gray-400 text-left">
            <Currency quantity={price} currency="AED" />
          </Text>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center space-x-2 pl-3 py-2 bg-white">
          <View>
            <TouchableOpacity onPress={removeItemFromBasket}>
              <MinusCircleIcon
                size={40}
                // color="#00CCBB"
                color={items.length > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text>{items.length}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={addItemToBasket}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
