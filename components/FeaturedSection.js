import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import sanityClient from "../sanity";

export default function FeaturedSection({
  id,
  title,
  description,
  featuredCategory,
}) {
  const [resturants, setResturants] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "featured" && _id == $id]{
        ...,
        resturants[]->{
          ...,
          dishes[]->{
            ...,
          },
          type->{
            name,
          }
        }
      }[0]
      `,
        { id: id }
      )
      .then((data) => {
        setResturants(data?.resturants);
      })
      .catch((e) => {
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
        console.log("Error");
        console.log(e);
        console.log("=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-");
      });
  }, [id]);

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
        {resturants?.map((resturant) => (
          <ResturantCard
            key={resturant._id}
            title={resturant.name}
            rating={resturant.rating}
            genre={resturant.type?.name}
            imageUrl={resturant.image}
            address={resturant.address}
            short_description={resturant.short_description}
            dishes={resturant.dishes}
            long={resturant.long}
            lat={resturant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
}
