import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View } from "react-native";
import { AuthProvider } from "./src/Navigation/AuthProvider";
import Welcome from "./src/Screens/Welcome";

function Logo() {
  return (
    <View style={styles.container}>
      <Image source={require("./src/img/U-2.png")} style={styles.imgFondo} />
      <StatusBar style="light"></StatusBar>
      <View style={styles.screenTop}>
        <Image
          source={require("./src/img/frame.png")}
          style={styles.logo}
        ></Image>
      </View>
    </View>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  });

  if (loading) {
    return <Logo />;
  } else {
    return (
      <AuthProvider>
        <Welcome />
      </AuthProvider>
    );
  }
}
export const Violeta = "#773DBD";
export const blueDark = "#3D1C65";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: Violeta,
    alignItems: "center",
    justifyContent: "center",
    //padding: "1%",
  },
  screenTop: {
    width: 250,
    height: "15%",
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: "100%",
    resizeMode: "contain",
  },
  imgFondo: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
