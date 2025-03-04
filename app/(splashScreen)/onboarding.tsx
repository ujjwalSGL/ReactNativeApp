// import {
//   View,
//   Text,
//   TouchableOpacity,
//   ImageBackground,
//   Image,
// } from "react-native";
// import React, { useRef, useState } from "react";
// import LoginPageLayout from "@/layouts/LoginPageLayout";
// import { router } from "expo-router";
// import Swiper from "react-native-swiper";
// import { onBoardingData } from "@/constants/onBoarding";

// export default function Onboarding() {
//   const swipeRef = useRef<Swiper>(null);
//   const [activeIndex, setActiveIndex] = useState(0);
//   return (
//     <LoginPageLayout>
//       <TouchableOpacity
//         onPress={() => router.replace("/(auth)")}
//         className="flex items-end justify-end w-full p-5"
//       >
//         <Text className="font-medium text-md">Skip</Text>
//       </TouchableOpacity>
//       <Swiper
//         loop={false}
//         ref={swipeRef}
//         dot={<View className="h-[4px] w-2 mx-1 bg-slate-100 rounded-full" />}
//         activeDot={
//           <View className="h-[4px] w-2 mx-1  bg-slate-300 rounded-full" />
//         }
//         onIndexChanged={(index) => {
//           setActiveIndex(index);
//         }}
//       >
//         {onBoardingData.map((items) => (
//           <View key={items.id} className="">
//             <ImageBackground source={items.image} className="h-screen">
//               <View className="flex items-center justify-center">
//                 <Image
//                   source={require("@/assets/images/logo.png")}
//                   style={{ width: 100, height: 40, resizeMode: "contain" }}
//                 />
//                 <View className="p-10">
//                   <Text className="text-xl font-bold text-white">
//                     {items.description}
//                   </Text>
//                 </View>
//               </View>
//             </ImageBackground>
//           </View>
//         ))}
//       </Swiper>
//     </LoginPageLayout>
//   );
// }
// }

import { router } from "expo-router";
import { useEffect, useRef } from "react";
import { Animated, Easing, Dimensions, Image } from "react-native";

const { width, height } = Dimensions.get("window");

