import React, { Component } from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const HeaderApp = ({ Screen }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.menu}>
      <View style={styles.imgHeader}>
        <Image source={require("../img/U-d.png")} style={styles.imgHeader} />
      </View>

      <View style={styles.nav}>
        <TouchableOpacity
          style={styles.backIcon}
          onPress={() => navigation.navigate(Screen)}
        >
          <Feather name="arrow-left" size={28} color="#fff" />
        </TouchableOpacity>
        <View style={styles.logo}>
          <Image source={require("../img/logo.png")} style={styles.logoMenu} />
        </View>
        <TouchableOpacity style={styles.searchIcon}>
          <Feather name="search" size={28} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const Violeta = "#773DBD";

const styles = StyleSheet.create({
  menu: {
    paddingTop: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-around",
    backgroundColor: Violeta,
    overflow: "hidden",
  },
  imgHeader: {
    position: "absolute",
    marginLeft: "3%",
  },
  nav: {
    padding: "1%",
    paddingHorizontal: "6%",
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backIcon: {
    justifyContent: "center",
  },
  searchIcon: {
    justifyContent: "center",
  },
  logo: {
    width: "70%",
    alignItems: "center",
  },
  logoMenu: {
    width: "70%",
    height: 70,
  },
});
export default HeaderApp;
