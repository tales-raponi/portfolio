import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  LoginScreen,
  HomeScreen,
  ComponentScreen,
} from "../../presentation/screens";

const { Navigator, Screen } = createNativeStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Navigator initialRouteName="Login">
      <Screen name="Login" component={LoginScreen}></Screen>
      <Screen name="Home" component={HomeScreen}></Screen>
      <Screen name="Components" component={ComponentScreen}></Screen>
    </Navigator>
  </NavigationContainer>
);

export default AppNavigator;
