import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function CardDestacados({
  Categoria,
  Precio,
  PrecioReal,
  Cashback,
  Descripcion,
  Foto,
  Cupones,
  Tag,
}) {
  //Descripcion solo debe tener 63 caracteres
  return (
    <View style={styles.cardProducto}>
      <View style={styles.cardImg}>
        <Image source={{ uri: Foto }} style={styles.imgProducto} />
      </View>
      <View style={styles.detallesCard}>
        <Image source={require("../img/C.png")} style={styles.imgC} />
        <View style={styles.detallesDiv}>
          <View style={styles.Valores}>
            {!Tag ? (
              <View style={styles.divTag2}>
                <Text style={styles.tag}>{Categoria}</Text>
              </View>
            ) : (
              <View style={styles.divTag3}>
                <Text style={styles.tag}>{Categoria}</Text>
              </View>
            )}

            <Text style={styles.price}>${Precio}</Text>
          </View>
          <Text style={styles.descripcion}>{Descripcion.substr(0, 62)}...</Text>
          <Text style={styles.cashback}>Cashback: {Cashback}%</Text>
          <Text style={styles.priceReal}>${PrecioReal}</Text>
          <Text style={styles.restante}>Quedan {Cupones} cupones</Text>
        </View>
      </View>
    </View>
  );
}
const Violeta = "#773DBD";
const blueDark = "#3D1C65";
const greenAqua = "#09BFCB";
const crema = "#FFFAEA";
const orange = "#FB7500";
const turquesa = "#09BFCB";
const styles = StyleSheet.create({
  cardProducto: {
    width: "95%",
    paddingHorizontal: "2%",
    //paddingVertical: "2%",
    margin: "2%",
    display: "flex",
    flexDirection: "row",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardImg: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: "3%",
  },
  imgProducto: {
    width: "100%",
    height: 165,
    borderRadius: 6,
    //resizeMode: "contain",
  },
  detallesCard: {
    overflow: "hidden",
    flex: 3,
  },
  detallesDiv: {
    marginVertical: "4%",
    paddingHorizontal: "4%",
  },
  imgC: {
    position: "absolute",
    height: "100%",
    width: "100%",
    marginLeft: "10%",
  },
  Valores: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "3%",
    alignItems: "baseline",
  },
  divTag: {
    backgroundColor: orange,
    borderRadius: 6,
    paddingVertical: "2%",
    paddingHorizontal: "6%",
    justifyContent: "center",
  },
  divTag2: {
    backgroundColor: blueDark,
    borderRadius: 6,
    paddingVertical: "1.5%",
    paddingHorizontal: "6%",
    justifyContent: "center",
  },
  divTag3: {
    backgroundColor: orange,
    borderRadius: 6,
    paddingVertical: "1.5%",
    paddingHorizontal: "6%",
    justifyContent: "center",
  },
  tag: {
    color: "#fff",
    fontSize: 13,
  },
  price: {
    color: Violeta,
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 3,
  },
  priceReal: {
    textDecorationLine: "line-through",
    color: "gray",
    fontWeight: "700",
    marginVertical: "1%",
    fontSize: 15,
  },
  descripcion: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: "4%",
    color: blueDark,
  },
  cashback: {
    color: "black",
  },
  restante: {
    color: orange,
    fontWeight: "600",
  },
});
