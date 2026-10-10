import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

const Home = () => {
  return (
    <View>
      <Text>Home</Text>
      <Link href="/about" style={{ color: "blue" }}>
        Go to About
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
