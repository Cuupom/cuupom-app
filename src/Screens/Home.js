import React, { useEffect, useContext, Fragment } from "react";
import { Text, View, StyleSheet, Image, BackHandler, Alert } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import Swiper from "react-native-swiper";
import { btnSlider } from "./DetalleProducto";
import HomeHeader from "../Components/HomeHeader";
import UneteAhora from "../Components/UneteAhora";
import { AuthContext } from "../Navigation/AuthProvider";

const Home = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  return (
    <Fragment>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={{ backgroundColor: "#fff" }}
      >
        <StatusBar style="light" />

        <HomeHeader />

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
              <Image
                source={require("../img/Cuupom.png")}
                style={styles.sliderImg}
              />
            </View>
            <View testID="Beautiful">
              <Image
                source={require("../img/Cuupom2.png")}
                style={styles.sliderImg}
              />
            </View>
            <View testID="Simple">
              <Image
                source={require("../img/Cuupom.png")}
                style={styles.sliderImg}
              />
            </View>
          </Swiper>
        </View>

        <View style={styles.destacado}>
          <Text style={styles.txtDestacado}>CATEGORÍAS</Text>
        </View>

        <View>
          <Image source={require("../img/U.png")} style={styles.imgU} />
          <Swiper
            style={styles.categoriasDiv}
            showsButtons={false}
            showsPagination={false}
          >
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
            </View>

            <View style={styles.divCategorias}>
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
                <Text style={styles.txtCategoria}>Viajes </Text>
                <Text style={styles.txtCupones}> 6 Cupones</Text>
              </TouchableOpacity>
            </View>
          </Swiper>
        </View>

        <View style={styles.destacado}>
          <Text style={styles.txtDestacado}>CUPONES DESTACADOS</Text>
        </View>

        <View style={styles.productos}>
          <View style={styles.divProducto}>
            <View style={styles.limiteOferta}>
              <View style={styles.timeOferta}>
                <Text style={styles.txtOferta}>Expira en</Text>
              </View>
              <View style={styles.divTiempoOferta}>
                <View style={styles.tiempoOferta}>
                  <Text style={styles.tiempo}>13</Text>
                  <Text style={styles.time}>hor.</Text>
                </View>
                <View style={styles.tiempoOferta}>
                  <Text style={styles.tiempo}>25</Text>
                  <Text style={styles.time}>min.</Text>
                </View>
                <View style={styles.tiempoOferta}>
                  <Text style={styles.tiempo}>16</Text>
                  <Text style={styles.time}>seg.</Text>
                </View>
              </View>
              <View style={styles.timeOferta}>
                <Text style={styles.txtOferta}>compra ahora</Text>
              </View>
            </View>
            <View style={styles.cardProduct}>
              <View style={styles.cardImg}>
                <Image
                  source={require("../img/alitas_bbq.jpg")}
                  style={styles.imgProducto}
                />
              </View>

              <View style={styles.detallesCard}>
                <Image source={require("../img/C.png")} style={styles.imgC} />
                <View style={styles.detallesDiv}>
                  <View style={styles.Valores}>
                    <View style={styles.divTag}>
                      <Text style={styles.tag}>Restaurantes</Text>
                    </View>

                    <Text style={styles.price}>$14.99</Text>
                  </View>
                  <Text style={styles.descripcion}>
                    15 Alitas, con los sabores que desees escoger, incluye Salsa
                    Blue...
                  </Text>
                  <Text style={styles.cashback}>Cashback: 8%</Text>
                  <Text style={styles.priceReal}>$17.99</Text>
                  <Text style={styles.restante}>Quedan 8 cupones</Text>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cardProducto}>
            <View style={styles.cardImg}>
              <Image
                source={require("../img/dedos_bbq.jpg")}
                style={styles.imgProducto}
              />
            </View>
            <View style={styles.detallesCard}>
              <Image source={require("../img/C.png")} style={styles.imgC} />
              <View style={styles.detallesDiv}>
                <View style={styles.Valores}>
                  <View style={styles.divTag}>
                    <Text style={styles.tag}>Restaurantes</Text>
                  </View>

                  <Text style={styles.price}>$4.99</Text>
                </View>
                <Text style={styles.descripcion}>
                  1 deditos de Queso Mozzarella apanizados, incluye salsa de
                  queso...
                </Text>
                <Text style={styles.cashback}>Cashback: 3%</Text>
                <Text style={styles.priceReal}>$6.99</Text>
                <Text style={styles.restanteBlue}>Aprovecha hoy!</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardProducto}>
            <View style={styles.cardImg}>
              <Image
                source={require("../img/helado.jpg")}
                style={styles.imgProducto}
              />
            </View>
            <View style={styles.detallesCard}>
              <Image source={require("../img/C.png")} style={styles.imgC} />
              <View style={styles.detallesDiv}>
                <View style={styles.Valores}>
                  <View style={styles.divTag2}>
                    <Text style={styles.tag}>Supermercados</Text>
                  </View>

                  <Text style={styles.price}>$2.99</Text>
                </View>
                <Text style={styles.descripcion}>
                  Helado pinguino en tarro de diferentes sabores: fresa,
                  chocolate...
                </Text>
                <Text style={styles.cashback}>Cashback: 4%</Text>
                <Text style={styles.priceReal}>$4.99</Text>
                <Text style={styles.restante}>Quedan 5 cupones</Text>
              </View>
            </View>
          </View>

          <View style={styles.cardProducto}>
            <View style={styles.cardImg}>
              <Image
                source={require("../img/doble_extra_queso.png")}
                style={styles.imgProducto}
              />
            </View>
            <View style={styles.detallesCard}>
              <Image source={require("../img/C.png")} style={styles.imgC} />

              <View style={styles.detallesDiv}>
                <View style={styles.Valores}>
                  <View style={styles.divTag}>
                    <Text style={styles.tag}>Restaurantes</Text>
                  </View>

                  <Text style={styles.price}>$8.99</Text>
                </View>
                <Text style={styles.descripcion}>
                  Dos carnes, mostaza, salsa de tomate y delicioso queso,
                  incluye papas...
                </Text>
                <Text style={styles.cashback}>Cashback: 4%</Text>
                <Text style={styles.priceReal}>$10.99</Text>
                <Text style={styles.restante}>Quedan 5 cupones</Text>
              </View>
            </View>
          </View>
        </View>

        {user == null ? <UneteAhora /> : null}

        <View style={styles.destacado}>
          <Text style={styles.txtDestacado}>ÚLTIMOS CUPONES</Text>
        </View>

        <View style={styles.containerProd}>
          <TouchableOpacity
            style={styles.cardDestacados}
            onPress={() => {
              navigation.navigate("DetalleProducto", {
                nombre:
                  "Tour por la selva: Atrévete a desafiar los caminos de barro en medio de la selva",
                precio: "$65",
                foto:
                  "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/6f/4e/f9.jpg",
                cashback: "9%",
                empresa: "Viator",
                cupones: "6",
                expira: "EXP: 20 Febrero 2021",
                categoria: "Viajes",
              });
            }}
          >
            <View style={styles.divImgProd}>
              <Image
                source={require("../img/viator1.jpg")}
                style={styles.imgProd}
              />
            </View>
            <View style={styles.divContenido}>
              <View style={styles.contentProd}>
                <View style={styles.tagProd}>
                  <Text style={styles.tag}>Viajes</Text>
                </View>
                <View style={styles.infoProd}>
                  <Text style={styles.txtInfo}>Aprovecha hoy!</Text>
                </View>
                <View style={styles.precioProd}>
                  <Text style={styles.precio}>$65</Text>
                </View>
              </View>
              <Text style={styles.descripcionProd}>
                Atrévete a desafiar los caminos de barro en medio de la selva...
              </Text>
              <View style={styles.valoresProd}>
                <View>
                  <Text style={styles.expiraProd}>EXP: 15 marzo 2021</Text>
                </View>
                <View>
                  <Text style={styles.cashbackProd}>Cashback: 9%</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.cardDestacados}>
            <View style={styles.divImgProd}>
              <Image
                source={require("../img/galapagos.jpg")}
                style={styles.imgProd}
              />
            </View>
            <View style={styles.divContenido}>
              <View style={styles.contentProd}>
                <View style={styles.tagProd}>
                  <Text style={styles.tag}>Viajes</Text>
                </View>
                <View style={styles.infoProd}>
                  <Text style={styles.txtInfo}>Aprovecha hoy!</Text>
                </View>
                <View style={styles.precioProd}>
                  <Text style={styles.precio}>$65</Text>
                </View>
              </View>
              <Text style={styles.descripcionProd}>
                Atrévete a desafiar los caminos de barro en medio de la selva...
              </Text>
              <View style={styles.valoresProd}>
                <View>
                  <Text style={styles.expiraProd}>EXP: 15 marzo 2021</Text>
                </View>
                <View>
                  <Text style={styles.cashbackProd}>Cashback: 9%</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.destacado}>
          <Text style={styles.txtDestacado}>EMPRESAS DESTACADAS</Text>
        </View>
        <View style={styles.historias}>
          <Swiper
            style={styles.storiesDiv}
            showsButtons={false}
            showsPagination={false}
          >
            <View style={styles.contentStories}>
              <View style={styles.cuponesDestacados}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Empresa")}
                >
                  <Image source={require("../img/empresas/artefacta.png")} />
                </TouchableOpacity>
              </View>

              <View style={styles.cuponesDestacados}>
                <TouchableOpacity>
                  <Image source={require("../img/empresas/hotel.png")} />
                </TouchableOpacity>
              </View>

              <View style={styles.cuponesDestacados}>
                <TouchableOpacity>
                  <Image source={require("../img/empresas/artefacta.png")} />
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.contentStories}>
              <View style={styles.cuponesDestacados}>
                <TouchableOpacity>
                  <Image source={require("../img/empresas/hotel.png")} />
                </TouchableOpacity>
              </View>

              <View style={styles.cuponesDestacados}>
                <TouchableOpacity>
                  <Image source={require("../img/empresas/artefacta.png")} />
                </TouchableOpacity>
              </View>

              <View style={styles.cuponesDestacados}>
                <TouchableOpacity>
                  <Image source={require("../img/empresas/hotel.png")} />
                </TouchableOpacity>
              </View>
            </View>
          </Swiper>
        </View>
      </ScrollView>
    </Fragment>
  );
};

