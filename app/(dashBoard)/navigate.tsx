import { View, Text, Image } from "react-native";
import React from "react";
import Layout from "@/layouts/ScreenLayout";

export default function Navigate() {
  return (
    <Layout>
      <View className="items-center justify-center flex-1">
        <Image
          source={require("@/assets/images/googleMap.jpg")}
          style={{ height: 670, width: 1500, resizeMode: "cover" }}
        />
      </View>
    </Layout>
  );
}
