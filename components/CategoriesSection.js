import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient from "../sanity";

export default function CategorySection() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
          *[_type == "category"]
        `
      )
      .then((data) => {
        setCategories(data);
      })
      .catch((e) => {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log("Error");
        console.log(e);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      });
  }, []);

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
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          title={category.name}
          imageUrl={category.image}
        />
      ))}
    </ScrollView>
  );
}
