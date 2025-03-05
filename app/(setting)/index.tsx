import { ImageBackground, View } from "react-native";
import { Image } from "react-native";
import SafeViewAndroid from "@/components/SafeViewAndroid";
import { SafeAreaView } from "react-native-safe-area-context";
import React from "react";
import LoginPageLayout from "@/layouts/LoginPageLayout";
import Maintenance from "./maintenance";

export default function Index() {
  return (
    <View>
      <Maintenance />
    </View>
  );
}
