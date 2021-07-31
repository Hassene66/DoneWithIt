import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../Screens/DoneWithIt/LoginScreen";
import WelcomeScreen from "../Screens/DoneWithIt/WelcomeScreen";
import RegisterScreen from "../Screens/DoneWithIt/RegisterScreen";
const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
export default AuthNavigator;
