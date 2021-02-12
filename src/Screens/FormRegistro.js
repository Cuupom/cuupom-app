import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Linking,
  Platform
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";
import { CSSRegistro } from "./Login";
import storage from '@react-native-firebase/storage';
import * as ImagePicker  from "expo-image-picker";
import * as Permissions from 'expo-permissions';

const FormRegistro = ({navigation}) => {

  
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setconfirmPass] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");
  const [correo, setCorreo] = useState("");
  
  const [image, setImage] = useState(null);

  const gris = "#908F90";

  function goTerminos() {
    console.log("Open Browser...");
    Linking.openURL("https://www.google.com.ec").catch((err) =>
      console.error("Couldn't load page", err)
    );
  }
 
  const uploadImage = (uri) =>{
    return new Promise((resolve,reject) => {
      let xhr = new XMLHttpRequest();
      xhr.onerror = reject;
      xhr.onreadystatechange= () =>{
        if(xhr.readyState === 4 ) {
          resolve(xhr.response)
        }
      }
      xhr.open('GET', uri);
      xhr.responseType= 'blob';
      xhr.send();
    });
  }
  
  const openGallery = async () =>{
    const resultPermission = await Permissions.askAsync(
      Permissions.MEDIA_LIBRARY
    );

    if(resultPermission){
      const resultImagePicker = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        aspect:[4,3]
      });

      if(resultImagePicker.cancelled === false){
        const imageUri = resultImagePicker.uri;
        const userID = 'user1234';

        uploadImage(imageUri)
        .then( resolve =>{
          let ref = storage.ref().child(`images/${userID}`);

          ref.put(resolve)
          .then( resolve => console.log('Imagen subida correctamente'))
          .catch(error => console.log(error))
        })
        .catch(error => console.log(error))
      }
    }
  };
  return (
    <ScrollView style={cssForm.containerDiv}>
      <StatusBar style="light" />
      <View style={cssForm.headerLogo}>
        <Image source={require("../img/logo.png")} style={cssForm.logo} />
      </View>

      <View style={cssForm.destacado}>
        <Text style={cssForm.txtDestacado}>Regístrate</Text>
      </View>

      <View style={CSSRegistro.formContainer}>
        <View style={cssForm.divTxtForm}>
          <Text style={cssForm.txtForm}>Información Personal </Text>
        </View>

        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setNombre(text)}
          value={nombre}
          placeholder="Nombres"
          placeholderTextColor={gris}
        />
        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setApellido(text)}
          value={apellido}
          placeholder="Apellidos"
          placeholderTextColor={gris}
        />
        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setDireccion(text)}
          value={direccion}
          placeholder="Dirección"
          textContentType="addressCityAndState"
          placeholderTextColor={gris}
        />
        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setTelefono(text)}
          value={telefono}
          textContentType="telephoneNumber"
          placeholder="Teléfono"
          keyboardType="numeric"
          placeholderTextColor={gris}
        />

        <View style={cssForm.divInfo}>
          <View style={cssForm.infoIcon}>
            <Feather name="info" size={28} color="#09BFCB" />
          </View>
          <View style={cssForm.divTexto}>
            <Text style={cssForm.txtInfo}>
              Nos comunicaremos contigo vía correo electrónico, nuestro equipo
              buscará entregarte toda la ayuda posible en cualqueir momento.
            </Text>
          </View>
        </View>
        <View style={cssForm.divTxtForm}>
          <Text style={cssForm.txtForm}>Mi Cuenta</Text>
        </View>

        <TouchableOpacity style={cssForm.divSubirFoto} onPress={() => openGallery() }> 
          <View style={cssForm.shapeCircle}>
         
          </View>
          <Text style={cssForm.txtFoto}>Sube una foto para tu perfil</Text>
        </TouchableOpacity>

        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setCorreo(text)}
          value={correo}
          placeholder="Correo electrońico"
          textContentType="emailAddress"
          keyboardType="email-address"
          placeholderTextColor={gris}
        />
        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setPass(text)}
          value={pass}
          placeholder="Contraseña"
          secureTextEntry={true}
          textContentType="password"
          placeholderTextColor={gris}
        />
        <TextInput
          style={CSSRegistro.txtInput}
          onChangeText={(text) => setconfirmPass(text)}
          value={confirmPass}
          placeholder="Confirmar tu Contraseña"
          textContentType="password"
          secureTextEntry={true}
          placeholderTextColor={gris}
        />
        <View style={cssForm.divTerminos}>
          <View style={cssForm.divCheckbox}></View>
          <View style={cssForm.divCondiciones}>
            <Text style={cssForm.txtCondiciones}>
              Acepto Términos y Condiciones
            </Text>
            <TouchableOpacity onPress={() => goTerminos()}>
              <Text style={cssForm.txtLeer}>Leer Términos y Condiciones</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          style={CSSRegistro.btnLogin}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={CSSRegistro.txtLogin}>Registrarse ahora</Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: "10%" }}>
        <Image source={require("../img/HandsPhone.png")} />
      </View>
    </ScrollView>
  );
};
const cssForm = StyleSheet.create({
  containerDiv: {
    backgroundColor: "#773DBD",
    width: "100%",
    height: "100%",
  },
  headerLogo: {
    width: 190,
    height: 80,
  },
  logo: {
    width: "100%",
    height: "100%",
  },
  destacado: {
    marginVertical: "6%",
    marginHorizontal: "5%",
  },
  txtDestacado: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26,
    fontFamily: "Arial",
  },
  divTxtForm: {
    alignItems: "flex-start",
    flexDirection: "row",
    marginHorizontal: "5%",
  },
  txtForm: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 16,
    fontFamily: "Arial",
    flex: 1,
    //marginRight: '45%'
  },
  divInfo: {
    flexDirection: "row",
    marginHorizontal: "5%",
    marginVertical: "8%",
  },
  infoIcon: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: "1%",
  },
  divTexto: {
    flex: 5,
    justifyContent: "center",
    margin: "1%",
  },
  txtInfo: {
    color: "#fff",
    fontSize: 12,
  },
  divSubirFoto: {
    alignItems: "center",
    padding: "10%",
  },
  shapeCircle: {
    width: 120,
    height: 120,
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  txtFoto: {
    color: "#fff",
    fontSize: 14,
    paddingTop: "2%",
  },
  divTerminos: {
    flexDirection: "row",
    padding: "4%",
  },
  divCheckbox: {
    flex: 1,
  },
  divCondiciones: {
    flex: 5,
  },
  txtCondiciones: {
    color: "#fff",
    fontSize: 14,
  },
  txtLeer: {
    color: "#fff",
    textDecorationLine: "underline",
    fontSize: 13,
  },
});
export default FormRegistro;
