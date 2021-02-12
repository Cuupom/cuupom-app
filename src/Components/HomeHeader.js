import React from "react";
import { StyleSheet, Image, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function HomeHeader() {
  return (
    <View style={styles.menu}>
      <View style={styles.imgHeader}>
        <Image source={require("../img/U-d.png")} style={styles.imgHeader} />
      </View>

      <View style={styles.nav}>
        <Image source={require("../img/logo.png")} style={styles.logoMenu} />
      </View>

     
        <View style={styles.search}>
          <TouchableOpacity style={{width: '100%'}}>
            <Ionicons name="search" size={30} color="#fff" />
          </TouchableOpacity>
          
        </View>
 
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    paddingTop: "10%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "space-between",
    backgroundColor: "#773DBD",
    overflow: "hidden",
  },
  imgHeader: {
    position: "absolute",
  },
  nav: {
    padding: "1%",
    flex: 3,
  },
  logoMenu: {
    width: "60%",
    height: 70,
    // margin: "2%",
    //resizeMode: "contain",
  },
  search: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    paddingRight: "4%",
  },
});
