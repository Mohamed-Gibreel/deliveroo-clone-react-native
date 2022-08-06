import { View, Text, ScrollView } from "react-native";
import React from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";

export default function FeaturedSection({
  id,
  title,
  description,
  featuredCategory,
}) {
  return (
    <View className="mt-4">
      <View className="flex-row items-center justify-between mx-4">
        <Text className="text-lg">{title ?? "Section"}</Text>
        <ArrowRightIcon color="#00CCBB" />
      </View>
      <Text className="text-xs text-gray-400 mx-4 ">
        {description ?? "Description"}
      </Text>
      <ScrollView
        horizontal
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        showsHorizontalScrollIndicator={false}
        className="pt-4"
      >
        {/* Resturant Cards */}
        <ResturantCard
          id="1"
          imageUrl="https://links.papareact.com/gn7"
          title="Biryani"
          rating="5.5"
          genre="Indian"
          address="Khalidiya, Abu Dhabi"
          short_description="Best rice dish on earth"
          dishes={[]}
          long={14.1235}
          lat={23.125213}
        />
        <ResturantCard
          id="1"
          imageUrl="https://links.papareact.com/gn7"
          title="Biryani"
          rating="5.5"
          genre="Indian"
          address="Khalidiya, Abu Dhabi"
          short_description="Best rice dish on earth"
          dishes={[]}
          long={14.1235}
          lat={23.125213}
        />
        <ResturantCard
          id="1"
          imageUrl="https://links.papareact.com/gn7"
          title="Biryani"
          rating="5.5"
          genre="Indian"
          address="Khalidiya, Abu Dhabi"
          short_description="Best rice dish on earth"
          dishes={[]}
          long={14.1235}
          lat={23.125213}
        />
      </ScrollView>
    </View>
  );
}
