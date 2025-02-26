import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "black",
        headerShown: false,
      }}
    >
      <Tabs.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="home-sharp" size={24} color="black" />
          ),
        }}
        name="dashBoard"
      />
      <Tabs.Screen
        name="navigate"
        options={{
          title: "Navigate",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="navigate-circle-sharp" size={24} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Setting",
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name="settings" size={24} color="black" />
          ),
        }}
      />
    </Tabs>
  );
}
