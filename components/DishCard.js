import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../sanity";
import Currency from "react-currency-formatter";
import { MinusCircleIcon, PlusCircleIcon } from "react-native-heroicons/solid";

export default function DishCard({ id, name, description, price, image }) {
  const [isPressed, setIsPressed] = useState(false);
  const [count, setCount] = useState(0);

  const togglePressed = () => {
    setIsPressed(!isPressed);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count != 0) {
      setCount(count - 1);
    }
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
          <Text className="text-gray-400">
            <Currency quantity={price} currency="AED" />
          </Text>
        </View>
      </TouchableOpacity>
      {isPressed && (
        <View className="flex-row items-center space-x-2 pl-3 py-2 bg-white">
          <View>
            <TouchableOpacity onPress={decrementCount}>
              <MinusCircleIcon
                size={40}
                // color="#00CCBB"
                color={count > 0 ? "#00CCBB" : "gray"}
              />
            </TouchableOpacity>
          </View>
          <View>
            <Text>{count}</Text>
          </View>
          <View>
            <TouchableOpacity onPress={incrementCount}>
              <PlusCircleIcon size={40} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}
