import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { XIcon } from "react-native-heroicons/solid";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";
import { useSelector } from "react-redux";
import { selectResturant } from "../features/resturant/resturantSlice";
import { useNavigation } from "@react-navigation/native";

export default function DeliveryScreen() {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);

  return (
    <View className="bg-[#00CCBB] flex-1">
      <SafeAreaView
        className="z-50"
        style={{
          marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <XIcon color="white" />
          </TouchableOpacity>
          <Text className="font-light text-white text-lg">Order help</Text>
        </View>
        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row justify-between">
            <View className="flex-1">
              <Text className="text-lg text-gray-400">Estimated Arrival</Text>
              {/* Check if text-4xl will show 44 - 55 minutes in one line */}
              <Text className="text-2xl font-bold">45 - 55 Minutes</Text>
            </View>
            <Image
              source={{
                uri: "https://links.papareact.com/fls",
              }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar color="#00CCBB" size={30} indeterminate={true} />

          <Text className="mt-3 text-gray-500">
            Your order at {resturant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>
      <MapView
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.long,
          longitudeDelta: 0.005,
          latitudeDelta: 0.005,
        }}
        className="flex-1 -mt-10 z-0"
      >
        <Marker
          coordinate={{
            latitude: resturant.lat,
            longitude: resturant.long,
          }}
          title={resturant.title}
          description={resturant.short_description}
          identifier="origin"
          pinColor="#00CCBB"
        />
      </MapView>

      <View className="bg-white flex-row items-center space-x-5 h-20">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-12 w-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Mohamed Gibreel</Text>
          <Text className="text-gray-400">Your Rider</Text>
        </View>
        <View className="mr-5">
          <Text className="text-lg text-[#00CCBB] font-bold">Call Me</Text>
        </View>
      </View>
    </View>
  );
}
