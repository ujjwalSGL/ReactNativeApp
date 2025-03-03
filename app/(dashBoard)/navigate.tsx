import React from "react";
import { Image, Platform, View } from "react-native";
import MapView from "@/components/mymap";
import Layout from "@/layouts/ScreenLayout";

export default function Navigate() {
  return (
    <Layout>
      {Platform.OS === "web" ? (
        <Image
          source={require("@/assets/images/googleMap.jpg")}
          style={{
            resizeMode: "cover",
            flex: 1,
            width: "auto",
            height: "auto",
          }}
        />
      ) : (
        <View style={{ flex: 1 }}>
          <MapView
            // provider={PROVIDER_DEFAULT}
            style={{ flex: 1 }}
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
          >
            {/* <Marker
            coordinate={{
              latitude: 28.6139,
              longitude: 77.209,
            }}
            title="New Delhi"
          /> */}
          </MapView>
        </View>
      )}
    </Layout>
  );
}
