import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import ProfileScreen from "../../screens/ProfileScreen";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          title: "Dashboard",
          headerStyle: {
            backgroundColor: "#000",
          },
          headerTintColor: "#ff0099",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 20,
          },
        }}
      />
      <Stack.Screen name="Details" component={DetailScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
};

export default function DynamicStackNavigator() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
