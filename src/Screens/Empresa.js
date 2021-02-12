import React, { Component, Fragment, useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";
import HomeHeader from "../Components/HomeHeader";
import ReturnScreen from "../Components/ReturnScreen";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Feather } from "@expo/vector-icons";
import CardDestacados from "../Components/CardDestacados";
import MapView, { Marker } from "react-native-maps";

const Empresa = ({ navigation }) => {
  const Linea = () => {
    return <View style={styles.line} opacity={0.2}></View>;
  };
  const Cupones = () => (
    <View style={{ width: "100%", height: "100%" }}>
      <View style={styles.cupones}>
        <Text style={styles.txtCupones}>3 Cupones</Text>
      </View>
      <View>
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
      </View>
    </View>
  );

  const Locales = () => (
    <View style={styles.divMap}>
      <View>
        <MapView
          style={{ width: "100%", height: 400 }}
          region={{
            latitude: -2.141259073628274,
            longitude: -79.8644853852737,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            draggable
            coordinate={{
              latitude: -2.141259073628274,
              longitude: -79.8644853852737,
            }}
            title="Chillis"
            pinColor={Violeta}
          />
        </MapView>
      </View>

      <View style={styles.masDirecciones}>
        <View style={styles.divDirecciones}>
          <Text style={styles.txtLocal}>Local 1</Text>
          <Text style={styles.txtDireccion2}>
            Avenida Santa Clara 734, Huechuraba, Guayaquil
          </Text>
        </View>
        <View style={styles.verMapa}>
          <TouchableOpacity style={styles.btnVer}>
            <Text style={styles.txtBoton}>Ver en el mapa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Linea />
      <View style={styles.masDirecciones}>
        <View style={styles.divDirecciones}>
          <Text style={styles.txtLocal}>Local 2</Text>
          <Text style={styles.txtDireccion2}>
            Avenida Santa Clara 734, Huechuraba, Guayaquil
          </Text>
        </View>
        <View style={styles.verMapa}>
          <TouchableOpacity style={styles.btnVer}>
            <Text style={styles.txtBoton}>Ver en el mapa</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Linea />
    </View>
  );

  const Contacto = () => (
    <View>
      <View style={styles.masDirecciones}>
        <View style={styles.divDirecciones}>
          <Text style={styles.txtLocal}>Servicio al cliente</Text>
          <Text style={styles.txtDireccion2}>+593 942 814 723</Text>
        </View>
        <View style={styles.verMapa}>
          <TouchableOpacity
            style={styles.btnVer}
            onPress={() => {
              try {
                Linking.openURL(`tel://+593942814723`);
              } catch (error) {
                alert(error);
              }
            }}
          >
            <Feather name="phone" size={26} color={Violeta} />
            <Text style={styles.txtBoton}>Llamar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Linea />
      <View style={styles.masDirecciones}>
        <View style={styles.divDirecciones}>
          <Text style={styles.txtLocal}>Reservaciones</Text>
          <Text style={styles.txtDireccion2}>+593 942 814 723</Text>
        </View>
        <View style={styles.verMapa}>
          <TouchableOpacity style={styles.btnVer}>
            <Feather name="phone" size={26} color={Violeta} />
            <Text style={styles.txtBoton}>Llamar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Linea />
      <View style={styles.masDirecciones} >
        <TouchableOpacity style={styles.divDirecciones} onPress={ ()=> Linking.openURL(`mailto:servicio@chillis.com.ec`) }
      title="servicio@chillis.com.ec">
          <Text style={styles.txtLocal}>Email</Text>
          <Text style={styles.txtDireccion2}>servicio@chillis.com.ec</Text>
        </TouchableOpacity>
        <View style={styles.verMapa}></View>
      </View>
    </View>
  );

  const initialLayout = { width: Dimensions.get("window").width };

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "first", title: "Cupones" },
    { key: "second", title: "Locales" },
    { key: "tird", title: "Contacto" },
  ]);

  const renderScene = SceneMap({
    first: Cupones,
    second: Locales,
    tird: Contacto,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Violeta }}
      style={{
        backgroundColor: "#fff",
        borderStyle: "solid",
        borderColor: "gray",
      }}
      labelStyle={{ color: Violeta, textTransform: "capitalize" }}
    />
  );
  return (
    <Fragment>
      <ScrollView style={{ backgroundColor: "#fff" }}>
        <HomeHeader />
        <ReturnScreen Categoria="Empresa" ScreenRetorno="Home" />
        <View style={styles.divEmpresaInfo}>
          <View style={styles.divFoto}>
            <Image source={require("../img/empresas/hotel.png")} />
          </View>
          <View style={styles.divInfo}>
            <Text style={styles.nombreEmpresa}>Chilli's Ecuador</Text>
            <Text style={styles.Direccion}>Dirección</Text>
            <Text style={styles.txtDireccion}>
              Avenida Santa Clara 734, Huechuraba, Guayaquil
            </Text>
          </View>
        </View>
        <View style={styles.divInformacionGeneral}>
          <TabView
            renderTabBar={renderTabBar}
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
          />
        </View>
      </ScrollView>
    </Fragment>
  );
};
const Violeta = "#773DBD";
const blueDark = "#3D1C65";
const styles = StyleSheet.create({
  divEmpresaInfo: {
    flexDirection: "row",
    margin: "2%",
    display: "flex",
  },
  divFoto: {
    flex: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  divInfo: {
    flex: 4,
    justifyContent: "center",
  },
  nombreEmpresa: {
    color: "#3D1C65",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: "2%",
  },
  Direccion: {
    color: "gray",
  },
  txtDireccion: {
    color: "gray",
  },
  divInformacionGeneral: {
    flex: 1,
  },
  cupones: {
    margin: "4%",
  },
  txtCupones: {
    color: "#000",
    fontWeight: "bold",
  },
  divMap: {
    width: "100%",
    height: "70%",
  },
  masDirecciones: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "9%",
    paddingLeft: "4%",
  },
  divDirecciones: {
    flex: 4,
  },
  txtLocal: {
    fontSize: 20,
    color: blueDark,
    fontWeight: "bold",
    marginBottom: "3%",
  },
  verMapa: {
    flex: 2,
    alignItems: "center",
  },
  txtDireccion2: {
    color: "gray",
  },
  btnVer: {
    alignItems: "center",
  },
  txtBoton: {
    color: Violeta,
    fontWeight: "bold",
  },
  line: {
    width: "90%",
    height: 2,
    backgroundColor: "gray",
    marginTop: "6%",
    marginHorizontal: "5%",
  },
});

export default Empresa;
