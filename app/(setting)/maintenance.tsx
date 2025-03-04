import { Image } from "react-native";
import React from "react";
import { View } from "react-native";

export default function Maintenance() {
  return (
    <View className="flex-1 bg-white">
      <View className="flex items-center justify-center h-screen">
        <Image
          source={require("@/assets/images/under-construction.jpg")}
          style={{ height: 400, width: 400, resizeMode: "cover" }}
        />
      </View>
    </View>
  );
}
