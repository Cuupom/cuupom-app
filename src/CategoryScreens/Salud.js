import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";

const Salud = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/farmacia.jpg?alt=media&token=60201702-5420-4c4f-a5d9-a27160f175ec";
  return (
    <Fragment>
      <HomeHeader />
      <ReturnScreen Categoria="Salud y Belleza" ScreenRetorno="Categorias" />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Infantil"
          Opcion2="Jovenes/Adultos"
          Opcion3="Higiene"
          Opcion4="Cosmeticos"
          CuponesDisponibles="13"
        />
        <View style={styles.productos}>
          <CardDestacados
            Tag={true}
            Categoria="Farmacia"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Hidrata e ilumina la piel del rostro con este sérum de vitamina C"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/medicamento.png?alt=media&token=f6fa2b99-1e1e-4c16-ab97-727c17c74606"
          />
          <CardDestacados
            Tag={true}
            Categoria="Farmacia"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Paracetamol, analgesico eficaz contra cualquier malestar"
            Foto={fotoMenu}
          />
          <CardDestacados
            Tag={true}
            Categoria="Farmacia"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Hidrata e ilumina la piel del rostro con este sérum de vitamina C"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/medicamento.png?alt=media&token=f6fa2b99-1e1e-4c16-ab97-727c17c74606"
          />
          <CardDestacados
            Tag={true}
            Categoria="Farmacia"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Paracetamol, analgesico eficaz contra cualquier malestar"
            Foto={fotoMenu}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Salud;

