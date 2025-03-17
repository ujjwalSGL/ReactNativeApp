import { ImageBackground, Text, View } from "react-native";
import React from "react";
import Layout from "@/layouts/ScreenLayout";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
export default function history() {
  const [checked, setChecked] = React.useState(false);
  return (
    <Layout>
      <ImageBackground
        source={require("@/assets/images/earning-history.jpg")}
        style={{
          width: "auto",
          height: 300,
          borderRadius: 6,
        }}
      >
        <View className="flex items-end justify-center h-full mr-10">
          <Text className="text-3xl font-bold text-blue-900">
            Partner Ujjwal
          </Text>
          <Text className="mt-5 mr-6 text-sm font-semibold">
            Today's Earning
          </Text>
          <Text className="text-3xl font-extrabold">₹ 847.30</Text>
        </View>
      </ImageBackground>
      {/* <View className="flex justify-start p-3 bg-white">
        <View>
          <Text className="text-lg font-bold">Status Online</Text>
          <Text className="text-sm font-semibold text-gray-400">
            Open to any delivery
          </Text>
        </View>
      </View>
      {/* <View>
        <ImageBackground source={require("@/assets/images")}></ImageBackground>
      </View> */}
    </Layout>
  );
}
