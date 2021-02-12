import React,{ useContext, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { AuthContext } from "../Navigation/AuthProvider";


export const ContenidoWelcome = ({ navigation }) => {
  // const { user } = useContext(AuthContext)
  // useEffect(() => {
  //   (user == null) ? null : navigation.navigate('Home')
  //  }, [user])
  const btnSlider = (
    <View
      style={{
        backgroundColor: "#09BFCB",
        width: 8,
        height: 8,
        borderRadius: 4,
        margin: 4,
      }}
    />
  );

  function GoHome() {
    //const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.btnExplorar}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        <Text style={styles.txtExplorar}>Empezar a explorar</Text>
      </TouchableOpacity>
    );
  }

  function GoRegister() {
    //const navigation = useNavigation();
    return (
      <TouchableOpacity
        style={styles.btnRegistrarse}
        onPress={() => {
          navigation.navigate("Registrarse");
        }}
      >
        <Text style={styles.txtRegistrarse}>Registrarse ahora</Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Image
        source={require("../img/Vector.png")}
        style={{ position: "absolute", width: "100%" }}
      />
      <ScrollView>
        <View style={styles.contentSwipper}>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            loop={true}
            autoplay={true}
            activeDot={btnSlider}
            paginationStyle={{ left: -250 }}
          >
            <View testID="Elemento-1">
              <View style={styles.SwiperElement}>
                <Image source={require("../img/welcome-1.png")} />
              </View>

              <View style={styles.textSwipper}>
                <Text style={styles.titulo}>Compra en un solo lugar</Text>
                <Text style={styles.descripcion}>
                  En Cuupom puedes encontrar grandes descuentos de diferentes
                  marcas
                </Text>
              </View>
            </View>

            <View testID="Elemento-2" style={{ overflow: "hidden" }}>
              {/*        <Image
                  source={require("../img/Vector.png")}
                  style={{
                    position: "absolute",
                    width: "100%",
                    marginLeft: -130,
                  }}
                /> */}
              <View style={styles.SwiperElement}>
                <Image source={require("../img/welcome-2.png")} />
              </View>

              <View style={styles.textSwipper}>
                <Text style={styles.titulo}>
                  Contamos con varias categorías
                </Text>
                <Text style={styles.descripcion}>
                  En Cuupom puedes encontrar grandes descuentos de diferentes
                  marcas
                </Text>
              </View>
            </View>

            <View testID="Elemento-3" style={{ overflow: "hidden" }}>
              {/*        <Image
                  source={require("../img/Vector.png")}
                  style={{
                    position: "absolute",
                    width: "100%",
                    marginLeft: -130,
                  }}
                /> */}
              <View style={styles.SwiperElement}>
                <Image source={require("../img/welcome-3.png")} />
              </View>

              <View style={styles.textSwipper}>
                <Text style={styles.titulo}>Descuentos increíbles para ti</Text>
                <Text style={styles.descripcion}>
                  En Cuupom puedes encontrar grandes descuentos de diferentes
                  marcas
                </Text>
              </View>
            </View>
          </Swiper>
        </View>

        <View style={styles.opciones}>
          <GoHome />
          <GoRegister />
        </View>
      </ScrollView>
    </View>
  );
};
const Violeta = "#773DBD";
const darkVioleta = "#3E1D67";

const styles = StyleSheet.create({
  container: {
    backgroundColor: Violeta,
    width: "100%",
    height: "100%",
  },
  vector: {
    width: "100%",
    height: "55%",
    position: "relative",
  },
  contentSwipper: {
    flex: 1,
    height: "45%",
    alignItems: "center",
  },
  wrapper: {
    height: 672,
    alignItems: "flex-start",
  },
  SwiperElement: {
    alignItems: "center",
    paddingHorizontal: "10%",
    marginTop: "22%",
  },
  textSwipper: {
    alignItems: "flex-start",
    marginHorizontal: "12%",
  },
  titulo: {
    color: "#fff",
    fontSize: 30,
    marginTop: 6,
  },
  descripcion: {
    marginVertical: "4%",
    color: "#fff",
    fontSize: 15,
  },
  opciones: {
    flex: 2,
    alignItems: "center",
  },
  btnExplorar: {
    backgroundColor: darkVioleta,
    width: "95%",
    margin: "3%",
    padding: "4%",
    alignItems: "center",
    borderRadius: 6,
  },
  txtExplorar: {
    color: "#fff",
    fontWeight: "700",
  },
  btnRegistrarse: {
    width: "95%",
    margin: "3%",
    padding: "3%",
    alignItems: "center",
    borderRadius: 6,
  },
  txtRegistrarse: {
    color: "#fff",
    fontWeight: "700",
  },
});
