import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View } from "react-native";

export default function Cargando({ navigation }) {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
        setLoading(true)
    }, 3000);
  }, );
  
  if (loading ) {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Image source={require("../img/load.gif")} style={styles.load} />
    </View>
  );
}
const Violeta = "#773DBD";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Violeta,
  },
  load: {
    width: 200,
    height: 200,
  },
});
