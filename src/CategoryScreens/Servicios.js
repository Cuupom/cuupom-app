import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";


const Servicios = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/servicios.jpg?alt=media&token=5f923a70-0dac-4c31-ba3b-d6e31c0a6103";
  return (
    <Fragment>
      <HomeHeader />
      <ReturnScreen Categoria="Servicios" ScreenRetorno="Categorias" />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Aseo y Limpieza"
          Opcion2="Transporte"
          CuponesDisponibles='19'
        />
        <View style={styles.productos}>
          <CardDestacados
            Tag={true}
            Categoria="Servicios"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Limpieza y encerado de vehiculos, servicio a domicilio"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/carwash.jpg?alt=media&token=00d67465-c750-4ce9-be85-25be5c91fc30"
          />

          <CardDestacados
            Tag={true}
            Categoria="Servicios"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Servicio de encomiendas por toda la cuidad de Guayaquil"
            Foto={fotoMenu}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Servicios;

