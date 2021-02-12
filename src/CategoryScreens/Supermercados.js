import React, { Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import MenuCategorias from "../Components/MenuCategorias";
import ReturnScreen from "../Components/ReturnScreen";
import { styles } from "./Restaurantes";


const Supermercados = () => {
  const fotoMenu =
    "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/supermercado.jpg?alt=media&token=c2721fcf-f413-4d13-bd45-2626ebdd9ef6";
  return (
    <Fragment>
      <HomeHeader />
      <ReturnScreen Categoria="Supermercados" ScreenRetorno="Categorias" />
      <ScrollView>
        <MenuCategorias
          Foto={fotoMenu}
          Opcion1="Verduras"
          Opcion2="Carnes"
          Opcion3="Enlatados"
          Opcion4="Bebidas"
          CuponesDisponibles="24"
        />
        <View style={styles.productos}>
          <CardDestacados
            Categoria="Supermercados"
            Precio="4"
            PrecioReal="5"
            Cashback="3"
            Cupones="6"
            Descripcion="Atún Van Camps, lomitos de atún en aceite de girasol"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/atun.jpg?alt=media&token=bc86895c-a119-447b-a1ed-40d2f0378f90"
          />
                    <CardDestacados
            Categoria="Supermercados"
            Precio="8"
            PrecioReal="12"
            Cashback="4"
            Cupones="7"
            Descripcion="Filete de carne de vaca, con bajos porcentajes de grasas"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/carnes.jpg?alt=media&token=93e839f7-910b-4d36-88dc-f74c23c910ec"
          />
                    <CardDestacados
            Categoria="Supermercados"
            Precio="5"
            PrecioReal="7"
            Cashback="5"
            Cupones="4"
            Descripcion="Atún Van Camps, lomitos de atún en aceite de girasol"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/atun.jpg?alt=media&token=bc86895c-a119-447b-a1ed-40d2f0378f90"
          />
                              <CardDestacados
            Categoria="Supermercados"
            Precio="8"
            PrecioReal="12"
            Cashback="4"
            Cupones="7"
            Descripcion="Filete de carne de vaca, con bajos porcentajes de grasas"
            Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/carnes.jpg?alt=media&token=93e839f7-910b-4d36-88dc-f74c23c910ec"
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};

export default Supermercados;


