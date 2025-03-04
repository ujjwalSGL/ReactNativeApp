// import { View, Text } from "react-native";
// import React from "react";
// import Onboarding from "./onboarding";

// export default function index() {
//   return (
//     <View>
//       <Onboarding />
//     </View>
//   );
// }

import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AnimationScreen from "./onboarding";

export default function App() {
  const [showAnimation, setShowAnimation] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleAnimationComplete = () => {
    setShowAnimation(false);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const restartAnimation = () => {
    setShowAnimation(true);
    setIsLoggedIn(false);
  };

  if (showAnimation) {
    return <AnimationScreen onComplete={handleAnimationComplete} />;
  }

  if (isLoggedIn) {
    return (
      <View className="items-center justify-center flex-1 bg-white">
        <Text className="mb-8 text-2xl font-bold">Dashboard</Text>
        <Text className="mb-8 text-lg">Welcome to your dashboard!</Text>
        <TouchableOpacity
          className="px-6 py-3 rounded-lg bg-sky-500"
          onPress={restartAnimation}
        >
          <Text className="font-semibold text-white">Restart Animation</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="items-center justify-center flex-1 p-6 bg-white">
      <Text className="mb-8 text-2xl font-bold">Login</Text>

      <View className="w-full mb-4">
        <Text className="mb-2 text-gray-700">Email</Text>
        <View className="px-4 py-3 border border-gray-300 rounded-lg">
          <Text className="text-gray-500">example@email.com</Text>
        </View>
      </View>

      <View className="w-full mb-8">
        <Text className="mb-2 text-gray-700">Password</Text>
        <View className="px-4 py-3 border border-gray-300 rounded-lg">
          <Text className="text-gray-500">••••••••</Text>
        </View>
      </View>

      <TouchableOpacity
        className="items-center w-full py-3 rounded-lg bg-sky-500"
        onPress={handleLogin}
      >
        <Text className="font-semibold text-white">Login</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-6" onPress={restartAnimation}>
        <Text className="text-sky-500">Restart Animation</Text>
      </TouchableOpacity>
    </View>
  );
}
