import { router } from "expo-router";
import { useEffect, useRef, useState } from "react";
import { Animated, Easing, Dimensions } from "react-native";
import { checkLoginStatus } from "@/api/LoginApiClient";

const { width, height } = Dimensions.get("window");

export default function Onboarding() {
  const [isCheckingAuth, setIsCheckingAuth] = useState(false);
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
  const fadeOut = useRef(new Animated.Value(1)).current;

  const screenCoverScale = (Math.max(width, height) / (width * 0.5)) * 2;

  const checkAuthAndNavigate = async () => {
    setIsCheckingAuth(true);
    try {
      const isLoggedIn = await checkLoginStatus();
      if (isLoggedIn) {
        router.replace("/dashBoard");
      } else {
        router.replace("/(auth)");
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      router.replace("/(auth)");
    }
  };

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
          Animated.timing(logoScale, {
            toValue: screenCoverScale,
            duration: 800,
            useNativeDriver: true,
            easing: Easing.out(Easing.cubic),
          }),
        ]),
        Animated.timing(fadeOut, {
          toValue: 0,
          duration: 400,
          useNativeDriver: true,
        }),
      ]),
    ]).start(() => {
      if (!isCheckingAuth) {
        setTimeout(() => {
          checkAuthAndNavigate();
        }, 500);
      }
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
    fadeOut,
    isCheckingAuth,
    screenCoverScale,
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
        className="absolute bg-yellow-600 rounded-full"
        style={{
          width: logoSize,
          height: logoSize,
          opacity: logoOpacity,
          transform: [{ translateY: logoY }, { scale: logoScale }],
        }}
      />
    </Animated.View>
  );
}
