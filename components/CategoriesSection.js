import { View, Text, ScrollView } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

export default function CategorySection() {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      horizontal
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      {/* <Text>CategoryCard</Text> */}
      <CategoryCard
        title="Testing 1"
        imageUrl="https://links.papareact.com/gn7"
      />
      <CategoryCard
        title="Testing 2"
        imageUrl="https://links.papareact.com/gn7"
      />
      <CategoryCard
        title="Testing 3"
        imageUrl="https://links.papareact.com/gn7"
      />
      <CategoryCard
        title="Testing 3"
        imageUrl="https://links.papareact.com/gn7"
      />
      <CategoryCard
        title="Testing 3"
        imageUrl="https://links.papareact.com/gn7"
      />
      <CategoryCard
        title="Testing 3"
        imageUrl="https://links.papareact.com/gn7"
      />
    </ScrollView>
  );
}
