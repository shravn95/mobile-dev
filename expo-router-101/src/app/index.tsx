import Home from "@/components/Home";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Edit src/app/index.tsx to edit this screen.
      </Text>
      <Link href="/about" style={{ color: "blue" }}>
        Go to About
      </Link>
      <Link href="/profile" style={{ color: "blue" }}>
        Go to Profile
      </Link>
      <Link href="/123" style={{ color: "blue" }}>
        Go to Profile with userId 123
      </Link>
      <Link href="/456" style={{ color: "blue" }}>
        Go to Profile with userId 456
      </Link>

      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    color: "#fff",
  },
});
