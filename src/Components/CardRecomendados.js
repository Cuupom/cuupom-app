import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function CardRecomendados() {
  return (
    <View style={styles.card}>
      <View style={styles.divImg}>
        <Image
          source={require("../img/galapagos.jpg")}
          style={styles.cardImg}
        />
      </View>
      <View style={styles.divCard}>
        <View style={styles.divTagPrecio}>
          <View style={styles.divCategoria}>
            <View style={styles.categoria}>
              <Text style={styles.txtCategoria}>Viajes</Text>
            </View>
          </View>

          <View style={styles.divPrecio}>
            <Text style={styles.precio}>$54</Text>
          </View>
        </View>
        <View style={styles.divTituloProducto}>
          <Text style={styles.tituloProd}>
            Promo Galapagos Express, podras observar paisajes inolvidables...
          </Text>
        </View>

        <View style={styles.diValores}>
          <Text style={styles.txtCashback}>Cashback: 10%</Text>
          <Text style={styles.txtPrecio}>$75</Text>
          <Text style={styles.txtAviso}>Aprovecha hoy!</Text>
        </View>
      </View>
    </View>
  );
}
const Violeta = "#773DBD";
const blueDark = "#3D1C65";
const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    margin: "4%",
    width: 200,
  },
  divImg: {
    width: 200,
    height: 150,
  },
  cardImg: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  divCard: {
    margin: "2%",
  },
  divTagPrecio: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    paddingVertical: "3%",
  },
  divCategoria: {
    flex: 4,
  },
  divPrecio: {
    flex: 2,
    alignItems: "flex-end",
  },
  categoria: {
    backgroundColor: blueDark,
    width: "60%",
    borderRadius: 5,
    paddingVertical: "2%",
    paddingLeft: "6%",
  },
  txtCategoria: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  precio: {
    color: Violeta,
    fontWeight: "bold",
    fontSize: 18,
  },
  divTituloProducto: {
    marginVertical: "1%",
  },
  tituloProd: {
    color: blueDark,
    fontWeight: "bold",
  },
  diValores: {
    marginVertical: "3%",
  },
  txtCashback: {
    color: "#000",
  },
  txtPrecio: {
    color: "gray",
    textDecorationLine: "line-through",
    marginVertical: "1%",
  },
  txtAviso: {
    color: "#09BFCB",
  },
});
