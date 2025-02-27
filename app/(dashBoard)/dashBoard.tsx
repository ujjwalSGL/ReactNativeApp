import { View, Text, TouchableOpacity, Modal, ScrollView } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Card } from "@/components/ui/card";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function dashBoard() {
  return (
    // <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
    <View className="mt-8" style={{ flex: 1 }}>
      {/* //Header */}
      <View className="flex flex-row items-center justify-between px-4 py-2 border-b border-gray-200">
        <Image
          source={require("@/assets/images/companyheader.png")}
          style={{ width: 60, height: 100, aspectRatio: 4 }}
          className="flex justify-center"
        />
        <TouchableOpacity className="flex-row items-center gap-2 p-2 bg-white rounded-lg">
          <SimpleLineIcons name="wallet" size={24} color="black" />
          <Text className="text-sm">₹ 1000</Text>
        </TouchableOpacity>
      </View>
      <ScrollView scrollEnabled={true}>
        <View className="mb-4">
          {/* Hero Section */}
          <View className="gap-4 px-4 mt-2">
            <View className="flex items-center justify-center">
              <Text className="text-lg font-bold ">Dashboard</Text>
            </View>
            <Card className="bg-white border-gray-300 min-h-96">
              <View className="flex items-center justify-center py-5 border-b border-gray-300">
                <Text className="text-xl font-semibold">₹1561.41</Text>
                <Text className="flex items-center justify-center gap-1 p-1 mt-1 text-xs font-medium bg-orange-100 border border-orange-300 rounded-lg">
                  <MaterialCommunityIcons
                    name="treasure-chest"
                    size={20}
                    color="orange"
                  />
                  TODAY EARNING
                </Text>
              </View>

              <View className="flex flex-row items-center border-b border-gray-300 justify-evenly">
                <View className="gap-1 p-5 border-r border-gray-300">
                  <Text className="p-1 mt-1 text-xs font-medium ">
                    Total Amount Collected
                  </Text>
                  <Text className="text-xl font-bold ">₹40,000</Text>
                </View>
                <View className="gap-1 p-5">
                  <Text className="p-1 mt-1 text-xs font-medium ">
                    Total Distance Covered
                  </Text>
                  <Text className="text-xl font-bold">1.2KM</Text>
                </View>
              </View>
              <View className="flex flex-row items-center gap-2 border-b border-gray-300 justify-evenly">
                <View className="gap-1 p-5 -mr-4 border-r border-gray-300">
                  <Text className="p-1 mt-1 text-xs font-medium">
                    Total Order Delivered
                  </Text>
                  <Text className="text-xl font-bold">30</Text>
                </View>
                <View className="gap-1 p-5">
                  <Text className="p-1 mt-1 text-xs font-medium">
                    Total Order Rejected
                  </Text>
                  <Text className="text-xl font-bold">3</Text>
                </View>
              </View>
            </Card>
            <Card className="items-center justify-center gap-2 bg-white border-gray-300 min-h-52">
              <MaterialCommunityIcons
                name="timer-sand"
                size={32}
                color="black"
              />
              <Text>waiting for the order...</Text>
            </Card>
          </View>
        </View>
      </ScrollView>
    </View>
    // </SafeAreaView>
  );
}
