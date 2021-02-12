import React, { useContext, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import HomeHeader from "../Components/HomeHeader";
import { logout } from "../Navigation/Auth";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../Navigation/AuthProvider";

export const Usuario = ({ navigation }) => {
  const { user } = useContext(AuthContext);

  if (user == null) {
    return (
      <View>
        <HomeHeader />
        <View>
          <Image
            source={require("../img/logo.jpg")}
            style={{ width: 50, height: 50 }}
          />
          <Text> Bienvenido: Usuario</Text>
          <TouchableOpacity
            style={styles.btnGoogle}
            onPress={() => navigation.navigate("Registrarse")}
          >
            <AntDesign
              name="addusergroup"
              size={22}
              color="white"
              style={{ marginHorizontal: "4%" }}
            />
            <Text style={styles.txtBoton}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <HomeHeader />
        <View>
          <Image
            source={{ uri: user.photoURL }}
            style={{ width: 50, height: 50 }}
          />
          <Text> Bienvenido: {user.displayName} </Text>
          <Text> Bienvenido: {user.email} </Text>
          <TouchableOpacity style={styles.btnGoogle} onPress={() => logout()}>
            <AntDesign
              name="logout"
              size={22}
              color="white"
              style={{ marginHorizontal: "4%" }}
            />
            <Text style={styles.txtBoton}>Cerrar Sesión</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  btnGoogle: {
    backgroundColor: "#dd4b39",
    width: "90%",
    margin: "2%",
    padding: "4%",
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
  },
  txtBoton: {
    color: "#fff",
    fontWeight: "700",
    fontSize: 16,
  },
});
