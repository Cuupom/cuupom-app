import React, { createContext, useState } from "react";
import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-community/google-signin";
import { LoginManager, AccessToken } from "react-native-fbsdk";
import { Alert } from "react-native";

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

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
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
          } catch (e) {
            console.log(e);
          }
        },
        googleLogin: async () => {
          try {
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(
              idToken
            );

            // Sign-in the user with the credential
            await auth().signInWithCredential(googleCredential);
          } catch (error) {
            console.log({ error });
          }
        },
        fbLogin: async () => {
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
            console.log({ error });
          }
        },
        register: async (email, password) => {
          try {
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log(e);
          }
        },
        logout: async () => {
          try {
           await auth()
            .signOut()
            .then(() => console.log("User signed out!"));
        
          try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
          } catch (error) {
            console.log("Error de Logout: " + error);
          }

          } catch (e) {
            console.log(e);
          }
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
