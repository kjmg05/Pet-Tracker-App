import React, { useContext, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Context as AuthContext } from "../../providers/AuthContext";
import * as SplashScreen from "expo-splash-screen";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Home from "../screens/Home";
import PetInfo from "../screens/PetInfo";
import AddNewPet from "../screens/AddNewPet";
import {
  PetsProfile_newUser,
  PetsProfile_user,
} from "../screens/PetsProfile";
const Stack = createStackNavigator();

function Navigation() {
  const { state, persistLogin } = useContext(AuthContext);

  // Verificar si existe un token de autenticación
  useEffect(() => {
    persistLogin();
  }, []);

  // Prevenir que la pantalla de splash se oculte automáticamente
  SplashScreen.preventAutoHideAsync();

  // Ocultar la pantalla de splash hasta finalizar la verificación del token
  if (!state.loading) SplashScreen.hideAsync();

  return (
    <NavigationContainer>
      {!state.loading && (
        <>
          {state.loggedIn ? (
            <Stack.Navigator>
              <Stack.Screen name="Home" component={PetsProfile_user} />
             
             
              <Stack.Screen
            name="PetInfo"
            component={PetInfo}
           
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="AddNewPet"
            component={AddNewPet}
    
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PetsProfile_newUser"
            component={PetsProfile_newUser}
        
            options={{ headerShown: true }}
          />
          <Stack.Screen
            name="PetsProfile_user"
            component={PetsProfile_user}
       
            options={{ headerShown: true }}
          />
            </Stack.Navigator>
          ) : (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </Stack.Navigator>
          )}
        </>
      )}
    </NavigationContainer>
  );
}


export default Navigation;
