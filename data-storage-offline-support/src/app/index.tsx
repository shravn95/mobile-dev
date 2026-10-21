import * as SecureStore from "expo-secure-store";
import { useState } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const Index = () => {
  const [output, setOutput] = useState("");

  const saveToken = async () => {
    await SecureStore.setItemAsync("token", "my-secret-token");
    setOutput("Token saved successfully!");
  };

  const getToken = async () => {
    const token = await SecureStore.getItemAsync("token");
    setOutput(token!);
  };
  const getObject = async () => {
    const object = await SecureStore.getItemAsync("user");
    setOutput(object!);
  };
  const deleteObject = async () => {
    await SecureStore.deleteItemAsync("user");
    setOutput("object deleted successfuly");
  };

  const deleteToken = async () => {
    await SecureStore.deleteItemAsync("token");
    setOutput("Token deleted successfully!");
  };

  const checkAvailability = async () => {
    const available = await SecureStore.isAvailableAsync();
    setOutput(available ? "available" : "not available");
  };

  const saveObject = async () => {
    const object = {
      "name: ": "Shravan",
      dob: "16-01-2006",
    };

    await SecureStore.setItemAsync("user", JSON.stringify(object));
    setOutput("object saved successfully");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Secure Store Demo</Text>
      <Text style={styles.subtitle}>
        Try each action to see how secure storage works.
      </Text>

      <View style={styles.buttonGroup}>
        <Pressable
          accessibilityRole="button"
          onPress={saveToken}
          style={({ pressed }) => [
            styles.button,
            styles.primaryButton,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.primaryButtonText}>Save token</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={saveObject}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Save object</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={deleteObject}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Delete object</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={getToken}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Get token</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={deleteToken}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Delete token</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={getObject}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Get Object</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={checkAvailability}
          style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed,
          ]}
        >
          <Text style={styles.buttonText}>Check availability</Text>
        </Pressable>
      </View>

      <View style={styles.outputCard}>
        <Text style={styles.outputLabel}>Output</Text>
        <Text style={styles.output} selectable>
          {output || "Choose an action to see its result."}
        </Text>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f7fb",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    color: "#172033",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#61708a",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  buttonGroup: {
    gap: 12,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderColor: "#d6deea",
    borderRadius: 12,
    borderWidth: 1,
    justifyContent: "center",
    minHeight: 52,
    paddingHorizontal: 20,
  },
  primaryButton: {
    backgroundColor: "#3155d9",
    borderColor: "#3155d9",
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: "#24324a",
    fontSize: 16,
    fontWeight: "600",
  },
  primaryButtonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  outputCard: {
    backgroundColor: "#e9eef8",
    borderRadius: 12,
    marginTop: 28,
    minHeight: 92,
    padding: 16,
  },
  outputLabel: {
    color: "#61708a",
    fontSize: 13,
    fontWeight: "700",
    letterSpacing: 0.5,
    marginBottom: 8,
    textTransform: "uppercase",
  },
  output: {
    color: "#172033",
    fontSize: 16,
  },
});
