import React, { useState, useEffect, useContext } from "react";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  Image,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
//Icons
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { AuthContext } from "../Navigation/AuthProvider";

const Registrar = ({ navigation }) => {
  const [value, onChangeText] = useState("");
  const [pass, onChangePass] = useState("");
  const [loading, setLoading] = useState(false);

  const { login, googleLogin, fbLogin, user } = useContext(AuthContext);

  const validate = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return expression.test(String(email).toLowerCase());
  };
  const loginEmail = (user, pass) => {
    if (user.length == 0 && pass.length == 0) {
      return alert("Ingrese un correo y una contraseña");
    }
    if (user.length == 0) {
      return alert("Ingrese un correo");
    }
    if (pass.length == 0) {
      return alert("Ingrese una contraseña");
    }
    if (validate(user) == false) {
      return alert("Correo no valido, escriba una dirección de correo valida");
    }
    login(user, pass);
    setLoading(true)
  };


  if (loading) {
    setTimeout(() => {
      setLoading(false)
      navigation.navigate("Home");
    }, 3000);
    return (
      <View style={CSSRegistro.container}>
        <Image source={require("../img/load.gif")} style={CSSRegistro.load} />
      </View>
    );
  } else {
    return (
      <ScrollView style={CSSRegistro.contenedor}>
        <StatusBar style="light" />
        <View style={CSSRegistro.imgContainer}>
          <Image source={require("../img/logo.png")} style={CSSRegistro.logo} />
        </View>
        <View style={CSSRegistro.formContainer}>
          <TextInput
            style={CSSRegistro.txtInput}
            onChangeText={(text) => onChangeText(text)}
            value={value}
            placeholder="Correo"
            keyboardType="email-address"
            placeholderTextColor={gris}
            textContentType="emailAddress"
          />
          <TextInput
            style={CSSRegistro.txtInput}
            onChangeText={(text) => onChangePass(text)}
            value={pass}
            placeholder="Contraseña"
            secureTextEntry={true}
            textContentType="password"
          />
          <TouchableOpacity
            style={CSSRegistro.btnLogin}
            onPress={() => {
              //Login con correo
              loginEmail(value, pass);
            }}
          >
            <Text style={CSSRegistro.txtLogin}>Iniciar Sesión</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={CSSRegistro.txtForget}>Olvidé mi contraseña</Text>
          </TouchableOpacity>
        </View>

        <View style={CSSRegistro.containerSocial}>
          <TouchableOpacity
            style={CSSRegistro.btnEmail}
            onPress={() => {
              navigation.navigate("FormularioRegistro");
            }}
          >
            <AntDesign
              name="mail"
              size={22}
              color="white"
              style={{ marginHorizontal: "4%" }}
            />
            <Text style={CSSRegistro.txtBoton}>Registrarse con E-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={CSSRegistro.btnGoogle}
            onPress={() =>{
              setLoading(true)
              googleLogin().then(() => {
                console.log("Signed in with Google!")
               
              })
            }
   
            }
          >
            <AntDesign
              name="google"
              size={22}
              color="white"
              style={{ marginHorizontal: "4%" }}
            />
            <Text style={CSSRegistro.txtBoton}>Continuar con Google</Text>
          </TouchableOpacity>

          {Platform.OS === 'android' ? (
          <TouchableOpacity
            style={CSSRegistro.btnFacebook}
            onPress={() =>{
              setLoading(true)
              fbLogin()
                .then(() =>{
                   console.log("Signed in with Facebook!")
                    
                  })
                .catch((error) => console.log(error))
            }
            }
          >
            <Entypo
              name="facebook"
              size={22}
              color="white"
              style={{ marginHorizontal: "4%" }}
            />
            <Text style={CSSRegistro.txtBoton}>Continuar con Facebook</Text>
          </TouchableOpacity>
            ) : <View style={{ height: 120}}></View>}
        </View>

        <View style={CSSRegistro.footerImg}>
          <Image source={require("../img/Hands.png")} />
        </View>
      </ScrollView>
    );
  }
};
const gris = "#636165";
const Violeta = "#773DBD";
export const CSSRegistro = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Violeta,
  },
  load: {
    width: 200,
    height: 200,
  },
  contenedor: {
    backgroundColor: "#773DBD",
    width: "100%",
    height: "100%",
    display: "flex",
  },
  imgContainer: {
    width: "100%",
    height: "20%",
    alignItems: "center",
    marginTop: "24%",
    flex: 1,
  },
  logo: {
    width: "80%",
    height: 100,
  },
  formContainer: {
    flex: 2,
    alignItems: "center",
    marginTop: "3%",
  },
  txtInput: {
    backgroundColor: "#fff",
    width: "90%",
    padding: 12,
    paddingLeft: 18,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "gray",
    margin: 6,
    color: gris,
  },
  btnLogin: {
    backgroundColor: "#3E1D67",
    width: "90%",
    margin: "3%",
    padding: "4%",
    alignItems: "center",
    borderRadius: 6,
  },
  txtLogin: {
    color: "#fff",
    fontWeight: "700",
  },
  txtForget: {
    color: "#fff",
    marginVertical: 10,
    fontWeight: "bold",
    marginLeft: "50%",
  },
  containerSocial: {
    flex: 3,
    alignItems: "center",
    marginTop: "8%",
  },
  btnFacebook: {
    backgroundColor: "#2C70DA",
    width: "90%",
    margin: "2%",
    padding: "4%",
    alignItems: "center",
    borderRadius: 6,
    flexDirection: "row",
    justifyContent: "center",
  },
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
  btnEmail: {
    backgroundColor: "#5551FF",
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
  footerImg: {
    alignItems: "flex-end",
    marginTop: "4%",
  },
});
export default Registrar;
