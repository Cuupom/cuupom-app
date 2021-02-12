import React, { Fragment } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";

const Electrodomesticos = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/electrodomesticos.jpg?alt=media&token=f1bb6397-4797-4992-b1c1-3be465da9b38";
  return (
    <Fragment>
      <HomeHeader />
      <ReturnScreen Categoria="Electrodomésticos" ScreenRetorno="Categorias" />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Electronicos"
          Opcion2="Linea Blanca"
          Opcion3="Entretenimiento"
          CuponesDisponibles="10"
        />
        <View style={styles.productos}>
          <CardDestacados
            Tag={true}
            Categoria="Electrodomesticos"
            Precio="230"
            PrecioReal="290"
            Cashback="5"
            Cupones="4"
            Descripcion="TELEVISOR TCL 49'' SMART C49P3FS"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/smartv.jpg?alt=media&token=602696fc-eb1f-4215-8afa-e77d704d4e3b"
          />
          <CardDestacados
            Tag={true}
            Categoria="Electrodomesticos"
            Precio="630"
            PrecioReal="690"
            Cashback="6"
            Cupones="5"
            Descripcion="Samsung Lavadora Secadora / WD11N64FRAX/ED / 24 lbs y 13 lbs"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/lavadora.jpg?alt=media&token=8f2d0e2f-6273-4260-831e-32a5c896ce05"
          />
          <CardDestacados
            Tag={true}
            Categoria="Electrodomesticos"
            Precio="230"
            PrecioReal="290"
            Cashback="5"
            Cupones="4"
            Descripcion="TELEVISOR TCL 49'' SMART C49P3FS"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/smartv.jpg?alt=media&token=602696fc-eb1f-4215-8afa-e77d704d4e3b"
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Electrodomesticos;
