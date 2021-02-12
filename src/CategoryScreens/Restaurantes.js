import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen"; 

export const Restaurantes = () => {
  const fotoMenu= 'https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/hotdog.png?alt=media&token=84020b4c-cd8a-4c11-ad27-d048b9456aee';
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ReturnScreen Categoria="Restaurante" ScreenRetorno="Categorias" />
      <ScrollView>
      <MenuCategorias Foto={fotoMenu} Opcion1='Mexicana' Opcion2='Huecas' Opcion3='Hamburguesas' Opcion4='Ecuatoriana' CuponesDisponibles='21' />
        <View style={styles.productos}>
          <CardDestacados
            Categoria="Restaurantes"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="15 Alitas, con los sabores que desees escoger, Incluye Salsa Blue Cheese, Apio y Zanahoria"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/alitas_bbq.jpg?alt=media&token=e4c89bd2-f7e4-42af-91c3-286380ad5238"
          />
          <CardDestacados
            Categoria="Restaurantes"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="Hot Dog, mezcla mexicana y amercana, doble sala + papas con queso"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/hotdog.png?alt=media&token=84020b4c-cd8a-4c11-ad27-d048b9456aee"
          />
          <CardDestacados
            Categoria="Restaurantes"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="15 Alitas, con los sabores que desees escoger, Incluye Salsa Blue Cheese, Apio y Zanahoria"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/alitas_bbq.jpg?alt=media&token=e4c89bd2-f7e4-42af-91c3-286380ad5238"
          />
          <CardDestacados
            Categoria="Restaurantes"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="Hot Dog, mezcla mexicana y amercana, doble sala + papas con queso"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/hotdog.png?alt=media&token=84020b4c-cd8a-4c11-ad27-d048b9456aee"
          />
          <CardDestacados
            Categoria="Restaurantes"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="15 Alitas, con los sabores que desees escoger, Incluye Salsa Blue Cheese, Apio y Zanahoria"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/alitas_bbq.jpg?alt=media&token=e4c89bd2-f7e4-42af-91c3-286380ad5238"
          />
          <CardDestacados
            Categoria="Restaurantes"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="Hot Dog, mezcla mexicana y amercana, doble sala + papas con queso"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/hotdog.png?alt=media&token=84020b4c-cd8a-4c11-ad27-d048b9456aee"
          />
        </View>
      </ScrollView>
    </View>
  );
};
const greenLight = "#09BFCB";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  divMenu: {
    width: "100%",
  },
  imgMenu: {
    width: "100%",
  },
  numCupones: {
    position: "absolute",
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtCupones: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 23,
  },
  divOpciones: {
    width: "100%",
    height: "90%",
    position: "absolute",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingLeft: "15%",
  },
  menuOpciones: {
    flexDirection: "row",
  },
  btnOpcion: {
    margin: "3%",
    backgroundColor: greenLight,
    borderRadius: 20,
    alignItems: "center",
    padding: 8,
  },
  txtOpciones: {
    color: "#000",
  },
  productos: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingTop: "8%",
    paddingHorizontal: ".5%",
  },
});
