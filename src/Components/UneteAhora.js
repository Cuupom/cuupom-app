import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function UneteAhora() {
  const navigation = useNavigation();
  return (
    <View style={styles.divAds}>
      <Image source={require("../img/ad.png")} style={styles.imgAD} />
      <View style={styles.Anuncio}>
        <View style={styles.shapeAd} opacity={0.8}></View>
        <Text style={styles.tituloAd}>Únete ahora</Text>
        <Text style={styles.descripcionAd}>
          Regístrate ahora y obtén 15% de descuento en tu primer cupón
        </Text>
        <TouchableOpacity
          style={styles.btnRegistrarse}
          onPress={() => navigation.navigate("Registrarse")}
        >
          <Text style={styles.txtRegistrarme}>QUIERO REGISTRARME</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const turquesa = "#09BFCB";
const styles = StyleSheet.create({
  divAds: {
    width: "100%",
    height: 240,
    alignItems: "center",
    marginVertical: "7%",
  },
  imgAD: {
    position: "absolute",
    overflow: "hidden",
    height: "90%",
    width: "95%",
    borderRadius: 8,
  },
  Anuncio: {
    width: "95%",
    height: "90%",
    borderRadius: 10,
    alignItems: "flex-start",
    justifyContent: "center",
    paddingLeft: "4%",
    overflow: "hidden",
  },
  shapeAd: {
    width: "100%",
    height: "110%",
    backgroundColor: "#44168F",
    position: "absolute",
    borderRadius: 200,
    marginLeft: "-30%",
  },
  tituloAd: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "bold",
    margin: "2%",
  },
  descripcionAd: {
    color: "#fff",
    fontSize: 15,
    margin: "1%",
    width: "55%",
  },
  btnRegistrarse: {
    backgroundColor: turquesa,
    borderRadius: 7,
    padding: "4%",
    marginVertical: "3%",
  },
  txtRegistrarme: {
    fontWeight: "bold",
    color: "black",
  },
});
