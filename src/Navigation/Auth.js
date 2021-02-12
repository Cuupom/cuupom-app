import React, { useState } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Alertas = (titulo,mensaje) =>{
  Alert.alert(
    titulo,
    mensaje,
    [
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ],
    { cancelable: false }
  );
}

export const logout = async ()=> {
  auth()
    .signOut()
    .then(() => console.log("User signed out!"));

  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
  } catch (error) {
    console.log("Error de Logout: " + error);
  }
}

export const Login = async (email, password) => {
  try {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("User login with Email");
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          return Alertas('Error!',"That email address is already in use!");
        }

        if (error.code === "auth/invalid-email") {
          return Alertas('Error!',"El Correo ingresado no es válido!");
        }

        if(error.code === 'auth/user-not-found'){
          return Alertas('Error! ',"El Correo ingresado no esta registrado");
        }

        if(error.code === 'auth/wrong-password'){
          return Alertas('Error! ',"La contraseña es incorrecta");
        }
        console.error(error);
      });
  } catch (error) {
    console.log("Error Login con Email" + error);
  }
};
                    
export const googleLogin = async () => {
  try {
    // Get the user ID token
    const { idToken } = await GoogleSignin.signIn();
    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);
    // Return Auth
    return await auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.log("Error Google Login :" + error);
  }
};
export const facebookLogin = async () => {
  try {
    // Attempt login with permissions
    const result = await LoginManager.logInWithPermissions([
      "public_profile",
      "email",
    ]);

    if (result.isCancelled) {
      throw "User cancelled the login process";
    }

    // Once signed in, get the users AccesToken
    const data = await AccessToken.getCurrentAccessToken();

    if (!data) {
      throw "Something went wrong obtaining access token";
    }

    // Create a Firebase credential with the AccessToken
    const facebookCredential = auth.FacebookAuthProvider.credential(
      data.accessToken
    );
    // Sign-in the user with the credential
    return auth().signInWithCredential(facebookCredential);
  } catch (error) {
    console.log("Error FB-Login:" + error);
  }
};
