import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { Feather } from "@expo/vector-icons";
import DropDownPicker from "react-native-dropdown-picker";
import HeaderApp from "../Components/HeaderApp";
import CardRecomendados from "../Components/CardRecomendados";

export const btnSlider = (
  <View
    style={{
      backgroundColor: "#773DBD",
      width: 8,
      height: 8,
      borderRadius: 4,
      marginLeft: 3,
      marginRight: 3,
      marginTop: 3,
      marginBottom: 3,
    }}
  />
);

export const DetalleProducto = ({ route, navigation }) => {
  const {
    nombre,
    precio,
    cupones,
    cashback,
    empresa,
    expira,
    categoria,
    foto,
  } = route.params;
  const [state, setState] = useState({
    country: "op",
  });

  return (
    <View style={{ height: "100%", width: "100%", backgroundColor: "#fff" }}>
      <View style={{ height: "85%", width: "100%", backgroundColor: "#fff" }}>
        <StatusBar style="light" />

        <HeaderApp Screen="Home" />

        <ScrollView>
          <View>
            <Swiper
              style={styles.wrapper}
              showsButtons={false}
              loop={true}
              autoplay={true}
              autoplayTimeout={5}
              activeDot={btnSlider}
            >
              <View testID="Hello">
                <Image source={{ uri: foto }} style={styles.sliderImg} />
              </View>
              <View testID="Beautiful">
                <Image source={{ uri: foto }} style={styles.sliderImg} />
              </View>
              <View testID="Simple">
                <Image source={{ uri: foto }} style={styles.sliderImg} />
              </View>
            </Swiper>
          </View>

          <View style={styles.contentProd}>
            <View style={styles.tagProd}>
              <Text style={styles.tag}>{categoria}</Text>
            </View>
            <View style={styles.infoProd}>
              <Text style={styles.txtInfo}> Cashback {cashback}</Text>
            </View>
          </View>
          <View style={styles.divTitulo}>
            <Text style={styles.Titulo}>{nombre}</Text>
          </View>

          <View style={styles.divEmpresa}>
            <View style={styles.divFoto}>
              <Image
                source={require("../img/galapagos.jpg")}
                style={styles.fotoEmpresa}
              />
            </View>
            <View style={styles.divDatos}>
              <Text style={styles.txtEmpresa}>{empresa}</Text>
              <Text style={styles.txtCupones}>
                {cupones} Cupones disponibles
              </Text>
            </View>
          </View>

          <View style={{ margin: "2%", overflow: "visible" }}>
            <DropDownPicker
              items={[
                {
                  label: "Seleccionar Opciones",
                  value: "op",
                  icon: () => <Feather name="list" size={24} color={Violeta} />,
                },
                {
                  label: "2 Personas",
                  value: "2",
                  icon: () => <Feather name="user" size={24} color={Violeta} />,
                },
                {
                  label: "3 Personas",
                  value: "3",
                  icon: () => <Feather name="user" size={24} color={Violeta} />,
                },
              ]}
              defaultValue={state.country}
              containerStyle={{ height: 40 }}
              style={styles.Lista}
              itemStyle={{
                justifyContent: "flex-start",
              }}
              dropDownStyle={{ backgroundColor: "#fafafa" }}
              onChangeItem={(item) =>
                setState({
                  country: item.value,
                })
              }
              arrowColor={blueDark}
              arrowSize={18}
              selectedLabelStyle={{
                color: blueDark,
                fontWeight: "bold",
              }}
            />
          </View>
          <View style={styles.divResumen}>
            <View style={styles.divTxtResumen}>
              <Text style={styles.txtResumen}>resumen</Text>
            </View>
            <View style={styles.divLine}>
              <View style={styles.lineResumen}></View>
            </View>
          </View>

          <View style={styles.divTexto}>
            <Text style={styles.parrafo}>
              ¡Todo el año en el nordeste brasileño!
            </Text>

            <Text style={styles.parrafo}>
              Natal, llamada “Cidade do Sol”, es uno de los lugares de Brasil
              con más días soleados a lo largo del año, con unas temperaturas
              cálidas en cualquier estación, playas agradables de agua caliente,
              rica gastronomía y diversas opciones para turistas y aventureros.
            </Text>

            <Text style={styles.parrafo}>
              Las principales atracciones son sus playas, las cuales se
              encuentran rodeadas por enormes dunas, los paseos en buggy y la
              vida nocturna.
            </Text>
          </View>

          <View style={styles.divResumen}>
            <View style={styles.divTxtCondicion}>
              <Text style={styles.txtResumen}>condiciones</Text>
            </View>
            <View style={styles.divLineCondicion}>
              <View style={styles.lineResumen}></View>
            </View>
          </View>

          <View style={styles.divResumen}>
            <View style={styles.divTxtNotas}>
              <Text style={styles.txtResumen}>notas importante</Text>
            </View>
            <View style={styles.divLineNota}>
              <View style={styles.lineResumen}></View>
            </View>
          </View>

          <View style={styles.divExpira}>
            <Text style={styles.fechaExpira}> {expira} </Text>
          </View>

          <View style={styles.logo_u}>
            <Image source={require("../img/logo-u.png")} style={styles.img_u} />
          </View>

          <View style={styles.destacado}>
            <Text style={styles.txtDestacado}>TE PUEDE INTERESAR</Text>
          </View>

          <View>
            <ScrollView
              horizontal="true"
              contentContainerStyle={{ minHeight: "100%" }}
            >
              <View style={styles.containerCard}>
                <CardRecomendados />
                <CardRecomendados />
                <CardRecomendados />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      </View>

      <View style={styles.footer}>
        <View style={styles.divFooter}>
          <View style={styles.containerPrecio}>
            <Text style={styles.prodPrecio}>{precio}</Text>
            <Text style={styles.prodCupones}>Quedan {cupones} cupones</Text>
          </View>
          <View style={styles.divComprar}>
            <TouchableOpacity
              style={styles.btnComprar}
              onPress={() => alert("Comprando....")}
            >
              <Text style={styles.txtBoton}>Comprar ahora</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const Violeta = "#773DBD";
const blueDark = "#3D1C65";
const styles = StyleSheet.create({
  sliderImg: {
    width: "100%",
    height: "92%",
  },
  wrapper: {
    height: 280,
  },
  contentProd: {
    marginTop: -20,
    flexDirection: "row",
  },
  tagProd: {
    width: "80%",
    backgroundColor: blueDark,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    width: 105,
    height: 22,
    margin: "2%",
  },
  tag: {
    color: "#fff",
  },
  infoProd: {
    alignItems: "flex-start",
    justifyContent: "center",
    margin: "2%",
  },
  txtInfo: {
    color: Violeta,
    fontWeight: "bold",
  },
  divTitulo: {
    margin: "2%",
  },
  Titulo: {
    color: blueDark,
    fontSize: 20,
    fontWeight: "bold",
  },
  divEmpresa: {
    margin: "2%",
    flexDirection: "row",
  },
  divFoto: {
    flex: 1,
    height: 60,
  },
  divDatos: {
    flex: 5,
    paddingLeft: "4%",
    justifyContent: "center",
  },
  fotoEmpresa: {
    width: "100%",
    height: "100%",
    borderRadius: 100,
  },
  txtEmpresa: {
    color: blueDark,
    fontSize: 18,
    fontWeight: "bold",
  },
  txtCupones: {
    color: "#000",
    fontWeight: "bold",
  },
  Lista: {
    backgroundColor: "#fff",
    padding: "4%",
  },
  divResumen: {
    flexDirection: "row",
    margin: "2%",
    width: "90%",
  },
  divTxtResumen: {
    width: "25%",
    marginRight: "3%",
  },
  txtResumen: {
    color: blueDark,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  divLine: {
    width: "75%",
    justifyContent: "center",
  },
  lineResumen: {
    width: "100%",
    height: 2,
    backgroundColor: "#E0E0E0",
  },
  divTxtCondicion: {
    width: "30%",
    marginRight: "3%",
  },
  divLineCondicion: {
    width: "70%",
    justifyContent: "center",
  },
  divTxtNotas: {
    width: "45%",
    marginRight: "3%",
  },
  divLineNota: {
    width: "55%",
    justifyContent: "center",
  },
  divTexto: {
    margin: "3%",
  },
  parrafo: {
    fontSize: 16,
    color: "black",
    textAlign: "left",
    marginVertical: "3%",
  },
  divExpira: {
    margin: "2%",
  },
  fechaExpira: {
    color: "black",
  },
  logo_u: {
    width: "100%",

    alignItems: "center",
    padding: "10%",
  },
  destacado: {
    marginHorizontal: "3%",
  },
  txtDestacado: {
    color: blueDark,
    fontWeight: "bold",
    fontSize: 15,
  },
  containerCard: {
    flexDirection: "row",
    margin: "1%",
    width: Dimensions.get("screen").width,
  },
  card: {
    alignItems: "center",
    margin: "4%",
    width: 200,
  },
  divImg: {
    width: 200,
    height: 150,
  },
  cardImg: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
  },
  divCard: {
    margin: "2%",
  },
  divTagPrecio: {
    width: "100%",
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    paddingVertical: "3%",
  },
  divCategoria: {
    flex: 4,
  },
  divPrecio: {
    flex: 2,
    alignItems: "flex-end",
  },
  categoria: {
    backgroundColor: blueDark,
    width: "60%",
    borderRadius: 5,
    paddingVertical: "2%",
    paddingLeft: "6%",
  },
  txtCategoria: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 12,
  },
  precio: {
    color: Violeta,
    fontWeight: "bold",
    fontSize: 18,
  },
  divTituloProducto: {
    marginVertical: "1%",
  },
  tituloProd: {
    color: blueDark,
    fontWeight: "bold",
  },
  diValores: {
    marginVertical: "3%",
  },
  txtCashback: {
    color: "#000",
  },
  txtPrecio: {
    color: "gray",
    textDecorationLine: "line-through",
    marginVertical: "1%",
  },
  txtAviso: {
    color: "#09BFCB",
  },
  footer: {
    height: "15%",
    width: "100%",
    borderTopWidth: 2,
    borderTopColor: "#fff",
    elevation: 7,
  },
  divFooter: {
    height: "90%",
    marginTop: "4%",
    flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    paddingBottom: "5%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -7,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
  },
  containerPrecio: {
    flex: 3,
    margin: "4%",
    //#FB7500
  },
  prodPrecio: {
    color: Violeta,
    fontSize: 26,
    fontWeight: "bold",
  },
  prodCupones: {
    color: "#FB7500",
  },
  divComprar: {
    flex: 3,
    margin: "4%",
  },
  btnComprar: {
    backgroundColor: blueDark,
    borderRadius: 8,
    padding: "8%",
    alignItems: "center",
  },
  txtBoton: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
  },
});
