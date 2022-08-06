import React, { useLayoutEffect } from "react";
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

export default function HomeScreen() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
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
      <View className="m-4">
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
        <FeaturedSection
          id="1"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        {/* Tasty Discounts */}
        <FeaturedSection
          id="2"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
        {/* Offers near you   */}
        <FeaturedSection
          id="3"
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />
      </ScrollView>
      {/* Body */}
    </SafeAreaView>
  );
}
