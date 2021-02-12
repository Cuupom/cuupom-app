import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MyStack from "../Navigation/Routes";
import { GoogleSignin } from "@react-native-community/google-signin";
import auth from "@react-native-firebase/auth";
import firebase from "@react-native-firebase/app";
import { firebaseConfig } from "./Firebase";
import { AuthContext } from "../Navigation/AuthProvider";


const Welcome = () => {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app(); // if already initialized, use that one
  }

  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        "936758220359-bead53pg87p9gno2vkrsdviv364suaqq.apps.googleusercontent.com",
      androidClientId:
        "825002284685-6fb93c2cb3qur1i83f64bvt21qc5osfg.apps.googleusercontent.com",
    });
    console.log(user);
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);

  if (initializing) return null;

  return (
    <NavigationContainer>
      {user ?  <MyStack /> :  <MyStack/> }
    </NavigationContainer>
  );
};

export default Welcome;
