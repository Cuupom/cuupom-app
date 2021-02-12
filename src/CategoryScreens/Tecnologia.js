import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";


const Tecnologia = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/pc.png?alt=media&token=eab476b4-406d-49f4-a01e-aba80bdc09e3";
  return (
    <View style={styles.container}>
      <HomeHeader />
      <ReturnScreen Categoria="Tecnología" ScreenRetorno="Home" />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Computadoras"
          Opcion2="Telefonos"
          Opcion3="Perifericos"
          Opcion4="Accesorios"
          CuponesDisponibles="15"
        />
        <View style={styles.productos}>
          <CardDestacados
           Tag={true}
            Categoria="Tecnologia"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Audifonos Xbox One: Logitech G Pro (Budget)"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/headsets.jpg?alt=media&token=937f3684-bf77-4f98-b77f-5abe86b9d182"
          />

          <CardDestacados
           Tag={true}
            Categoria="Tecnologia"
            Precio="450"
            PrecioReal="500"
            Cashback="5"
            Cupones="3"
            Descripcion="Laptop Lenovo Gtx, Ryzen5 3.6 Ghz - 12 GB Ram "
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/pc.png?alt=media&token=eab476b4-406d-49f4-a01e-aba80bdc09e3"
          />
          <CardDestacados
           Tag={true}
            Categoria="Tecnologia"
            Precio="30"
            PrecioReal="38"
            Cashback="3"
            Cupones="4"
            Descripcion="Audifonos Xbox One: Logitech G Pro (Budget)"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/headsets.jpg?alt=media&token=937f3684-bf77-4f98-b77f-5abe86b9d182"
          />

          <CardDestacados
           Tag={true}
            Categoria="Tecnologia"
            Precio="450"
            PrecioReal="500"
            Cashback="5"
            Cupones="3"
            Descripcion="Laptop Lenovo Gtx, Ryzen5 3.6 Ghz - 12 GB Ram "
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/pc.png?alt=media&token=eab476b4-406d-49f4-a01e-aba80bdc09e3"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Tecnologia;

