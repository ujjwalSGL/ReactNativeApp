import React from "react";
import { View } from "react-native";
import MapView from "@/components/mymap";
import Layout from "@/layouts/ScreenLayout";

export default function Navigate() {
  return (
    <Layout>
      <View className="flex-1">
        <MapView
          style={{ flex: 1 }}
          provider="google"
          initialRegion={{
            latitude: 28.6139,
            longitude: 77.209,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          mapType="standard"
          showsUserLocation={true}
          showsCompass={true}
          showsTraffic={true}
          minZoomLevel={3}
        />
      </View>
    </Layout>
  );
}
