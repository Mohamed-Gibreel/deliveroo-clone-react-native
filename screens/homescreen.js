import React, { useLayoutEffect, useState, useEffect } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  SearchIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import CategorySection from "../components/CategoriesSection";
import FeaturedSection from "../components/FeaturedSection";
import client from "../sanity.js";

export default function HomeScreen() {
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    client
      .fetch(
        `
          *[_type == "featured"]{
            ...,
            resturants[]->{
              ...,
              dishes[]->{
                ...,
              }
            }
          }
        `
      )
      .then((data) => {
        setFeaturedCategories(data);
      });
  }, []);

  return (
    <SafeAreaView
      className="bg-white"
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {/* Header Component */}
      <View className="p-4">
        {/* Navbar */}
        <View className="flex-row pb-3 items-center space-x-2">
          <Image
            source={{
              uri: "https://links.papareact.com/wru",
            }}
            className="h-7 w-7 bg-grey-300 rounded-full"
          />
          <View className="flex-1">
            <Text className="font-bold text-gray-400 text-xs">Deliver Now</Text>
            <View className="flex-row items-center space-x-1">
              <Text className="font-bold text-xl">Current Location</Text>
              <ChevronDownIcon size={20} color="#00CCBB" />
            </View>
          </View>
          <UserIcon size={35} color="#00CCBB" />
        </View>
        {/* Search Bar */}
        <View className="flex-row items-center space-x-2">
          <View className="flex-row space-x-2 bg-gray-200 p-3 rounded flex-1">
            <SearchIcon color="#00CCBB" />
            <TextInput
              placeholder="Resturants and cuisines"
              keyboardType="default"
              className="flex-1"
            />
          </View>
          <AdjustmentsIcon color="#00CCBB" />
        </View>
      </View>
      <ScrollView className="bg-gray-100" contentContainerStyle={{}}>
        {/* Categories */}
        <CategorySection />
        {/* Featured Items */}
        {featuredCategories?.map((category) => (
          <FeaturedSection
            key={category._id}
            id={category._id}
            title={category.name}
            description={category.short_description}
            featuredCategory="featured"
          />
        ))}
      </ScrollView>
      {/* Body */}
    </SafeAreaView>
  );
}