const Violeta = "#773DBD";
const blueDark = "#3D1C65";
const greenAqua = "#09BFCB";
const crema = "#FFFAEA";
const orange = "#FB7500";
const turquesa = "#09BFCB";

export const styles = StyleSheet.create({
  sliderImg: {
    width: "100%",
  },
  wrapper: {
    height: 300,
  },
  storiesDiv: {
    height: 130,
  },
  contentStories: {
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
  destacado: {
    marginHorizontal: "6%",
  },
  txtDestacado: {
    color: blueDark,
    fontWeight: "bold",
    fontSize: 16,
  },
  historias: {
    flexDirection: "row",
    marginBottom: "3%",
  },
  cuponesDestacados: {
    backgroundColor: blueDark,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: "3%",
    borderRadius: 100,
    padding: "1%",
  },
  txtHistoria: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  categoriasDiv: {
    height: 190,
    padding: "1%",
    marginBottom: "10%",
  },
  imgU: {
    position: "absolute",
    marginTop: "-10%",
  },
  divCategorias: {
    flexDirection: "row",
    justifyContent: "center",
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
    width: 112,
    height: 110,
    justifyContent: "center",
    alignItems: "center",
  },
  imgCategoria: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
  },
  txtCategoria: {
    width: "90%",
    fontSize: 10,
    color: blueDark,
    marginTop: "5%",
    margin: "1%",
    fontWeight: "bold",
    textTransform: "uppercase",
    textAlign: "left",
  },
  txtCupones: {
    width: "90%",
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
  },
  divProducto: {
    width: "95%",
    margin: "2%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  limiteOferta: {
    backgroundColor: "#F9C40A",
    height: 80,
    borderRadius: 8,
    marginHorizontal: "2%",
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  timeOferta: {
    flexDirection: "row",
    alignItems: "center",
    padding: "4%",
  },
  txtOferta: {
    textTransform: "uppercase",
    color: blueDark,
    fontWeight: "bold",
    fontSize: 14,
  },
  divTiempoOferta: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tiempoOferta: {
    backgroundColor: blueDark,
    margin: "1%",
    width: 40,
    alignItems: "center",
    borderRadius: 4,
    padding: "3%",
    paddingTop: 8,
  },
  tiempo: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
  time: {
    color: "#B596DB",
  },
  cardProduct: {
    width: "95%",
    paddingHorizontal: "2%",
    paddingVertical: "2%",
    marginHorizontal: "2%",
    display: "flex",
    flexDirection: "row",
  },
  cardProducto: {
    width: "95%",
    paddingHorizontal: "2%",
    //paddingVertical: "2%",
    marginHorizontal: "2%",
    display: "flex",
    flexDirection: "row",
    margin: "2%",
    borderRadius: 8,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardProducto2: {
    width: "100%",
    padding: "2%",
    display: "flex",
    flexDirection: "row",
    backgroundColor: crema,
  },
  cardImg: {
    flex: 2,
    width: "100%",
    justifyContent: "center",
    borderRadius: 10,
    marginVertical: "3%",
  },
  imgProducto: {
    width: "100%",
    height: 165,
    borderRadius: 6,
    //resizeMode: "contain",
  },
  detallesCard: {
    overflow: "hidden",
    flex: 3,
  },
  detallesDiv: {
    marginVertical: "4%",
    paddingHorizontal: "4%",
  },
  imgC: {
    position: "absolute",
    height: "100%",
    width: "100%",
    marginLeft: "10%",
  },
  Valores: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: "3%",
    alignItems: "baseline",
  },
  divTag: {
    backgroundColor: orange,
    borderRadius: 6,
    paddingVertical: "2%",
    paddingHorizontal: "6%",
    justifyContent: "center",
  },
  divTag2: {
    backgroundColor: blueDark,
    borderRadius: 6,
    paddingVertical: "2%",
    paddingHorizontal: "6%",
    justifyContent: "center",
  },
  tag: {
    color: "#fff",
    fontSize: 13,
  },
  price: {
    color: Violeta,
    fontSize: 20,
    fontWeight: "bold",
    // marginTop: 3,
  },
  priceReal: {
    textDecorationLine: "line-through",
    color: "gray",
    fontWeight: "700",
    marginVertical: "1%",
    fontSize: 15,
  },
  descripcion: {
    fontSize: 15,
    fontWeight: "600",
    marginBottom: "4%",
    color: blueDark,
  },
  cashback: {
    color: "black",
  },
  restante: {
    color: orange,
    fontWeight: "600",
  },
  restanteBlue: {
    color: greenAqua,
    fontWeight: "600",
  },
  btnComprar: {
    backgroundColor: Violeta,
    width: "38%",
    padding: "3%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: "62%",
    marginVertical: "1%",
    borderRadius: 5,
  },
  txtBoton: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },

  containerProd: {
    marginVertical: "3%",
  },
  cardDestacados: {
    width: "100%",
    marginVertical: "3%",
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  divImgProd: {
    width: "100%",
    alignItems: "center",
    flex: 1,
  },
  imgProd: {
    width: "100%",
    height: 270,
    // resizeMode: "contain",
    margin: 0,
    padding: 0,
  },
  btnComprar2: {
    backgroundColor: blueDark,
    width: "40%",
    padding: "2%",
    marginTop: "-9%",
    marginLeft: "75%",
    borderRadius: 5,
  },
  divContenido: {
    flex: 2,
    flexDirection: "column",
    paddingHorizontal: "2%",
    alignContent: "space-between",
    width: "100%",
    paddingBottom: "4%",
  },
  contentProd: {
    flexDirection: "row",
  },
  valoresProd: {
    justifyContent: "space-between",
    flexDirection: "row",
    margin: "2%",
    marginTop: "3%",
  },
  descripcionProd: {
    flex: 2,
    fontSize: 14,
    margin: "2%",
    marginVertical: 0,
    fontWeight: "bold",
    color: blueDark,
  },
  expiraProd: {
    flex: 1,
    fontSize: 12,
    color: "black",
  },
  tagProd: {
    flex: 1,
    backgroundColor: blueDark,
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    margin: "2%",
    width: 24,
    height: 22,
  },
  infoProd: {
    flex: 3,
    alignItems: "flex-start",
    margin: "2%",
  },
  txtInfo: {
    color: turquesa,
    fontWeight: "bold",
  },
  precioProd: {
    flex: 1,
    margin: "1%",
    //alignItems: "flex-start",
  },
  precio: {
    fontSize: 24,
    fontWeight: "bold",
    color: Violeta,
  },
  precioRealProd: {
    flex: 2,
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 6,
    textDecorationLine: "line-through",
    marginTop: -4,
  },
  cashbackProd: {
    flex: 1,
    fontSize: 12,
    color: "black",
    alignItems: "flex-end",
  },
});
export default Home;
