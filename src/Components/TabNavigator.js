import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
//Screens
import { Usuario } from "../Screens/Usuario";
import { Guardados } from "../Screens/Guardados";
import { Categorias } from "../Screens/Categorias";
import Home from "../Screens/Home";

export const TabNavigator = ()=> {
    const Tab = createBottomTabNavigator();
    const Violeta = "#773DBD";

    return (
      <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === "Inicio") {
              return (
                <Ionicons name="md-home-outline" size={24} color={color} />
              );
            } else if (route.name === "Perfil") {
              return (
                <Ionicons
                  name="md-person-circle-sharp"
                  size={24}
                  color={color}
                />
              );
            } else if (route.name === "Guardados") {
              return (
                <Ionicons name="bookmark-outline" size={24} color={color} />
              );
            } else if (route.name === "Categorias") {
              return <Ionicons name="search" size={24} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: Violeta,
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Inicio" component={Home}/>
        <Tab.Screen name="Categorias" component={Categorias} />
        <Tab.Screen
          name="Guardados"
          component={Guardados}
          options={{ tabBarBadge: 4 }}
        />
        <Tab.Screen name="Perfil" component={Usuario} />
      </Tab.Navigator>
    );
  }