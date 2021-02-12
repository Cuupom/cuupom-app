import React, { Fragment } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";

const Regalos = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/regalos.jpeg?alt=media&token=75a33a59-25d4-4100-9d0c-8dfa2e0b650d";
  return (
    <Fragment>
      <HomeHeader />
      <ReturnScreen Categoria="Regalos" ScreenRetorno="Categorias" />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Tazas"
          Opcion2="Peluches"
          Opcion3='Arreglos'
          CuponesDisponibles='29'
        />
        <View style={styles.productos}>
        <CardDestacados
            Categoria="Regalos"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="15 Alitas, con los sabores que desees escoger, Incluye Salsa Blue Cheese, Apio y Zanahoria"
            Foto={fotoMenu}
          />
           <CardDestacados
            Categoria="Regalos"
            Precio="23"
            PrecioReal="29"
            Cashback="3"
            Cupones="6"
            Descripcion="Regalale a esa persona especial un bonito detalle con una foto"
            Foto={fotoMenu}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Regalos;


