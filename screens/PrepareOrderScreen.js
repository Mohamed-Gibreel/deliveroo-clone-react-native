import { View, Text, SafeAreaView, Platform, StatusBar } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
const PrepareOrderGif = require("../assets/prepare-order.gif");

export default function PrepareOrderScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("DeliveryScreen");
    }, 3000);
  }, []);

  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
      className="bg-[#00CCBB] flex-1 justify-center items-center"
    >
      <Animatable.Image
        animation="slideInUp"
        source={PrepareOrderGif}
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInLeft"
        iterationCount={1}
        className="text-lg my-10 font-bold text-center text-white"
      >
        Waiting for Resturant to accept your order!
      </Animatable.Text>
      <Animatable.View animation="slideInRight">
        <Progress.Circle size={60} indeterminate={true} color="white" />
      </Animatable.View>
    </SafeAreaView>
  );
}
