import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const UserIdScreen = () => {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>UserIdScreen</Text>
      <Text>{userId}</Text>
    </View>
  );
};

export default UserIdScreen;

const styles = StyleSheet.create({});
