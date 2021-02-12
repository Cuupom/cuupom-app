import { StatusBar } from "expo-status-bar";
import React, {useContext} from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import CardDestacados from "../Components/CardDestacados";
import HomeHeader from "../Components/HomeHeader";
import UneteAhora from "../Components/UneteAhora";
import { AuthContext } from "../Navigation/AuthProvider";


export const Categorias = ({ navigation }) => {
  const { user } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <HomeHeader />
      <ScrollView>
        <View style={styles.destacado}>
          <Text style={styles.txtDestacado}>CATEGORÍAS</Text>
        </View>

        <View style={styles.divCategorias}>
          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Restaurantes")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/restaurantes.png")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}> Restaurantes</Text>

            <Text style={styles.txtCupones}> 15 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Tecnologia")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/tecnologia.png")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}>Tecnología</Text>
            <Text style={styles.txtCupones}> 13 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Salud")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/salud.png")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}>Salud y Belleza</Text>
            <Text style={styles.txtCupones}> 5 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Servicios")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/servicios.png")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}> Servicios</Text>
            <Text style={styles.txtCupones}> 8 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Supermercados")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/supermercados.png")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}>Productos</Text>
            <Text style={styles.txtCupones}> 20 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Viajes")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/viajes.png")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}>Viajes y experiencias</Text>
            <Text style={styles.txtCupones}> 6 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Regalos")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/regalos.jpeg")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}>Regalos</Text>
            <Text style={styles.txtCupones}> 9 Cupones</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.cardCategoria}
            onPress={() => navigation.navigate("Electrodomesticos")}
          >
            <View style={styles.iconCategoria}>
              <Image
                source={require("../img/icons/electrodomesticos.jpg")}
                style={styles.imgCategoria}
              />
            </View>
            <Text style={styles.txtCategoria}>Electrodomésticos</Text>
            <Text style={styles.txtCupones}> 8 Cupones</Text>
          </TouchableOpacity>
        </View>

        <View>
          { (user == null) ? <UneteAhora /> : null}
        </View>

        <View style={styles.destacado}>
          <Text style={styles.txtDestacado}>cupones destacados</Text>
        </View>

        <View style={styles.productos}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetalleProducto", {
                nombre:
                  "15 Alitas, con los sabores que desees escoger, Incluye Salsa Blue Cheese, Apio y Zanahoria",
                precio: "$15",
                foto:
                  "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/alitas_bbq.jpg?alt=media&token=e4c89bd2-f7e4-42af-91c3-286380ad5238",
                cashback: "4%",
                empresa: "Eddy's BBQ",
                cupones: "10",
                expira: "EXP: 6 marzo 2021",
                categoria: "Restaurantes",
              });
            }}
          >
            <CardDestacados
              Categoria="Restaurantes"
              Precio="15"
              PrecioReal="19"
              Cashback="4"
              Cupones="10"
              Descripcion="15 Alitas, con los sabores que desees escoger, Incluye Salsa Blue Cheese, Apio y Zanahoria"
              Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/alitas_bbq.jpg?alt=media&token=e4c89bd2-f7e4-42af-91c3-286380ad5238"
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetalleProducto", {
                nombre:
                  "Viaje de excursión a Galapagos y conosca las islas encantadas",
                precio: "$130",
                foto:
                  "https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/galapagos.jpg?alt=media&token=77d9f670-e750-4bb7-83ab-cebb5fa52acd",
                cashback: "3%",
                empresa: "Viator",
                cupones: "3",
                expira: "EXP: 15 marzo 2021",
                categoria: "Viajes",
              });
            }}
          >
            <CardDestacados
              Tag={true}
              Categoria="Viajes"
              Precio="130"
              PrecioReal="138"
              Cashback="3"
              Cupones="3"
              Descripcion="Viaje de excursión a Galapagos y conosca las islas encantadas"
              Foto="https://firebasestorage.googleapis.com/v0/b/fir-gruupom.appspot.com/o/galapagos.jpg?alt=media&token=77d9f670-e750-4bb7-83ab-cebb5fa52acd"
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const blueDark = "#3D1C65";
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  destacado: {
    marginVertical: "4%",
    margin: "4%",
  },
  txtDestacado: {
    color: blueDark,
    fontWeight: "bold",
    fontSize: 22,
    textTransform: "capitalize",
  },
  divCategorias: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    margin: "1%",
  },
  cardCategoria: {
    alignItems: "center",
    margin: "2%",
  },
  categorias: {
    flexDirection: "row",
    alignContent: "flex-start",
    margin: "1%",
  },
  iconCategoria: {
    width: 160,
    height: 125,
    justifyContent: "center",
    alignItems: "center",
  },
  imgCategoria: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  txtCategoria: {
    width: "100%",
    fontSize: 12,
    color: blueDark,
    marginTop: "5%",
    margin: "1%",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
  },
  txtCupones: {
    width: "100%",
    fontSize: 11,
    color: "gray",
    margin: "1%",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
  },
  productos: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    paddingHorizontal: "1%",
  },
});
