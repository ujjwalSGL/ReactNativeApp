import { View, Text, TouchableOpacity, Modal } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Animated, { FadeIn } from "react-native-reanimated";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { router } from "expo-router";
const contentInsets = {
  top: 10,
  bottom: 10,
  left: 10,
  right: 10,
};

export default function dashBoard() {
  const [menuVisible, setMenuVisible] = useState(false);
  const handleLogout = () => {
    router.replace("/(auth)");
  };
  return (
    // <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View className="mt-10 lg:mt-0">
      {/* //Header */}
      <View className="flex flex-row justify-between px-4 py-2 border-b border-gray-200">
        <Image
          source={require("@/assets/images/companyIcon.png")}
          style={{ width: 100, height: 30, aspectRatio: 4 }}
          className="flex justify-center"
        />
        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <MaterialCommunityIcons name="menu" size={28} color="black" />
        </TouchableOpacity>
        <Modal
          visible={menuVisible}
          transparent={true}
          onRequestClose={() => setMenuVisible(false)}
        >
          <TouchableOpacity
            className="flex-1 bg-black/50"
            onPress={() => setMenuVisible(false)}
          >
            <View className="absolute top-12 right-5 bg-white rounded p-2.5">
              <TouchableOpacity className="flex-row items-center p-2.5">
                <MaterialIcons name="person-outline" size={20} color="black" />
                <Text className="ml-2.5">My Account</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row items-center p-2.5"
                onPress={handleLogout}
              >
                <MaterialIcons name="logout" size={20} color="black" />
                <Text className="ml-2.5">Log out</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </Modal>
      </View>
      {/* Hero Section */}
      <View className="gap-4 px-2">
        <Card className="items-center justify-center mt-4 bg-white border-gray-300 min-h-96">
          <Text>Primary Section</Text>
        </Card>

        <Card className="items-center justify-center bg-white border-gray-300 min-h-52">
          <Text>Secondary Section</Text>
        </Card>
      </View>
    </View>
    // </SafeAreaView>
  );
}
