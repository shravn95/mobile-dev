import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

const DetailScreen = () => {
  const navigation = useNavigation<any>();

  const useLayoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      title: "Detail Screen",
      headerStyle: {
        backgroundColor: "orange",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
    });
  });
  return (
    <View>
      <Text>DetailScreen</Text>
      <Button onPressIn={() => navigation.navigate("Profile")}>Profile</Button>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({});

// Different navigation Methods
// 1. navigate() go to a screen by name
// 2. push() Always add a new instance
// 3. goBack() go to prev screen
// 4. replace() replace the current screen with a new one
