/* import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "./welcome";
import SignUp from "./SignupScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "../HomeScreen";

const Stack = createNativeStackNavigator();

const AuthNavigation=()=>{
    return(
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
        </Stack.Navigator>
    )
}
 
export default AuthNavigation; */