import React from "react";
import { Platform } from "react-native";

const MapView = (props: any) => {
  if (Platform.OS === "web") {
    return <WebMap {...props} />;
  }

  return <NativeMap {...props} />;
};

const WebMap = (props: any) => {
  const {
    initialRegion,
    style,
    showsUserLocation,
    showsCompass,
    showsTraffic,
  } = props;
  const [mapLoaded, setMapLoaded] = React.useState(false);
  const [error, setError] = React.useState("");
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  React.useEffect(() => {
    if (!apiKey) {
      setError("Google Maps API key is missing");
      return;
    }

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${"AIzaSyCXrQ8JATZbgWPKJ0S8WvmsPKO87Vt3XLA"}&libraries=places`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setMapLoaded(true);
      initMap();
    };
    script.onerror = () => {
      setError("Failed to load Google Maps API");
    };
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, [apiKey]);

  const initMap = () => {
    if (window.google && mapRef.current) {
      const map = new window.google.maps.Map(mapRef.current, {
        center: {
          lat: initialRegion?.latitude || 0,
          lng: initialRegion?.longitude || 0,
        },
        zoom: 12,
        mapTypeId: window.google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: !showsCompass,
      });

      if (showsTraffic) {
        const trafficLayer = new window.google.maps.TrafficLayer();
        trafficLayer.setMap(map);
      }

      if (showsUserLocation && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
          const userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };

          new window.google.maps.Marker({
            position: userLocation,
            map: map,
            title: "Your Location",
          });
        });
      }
    }
  };

  const mapRef = React.useRef(null);

  if (error) {
    return (
      <div
        style={{
          ...style,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f0f0",
        }}
      >
        <p style={{ color: "red", textAlign: "center", padding: "20px" }}>
          {error}
        </p>
      </div>
    );
  }

  return (
    <div
      ref={mapRef}
      style={{
        width: "100%",
        height: "100%",
        ...style,
      }}
    >
      {!mapLoaded && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <p>Loading map...</p>
        </div>
      )}
    </div>
  );
};

const NativeMap = (props: any) => {
  const [NativeMapView, setNativeMapView] = React.useState<any>(null);

  React.useEffect(() => {
    import("react-native-maps")
      .then((module) => {
        setNativeMapView(() => module.default);
      })
      .catch((err) => {
        console.error("Failed to load react-native-maps:", err);
      });
  }, []);

  if (!NativeMapView) {
    return null;
  }

  return <NativeMapView {...props} provider="google" />;
};

export default MapView;
