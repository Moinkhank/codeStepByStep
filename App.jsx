import React from "react";
import { 
  StatusBar ,
  StyleSheet,
  Text,
  Image,
  View
} from "react-native";
import LoginScreen from "./src/screens/LoginSignupScreens/LoginScreen";
import SignUp from "./src/screens/LoginSignupScreens/SignupScreen";
import Welcome from "./src/screens/LoginSignupScreens/welcome";
import HomeScreen from "./src/screens/HomeScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Screen } from "react-native-screens";
import Userprofile from "./src/screens/Userprofile";
import Productpage from "./src/screens/Productpage";
import UserCart from "./src/screens/UserCart";
import Placeorder from "./src/screens/Placeorder";
import TrackOrder from "./src/screens/TrackOrder";
export default function App(){
  const Stack = createNativeStackNavigator();
  return(
     <NavigationContainer>
        <Stack.Navigator initialRouteName="welcomepage" >
            <Stack.Screen name="welcomepage" component={Welcome} 
              options={{
                headerShown:false,
              }}
            />
            <Stack.Screen name="sign_up_page" component={SignUp} 
               options={{
                headerShown:false,
              }}
            />
            <Stack.Screen name="login" component={LoginScreen} 
              options={{
                headerShown:false,
              }}
            />
            <Stack.Screen name="Home" component={HomeScreen} 
             options={{
                headerShown:false,
              }}
            />
             <Stack.Screen name="user_profile" component={Userprofile} 
             options={{
                headerShown:false,
              }}
            />
             <Stack.Screen name="productpage" component={Productpage} 
             options={{
                headerShown:false,
              }}
            />
             <Stack.Screen name="cart" component={UserCart} 
             options={{
                headerShown:false,
              }}
            />
             <Stack.Screen name="placeorder" component={Placeorder} 
             options={{
                headerShown:false,
              }}
            />
             <Stack.Screen name="trackorders" component={TrackOrder} 
             options={{
                headerShown:false,
              }}
            />
        </Stack.Navigator>
     </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
    alignItems:"center",
    justifyContent:"center"
  }
})