export default function Onboarding({
  onComplete = () => {},
}: {
  onComplete?: () => void;
}) {
  const strip1 = useRef(new Animated.Value(height + 100)).current;
  const strip2 = useRef(new Animated.Value(height + 200)).current;
  const strip3 = useRef(new Animated.Value(height + 300)).current;
  const strip4 = useRef(new Animated.Value(height + 400)).current;

  const rotate1 = useRef(new Animated.Value(10)).current;
  const rotate2 = useRef(new Animated.Value(10)).current;
  const rotate3 = useRef(new Animated.Value(10)).current;
  const rotate4 = useRef(new Animated.Value(10)).current;

  const logoY = useRef(new Animated.Value(height)).current;
  const logoScale = useRef(new Animated.Value(0)).current;
  const logoOpacity = useRef(new Animated.Value(0)).current;
  const blastScale = useRef(new Animated.Value(0)).current;
  const blastOpacity = useRef(new Animated.Value(0)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.stagger(150, [
        Animated.parallel([
          Animated.timing(strip1, {
            toValue: -height * 0.5,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(rotate1, {
            toValue: -10,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
        Animated.parallel([
          Animated.timing(strip2, {
            toValue: -height * 0.5,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(rotate2, {
            toValue: -10,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
        Animated.parallel([
          Animated.timing(strip3, {
            toValue: -height * 0.5,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(rotate3, {
            toValue: -10,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
        Animated.parallel([
          Animated.timing(strip4, {
            toValue: -height * 0.5,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(rotate4, {
            toValue: -10,
            duration: 1800,
            useNativeDriver: true,
            easing: Easing.inOut(Easing.ease),
          }),
        ]),
      ]),
      Animated.sequence([
        Animated.delay(500),
        Animated.parallel([
          Animated.timing(logoY, {
            toValue: -height * 0.25,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.out(Easing.ease),
          }),
          Animated.timing(logoScale, {
            toValue: 1,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.out(Easing.back(1.5)),
          }),
          Animated.timing(logoOpacity, {
            toValue: 1,
            duration: 400,
            useNativeDriver: true,
          }),
        ]),
        Animated.timing(logoY, {
          toValue: 0,
          duration: 600,
          useNativeDriver: true,
          easing: Easing.in(Easing.ease),
        }),
        Animated.parallel([
          Animated.timing(logoOpacity, {
            toValue: 0,
            duration: 100,
            useNativeDriver: true,
          }),
          Animated.timing(blastScale, {
            toValue: Math.max(width, height) / 150,
            duration: 600,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
          Animated.timing(blastOpacity, {
            toValue: 1,
            duration: 50,
            useNativeDriver: true,
          }),
        ]),
        Animated.delay(300),
        Animated.timing(fadeOut, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      onComplete();
      setTimeout(() => {
        router.replace("/(dashBoard)/dashboard");
      }, 1000);
    });
  }, [
    strip1,
    strip2,
    strip3,
    strip4,
    rotate1,
    rotate2,
    rotate3,
    rotate4,
    logoY,
    logoScale,
    logoOpacity,
    blastScale,
    blastOpacity,
    fadeOut,
  ]);

  const logoSize = width * 0.5;

  return (
    <Animated.View
      className="absolute inset-0 flex items-center justify-center bg-white"
      style={{ opacity: fadeOut }}
    >
      <Animated.View
        className="absolute overflow-hidden rounded-t-full bg-sky-400"
        style={{
          transform: [
            { translateY: strip1 },
            {
              rotate: rotate1.interpolate({
                inputRange: [-10, 10],
                outputRange: ["-10deg", "10deg"],
              }),
            },
            { scale: 1.2 },
          ],
          height: height * 0.6,
          width: width * 1.5,
          left: -width * 0.25,
          borderTopLeftRadius: width * 0.75,
          borderTopRightRadius: width * 0.75,
        }}
      />

      <Animated.View
        className="absolute overflow-hidden bg-white rounded-t-full"
        style={{
          transform: [
            { translateY: strip2 },
            {
              rotate: rotate2.interpolate({
                inputRange: [-10, 10],
                outputRange: ["-10deg", "10deg"],
              }),
            },
            { scale: 1.15 },
          ],
          height: height * 0.55,
          width: width * 1.4,
          left: -width * 0.2,
          borderTopLeftRadius: width * 0.7,
          borderTopRightRadius: width * 0.7,
        }}
      />

      <Animated.View
        className="absolute overflow-hidden rounded-t-full bg-sky-400"
        style={{
          transform: [
            { translateY: strip3 },
            {
              rotate: rotate3.interpolate({
                inputRange: [-10, 10],
                outputRange: ["-10deg", "10deg"],
              }),
            },
            { scale: 1.1 },
          ],
          height: height * 0.5,
          width: width * 1.3,
          left: -width * 0.15,
          borderTopLeftRadius: width * 0.65,
          borderTopRightRadius: width * 0.65,
        }}
      />

      <Animated.View
        className="absolute overflow-hidden bg-white rounded-t-full"
        style={{
          transform: [
            { translateY: strip4 },
            {
              rotate: rotate4.interpolate({
                inputRange: [-10, 10],
                outputRange: ["-10deg", "10deg"],
              }),
            },
            { scale: 1.05 },
          ],
          height: height * 0.45,
          width: width * 1.2,
          left: -width * 0.1,
          borderTopLeftRadius: width * 0.6,
          borderTopRightRadius: width * 0.6,
        }}
      />

      <Animated.View
        className="absolute"
        style={{
          width: logoSize,
          height: logoSize,
          opacity: logoOpacity,
          transform: [{ translateY: logoY }, { scale: logoScale }],
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </Animated.View>

      <Animated.View
        className="absolute"
        style={{
          width: 300,
          height: 300,
          opacity: blastOpacity,
          transform: [{ scale: blastScale }],
        }}
      >
        <Image
          source={require("@/assets/images/logo.png")}
          style={{ width: "100%", height: "100%", resizeMode: "contain" }}
        />
      </Animated.View>
    </Animated.View>
  );
}
