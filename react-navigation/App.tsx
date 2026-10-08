import * as React from "react";
import { View, Text } from "react-native";
import { createStaticNavigation } from "@react-navigation/native";
import StaticStackNavigator from "./src/navigation/stack/StaticStackNavigator";
import DynamicStackNavigator from "./src/navigation/stack/DynamicStackNavigator";

export default function App() {
  return <DynamicStackNavigator />;
}
