// import { View, Text } from "react-native";
// import React from "react";
// import { Button } from "@/components/ui/button";
// import { useRouter } from "expo-router";
// import { logoutUser } from "@/api/LoginApiClient";

// export default function Setting() {
//   const router = useRouter();
//   const handleLogout = async () => {
//     await logoutUser();
//     router.replace("/(auth)");
//   };

//   return (
//     <View className="items-center justify-center flex-1 h-full">
//       <Button onPress={handleLogout} className="text-white bg-blue-950">
//         <Text className="text-white">Logout</Text>
//       </Button>
//     </View>
//   );
// }

import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { logoutUser } from "@/api/LoginApiClient";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
export default function Setting() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await logoutUser();
    router.replace("/(auth)");
  };

  const handlePress = () => {
    router.navigate("/(setting)/maintenance");
  };
  const handleProfile = () => {
    router.navigate("/(setting)/maintenance");
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <SafeAreaView>
      <View>
        <ImageBackground
          source={require("@/assets/images/profile-bg.jpg")}
          style={{
            width: "auto",
            height: 150,
            margin: 10,
            borderRadius: 6,
          }}
        >
          <View className="flex items-end">
            <TouchableOpacity className="p-2" onPress={handleProfile}>
              <EvilIcons name="pencil" size={32} color="black" />
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center gap-10 mx-4 text-center">
            <Image
              source={require("@/assets/images/profile-icon.png")}
              style={{ height: 80, width: 80 }}
            />
            <View>
              <Text className="text-2xl font-semibold">Hello, Ujjwal 👋</Text>
              <Text className="font-medium ">+ 9759972969</Text>
            </View>
          </View>
        </ImageBackground>
      </View>
      {loading ? (
        <View className="flex items-center justify-center h-screen">
          <ActivityIndicator size="large" color="gray" />
        </View>
      ) : (
        <View className="gap-8 m-6">
          <TouchableOpacity
            className="flex flex-row items-center gap-4"
            onPress={handlePress}
          >
            <View className="p-1.5 bg-gray-200 rounded-md">
              <MaterialIcons name="room-preferences" size={24} color="black" />
            </View>
            <Text className="text-lg font-medium">App Preferences</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex flex-row items-center gap-4"
            onPress={handlePress}
          >
            <View className="p-1.5 bg-gray-200 rounded-md">
              <MaterialIcons name="settings" size={24} color="black" />
            </View>
            <Text className="text-lg font-medium">Ride & Delivery Setting</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity
            className="flex flex-row items-center gap-4"
            onPress={handlePress}
          >
            <View className="p-1.5 bg-gray-200 rounded-md">
              <FontAwesome5 name="hand-holding-usd" size={28} color="black" />
            </View>
            <Text className="text-lg font-medium">Earnings & Payment</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity
            className="flex flex-row items-center gap-4"
            onPress={handlePress}
          >
            <View className="p-1.5 bg-gray-200 rounded-md">
              <MaterialCommunityIcons name="security" size={28} color="black" />
            </View>
            <Text className="text-lg font-medium">Safety & Security</Text>
          </TouchableOpacity>{" "}
          <TouchableOpacity
            className="flex flex-row items-center gap-4"
            onPress={handlePress}
          >
            <View className="p-1.5 bg-gray-200 rounded-md">
              <MaterialIcons name="support-agent" size={28} color="black" />
            </View>
            <Text className="text-lg font-medium">Support & Help</Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            className="flex flex-row items-center gap-4"
            onPress={handleLogout}
          >
            <View className="p-1.5 bg-gray-200 rounded-md">
              <MaterialIcons name="logout" size={28} color="black" />
            </View>
            <Text className="text-lg font-medium">Logout</Text>
          </TouchableOpacity> */}
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="outline" className="bg-blue-900 border-white">
                <Text className="text-lg font-bold text-white">Logout</Text>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="p-4 bg-white border-white w-96">
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel className="bg-blue-900 border-white">
                  <TouchableOpacity>
                    <Text className="text-lg font-medium text-white">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                </AlertDialogCancel>
                <AlertDialogAction onPress={handleLogout}>
                  <TouchableOpacity>
                    <Text className="text-lg font-medium">Logout</Text>
                  </TouchableOpacity>
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </View>
      )}
    </SafeAreaView>
  );
}
