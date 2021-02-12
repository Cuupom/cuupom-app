import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";


const Viajes = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/viator1.jpg?alt=media&token=7fca7b79-450b-4cf7-a48c-5dad166774d0";
  return (
    <Fragment>
      <HomeHeader />
      <ReturnScreen
        Categoria="Viajes y Experiencias"
        ScreenRetorno="Categorias"
      />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Ecuador"
          Opcion2="Latinoamerica"
          Opcion3="Europa"
          CuponesDisponibles='12'
        />
        <View style={styles.productos}>
        <CardDestacados
            Categoria="Viajes"
            Precio="130"
            PrecioReal="138"
            Cashback="3"
            Cupones="3"
            Descripcion="Viaje de excursión a Galapagos y conosca las islas encantadas"
            Foto='https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/galapagos.jpg?alt=media&token=77d9f670-e750-4bb7-83ab-cebb5fa52acd'
          />
                <CardDestacados
            Categoria="Viajes"
            Precio="130"
            PrecioReal="138"
            Cashback="3"
            Cupones="8"
            Descripcion="Viaje Extremo a las encantadoras selvas Ecuatorianas"
            Foto={fotoMenu}
          />
                <CardDestacados
            Categoria="Viajes"
            Precio="130"
            PrecioReal="138"
            Cashback="3"
            Cupones="4"
            Descripcion="Viaje de excursión a Galapagos y conosca las islas encantadas"
            Foto='https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/galapagos.jpg?alt=media&token=77d9f670-e750-4bb7-83ab-cebb5fa52acd'
          />
        </View>

      </ScrollView>
    </Fragment>
  );
};

export default Viajes;

