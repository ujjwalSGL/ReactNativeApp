// import "../global.css";
// import {
//   DarkTheme,
//   DefaultTheme,
//   ThemeProvider,
// } from "@react-navigation/native";
// import { PortalHost } from "@rn-primitives/portal";
// import { useFonts } from "expo-font";
// import { Stack, SplashScreen, Redirect } from "expo-router";
// import { StatusBar } from "expo-status-bar";
// import { useEffect, useState } from "react";
// import "react-native-reanimated";
// import { useColorScheme } from "@/hooks/useColorScheme";
// import { checkLoginStatus } from "@/api/LoginApiClient";
// import { Platform } from "react-native";

// // Prevent the splash screen from auto-hiding before asset loading is complete.
// SplashScreen.preventAutoHideAsync();

// export default function RootLayout() {
//   const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
//   const colorScheme = useColorScheme();
//   const [loaded] = useFonts({
//     SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
//   });

//   useEffect(() => {
//     const checkAuth = async () => {
//       const loggedIn = await checkLoginStatus();
//       setIsLoggedIn(loggedIn);
//     };
//     checkAuth();
//   }, []);

//   useEffect(() => {
//     if (loaded) {
//       SplashScreen.hideAsync();
//     }
//   }, [loaded]);

//   if (!loaded || isLoggedIn === null) {
//     return null;
//   }

//   return (
//     <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
//       {Platform.OS === "web" ? (
//         isLoggedIn ? (
//           <Redirect href="/dashBoard" />
//         ) : (
//           <Redirect href="/(auth)" />
//         )
//       ) : (
//         <Redirect href="/(splashScreen)/onboarding" />
//       )}
//       <Stack>
//         <Stack.Screen name="(splashScreen)" options={{ headerShown: false }} />
//         <Stack.Screen name="(auth)" options={{ headerShown: false }} />
//         <Stack.Screen name="(dashBoard)" options={{ headerShown: false }} />
//         <Stack.Screen name="+not-found" />
//         <PortalHost />
//       </Stack>
//       <StatusBar style="auto" />
//     </ThemeProvider>
//   );
// }


import "../global.css";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { PortalHost } from "@rn-primitives/portal";
import { useFonts } from "expo-font";
import { Stack, SplashScreen } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";
import { checkLoginStatus } from "@/api/LoginApiClient";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    const checkAuth = async () => {
      const loggedIn = await checkLoginStatus();
      setIsLoggedIn(loggedIn);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="(splashScreen)" options={{ headerShown: false }} />
        <Stack.Screen name="(auth)" options={{ headerShown: false }} />
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="(dashBoard)" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <PortalHost />
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
