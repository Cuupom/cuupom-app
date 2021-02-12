import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
// Screens
import Login from "../Screens/Login";
import FormRegistro from "../Screens/FormRegistro";
import { DetalleProducto } from "../Screens/DetalleProducto";
import { ContenidoWelcome } from "../Screens/ContenidoWelcome";
import { Restaurantes } from "../CategoryScreens/Restaurantes";
import { TabNavigator } from "../Components/TabNavigator";
import { enableScreens } from "react-native-screens";
import Empresa from "../Screens/Empresa";
import Tecnologia from "../CategoryScreens/Tecnologia";
import Salud from "../CategoryScreens/Salud";
import Servicios from "../CategoryScreens/Servicios";
import Supermercados from "../CategoryScreens/Supermercados";
import { AuthContext } from "./AuthProvider";
import Viajes from "../CategoryScreens/Viajes";
import Regalos from "../CategoryScreens/Regalos";
import Electrodomesticos from "../CategoryScreens/Electrodomesticos";
import Cargando from "../Screens/Cargando";

export default function MyStack() {
  enableScreens();
  const Stack = createStackNavigator();
  const Violeta = "#773DBD";
  const { user } = useContext(AuthContext);

  if(user == null){
      return (
    <Stack.Navigator initialRouteName="Welcome">
      <Stack.Screen
        name="Welcome"
        component={ContenidoWelcome}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Registrarse"
        component={Login}
        options={{
          headerStyle: {
            backgroundColor: Violeta,
          },
          headerTintColor: "#fff",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FormularioRegistro"
        component={FormRegistro}
        options={{
          headerStyle: {
            backgroundColor: Violeta,
          },
          title: "Formulario de Registro",
          headerTintColor: "#fff",
        }}
      />
      <Stack.Screen
        name="DetalleProducto"
        component={DetalleProducto}
        options={{
          headerStyle: {
            backgroundColor: Violeta,
          },
          title: "Detalles del producto",
          headerTintColor: "#fff",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Restaurantes"
        component={Restaurantes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Tecnologia"
        component={Tecnologia}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Salud"
        component={Salud}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Servicios"
        component={Servicios}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Supermercados"
        component={Supermercados}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Viajes"
        component={Viajes}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Regalos"
        component={Regalos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Electrodomesticos"
        component={Electrodomesticos}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Empresa"
        component={Empresa}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Cargando"
        component={ Cargando }
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
  }
  else {
    return (
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={TabNavigator}
          options={{
            headerShown: false,
          }}
        />
       
        <Stack.Screen
          name="DetalleProducto"
          component={DetalleProducto}
          options={{
            headerStyle: {
              backgroundColor: Violeta,
            },
            title: "Detalles del producto",
            headerTintColor: "#fff",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Restaurantes"
          component={Restaurantes}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Tecnologia"
          component={Tecnologia}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Salud"
          component={Salud}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Servicios"
          component={Servicios}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Supermercados"
          component={Supermercados}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Viajes"
          component={Viajes}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Regalos"
          component={Regalos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Electrodomesticos"
          component={Electrodomesticos}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Empresa"
          component={Empresa}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Cargando"
          component={ Cargando }
          options={{
            headerShown: false,
          }}
        /> */}
      </Stack.Navigator>
    );
  }

}
