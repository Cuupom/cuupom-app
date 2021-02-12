import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const MenuCategorias = ({
  Foto,
  Opcion1,
  Opcion2,
  Opcion3,
  Opcion4,
  CuponesDisponibles,
}) => {
  return (
    <View style={styles.divMenu}>
      <Image source={{ uri: Foto }} style={styles.imgMenu} />
      <View style={styles.numCupones}>
        <Text style={styles.txtCupones}>{CuponesDisponibles} CUPONES</Text>
      </View>
      <View style={styles.divOpciones}>
        <View style={styles.menuOpciones}>
          {Opcion1 ? (
            <TouchableOpacity style={styles.btnOpcion}>
              <Text style={styles.txtOpciones}>{Opcion1}</Text>
            </TouchableOpacity>
          ) : null}
          {Opcion2 ? (
            <TouchableOpacity style={styles.btnOpcion}>
              <Text style={styles.txtOpciones}>{Opcion2}</Text>
            </TouchableOpacity>
          ) : null}
          {Opcion3 ? (
            <TouchableOpacity style={styles.btnOpcion}>
              <Text style={styles.txtOpciones}>{Opcion3}</Text>
            </TouchableOpacity>
          ) : null}
          {Opcion4 ? (
            <TouchableOpacity style={styles.btnOpcion}>
              <Text style={styles.txtOpciones}>{Opcion4}</Text>
            </TouchableOpacity>
          ) : null}
        </View>
      </View>
    </View>
  );
};

export default MenuCategorias;
const greenLight = "#09BFCB";
const styles = StyleSheet.create({
  divMenu: {
    width: "100%",
    backgroundColor: "black",
  },
  imgMenu: {
    width: "100%",
    height: 190,
    opacity: 0.5,
  },
  numCupones: {
    position: "absolute",
    width: "100%",
    height: "70%",
    alignItems: "center",
    justifyContent: "center",
  },
  txtCupones: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 23,
    borderRadius: 4,
  },
  divOpciones: {
    width: "100%",
    height: "90%",
    position: "absolute",
    justifyContent: "flex-end",
    alignItems: 'center'
  },
  menuOpciones: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  btnOpcion: {
    margin: "1%",
    backgroundColor: greenLight,
    borderRadius: 20,
    alignItems: "center",
    padding: 8,
  },
  txtOpciones: {
    color: "#000",
  },
});
