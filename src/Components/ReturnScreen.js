import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ReturnScreen = ({ Categoria, ScreenRetorno }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.divReturn}>
      <View>
        <TouchableOpacity
          style={styles.btnReturn}
          onPress={() => navigation.navigate(ScreenRetorno)}
        >
          <Feather name="arrow-left" size={28} color={blueDark} />
        </TouchableOpacity>
      </View>

      <View style={styles.divCategoria}>
        <Text style={styles.txtCategoria}>{Categoria}</Text>
      </View>
    </View>
  );
};

export default ReturnScreen;

const blueDark = "#3D1C65";
const styles = StyleSheet.create({
  divReturn: {
    width: "100%",
    padding: "4%",
    //margin: "4%",
    flexDirection: "row",
  },
  txtCategoria: {
    color: blueDark,
    fontWeight: "bold",
    fontSize: 22,
    textTransform: "capitalize",
  },
  btnReturn: {
    justifyContent: "center",
    margin: "2%",
  },
  divCategoria: {
    justifyContent: "center",
  },
});
