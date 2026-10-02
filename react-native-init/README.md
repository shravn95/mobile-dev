# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
   npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

### Other setup steps

- To set up ESLint for linting, run `npx expo lint`, or follow our guide on ["Using ESLint and Prettier"](https://docs.expo.dev/guides/using-eslint/)
- If you'd like to set up unit testing, follow our guide on ["Unit Testing with Jest"](https://docs.expo.dev/develop/unit-testing/)
- Learn more about the TypeScript setup in this template in our guide on ["Using TypeScript"](https://docs.expo.dev/guides/typescript/)

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

# React Native learning notes and code snippets

This section gathers the examples discussed in the app screen and the component demo file. The goal is to document the core React Native building blocks used while building a simple login UI and small component experiments.

## Core components discussed

These are the main React Native pieces used throughout the examples:

- `View`: a layout container that behaves like a div for mobile layouts.
- `Text`: renders text with styling and typography options.
- `TextInput`: captures user input for forms.
- `Pressable`: handles touch interactions and button-like behavior.
- `Image`: displays both remote and local images.
- `ScrollView`: allows vertical scrolling when content exceeds the screen.
- `KeyboardAvoidingView`: moves the UI up when the keyboard opens.
- `FlatList`: renders large lists efficiently.
- `Button` and `Switch`: common interactive controls.

---

## 1) Login screen example from the main app screen

This is the main screen created in the app. It demonstrates a simple login form with validation and dynamic success feedback.

```tsx
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

const Index = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!username.trim() || !password) {
      setMessage("Enter your username and password to continue.");
      return;
    }

    setMessage(`Welcome back, ${username.trim()}!`);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.screen}
    >
      <ScrollView
        contentContainerStyle={styles.content}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.header}>
          <Text style={styles.eyebrow}>WELCOME BACK</Text>
          <Text style={styles.title}>Sign in to your account</Text>
          <Text style={styles.subtitle}>
            Enter your details below to pick up where you left off.
          </Text>
        </View>

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Username</Text>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={setUsername}
              placeholder="you@example.com"
              placeholderTextColor="#9aa0a8"
              style={styles.input}
              value={username}
            />
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              onChangeText={setPassword}
              placeholder="Enter your password"
              placeholderTextColor="#9aa0a8"
              secureTextEntry
              style={styles.input}
              textContentType="password"
              value={password}
            />
          </View>

          <Pressable
            accessibilityRole="button"
            onPress={handleLogin}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <Text style={styles.buttonText}>Log in</Text>
          </Pressable>

          {!!message && <Text style={styles.message}>{message}</Text>}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Index;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f5f3ef",
  },
  content: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 28,
  },
  header: {
    marginBottom: 36,
  },
  eyebrow: {
    color: "#bf5b3f",
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 1.8,
    marginBottom: 12,
  },
  title: {
    color: "#1e252b",
    fontSize: 34,
    fontWeight: "800",
    letterSpacing: 0,
    lineHeight: 40,
    maxWidth: 340,
  },
  subtitle: {
    color: "#687078",
    fontSize: 16,
    lineHeight: 24,
    marginTop: 14,
    maxWidth: 340,
  },
  form: {
    gap: 20,
  },
  fieldGroup: {
    gap: 8,
  },
  label: {
    color: "#303940",
    fontSize: 14,
    fontWeight: "700",
  },
  input: {
    backgroundColor: "#ffffff",
    borderColor: "#d8d5cf",
    borderRadius: 10,
    borderWidth: 1,
    color: "#1e252b",
    fontSize: 16,
    height: 54,
    paddingHorizontal: 16,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#bf5b3f",
    borderRadius: 10,
    height: 54,
    justifyContent: "center",
    marginTop: 6,
  },
  buttonPressed: {
    opacity: 0.82,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "700",
  },
  message: {
    color: "#536069",
    fontSize: 14,
    lineHeight: 20,
    textAlign: "center",
  },
});
```

This example shows the full login flow: input state, validation logic, and a styled button. It also uses a scroll container so the layout remains usable when the keyboard appears.

---

## 2) Commented-out examples from the same app file

These were saved as commented code while trying other UI patterns. They are useful references for list rendering, toggles, and basic card-style layouts.

### 2.1 Button, switch, and card layout experiment

```tsx
// import React from "react";
// import {
//   Button,
//   ScrollView,
//   StyleSheet,
//   Switch,
//   Text,
//   View,
// } from "react-native";

// const index = () => {
//   const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

//   const [isDarkMode, setIsDarkMode] = React.useState(false);

//   return (
//     <ScrollView
//       style={{ flex: 1, padding: 20 }}
//       contentContainerStyle={{ paddingBottom: 20, alignItems: "center" }}
//     >
//       {items.map((item, index) => (
//         <View
//           key={index}
//           style={{
//             marginBottom: 10,
//             backgroundColor: isDarkMode ? "black" : "white",
//             padding: 10,
//             borderRadius: 5,
//             shadowColor: "#000",
//             shadowOffset: { width: 0, height: 2 },
//             shadowOpacity: 0.3,
//             shadowRadius: 3,
//             elevation: 2,
//           }}
//         >
//           <Text style={{ color: isDarkMode ? "white" : "black", fontSize: 16 }}>
//             {item}
//           </Text>
//         </View>
//       ))}

//       <Button
//         title="Hello I am Button "
//         color="green"
//         onPress={() => alert("Don't press me")}
//       />
//       <Switch
//         value={isDarkMode}
//         onValueChange={setIsDarkMode}
//         trackColor={{ false: "#ddd", true: "#63cffc" }}
//         thumbColor={isDarkMode ? "#fff" : "#000"}
//       />
//     </ScrollView>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});
```

This pattern shows how a list can be rendered dynamically and how a theme toggle may update the screen state. `Button` and `Switch` are useful elements for quick interaction experiments and mock UI flows.

### 2.2 FlatList list example

```tsx
// import { FlatList, StyleSheet, Text, View } from "react-native";

// const index = () => {
//   const users = [
//     { id: 1, name: "John Doe" },
//     { id: 2, name: "Jane Smith" },
//     { id: 3, name: "Alice Johnson" },
//     { id: 4, name: "Bob Brown" },
//     { id: 5, name: "Charlie Davis" },
//   ];
//   return (
//     <FlatList
//       data={users}
//       keyExtractor={(item) => item.id.toString()}
//       contentContainerStyle={{ padding: 20 }}
//       renderItem={({ item }) => (
//         <View>
//           <Text style={{ fontSize: 16 }}>{item.name}</Text>
//         </View>
//       )}
//       ItemSeparatorComponent={() => (
//         <View style={{ height: 1, backgroundColor: "#000" }} />
//       )}
//     />
//   );
// };

// export default index;

// const styles = StyleSheet.create({});
```

`FlatList` is the preferred way to render long, scrollable lists in React Native. It is more efficient than mapping over many items in a basic `View` or `ScrollView`.

---

## 3) Basic component demo from the component notes file

This example demonstrates several core components in a simple screen: `Text`, `Image`, `TextInput`, and `Pressable`.

```tsx
import { Image, Pressable, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <Text numberOfLines={1} ellipsizeMode="tail">
        Hello World
      </Text>

      {/* Remote Image */}
      {/* <Image
        source={{
          uri: "https://www.anthropic.com/_next/image?url=https%3A%2F%2Fwww-cdn.anthropic.com%2Fimages%2F4zrzovbb%2Fwebsite%2F9890d1bb39c15c41772af22d2282eb612469051c-2880x1620.jpg&w=3840&q=75",
        }}
        style={{ width: 300, height: 200 }}
      /> */}

      {/* Local Image */}
      <Image
        source={require("@/assets/images/expo-badge.png")}
        style={{
          width: 300,
          height: 200,
          marginTop: 200,
          marginLeft: 30,
          objectFit: "contain",
        }}
      />

      {/* Text Input */}

      <TextInput
        placeholder="Type kar sujal ?"
        onChangeText={(text) => console.log(text)}
      />

      <Pressable
        onPress={() => alert("Boobs pressed")}
        style={({ pressed }) => {
          return {
            backgroundColor: pressed ? "red" : "blue",
          };
        }}
      >
        {({ pressed }) =>
          pressed ? (
            <Text> Boobs Pressed </Text>
          ) : (
            <Text>Boobs Not Pressed</Text>
          )
        }
        {/* <Image
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTN93ujeZnhBpPuyapgCdQf3qcHNa6HqEc5KeNmi2tz4kQtMl1RhOuGaA&s=10",
          }}
          width={300}
          height={150}
        />
        <Text>Boobs Boobs Boobs</Text> */}
      </Pressable>
    </View>
  );
}
```

This is a compact component test screen. It shows how to:

- render a single-line text label,
- load a local image asset,
- capture text input changes,
- use `Pressable` with a pressed state,
- and experiment with remote image content and inline press styling.

---

## Summary

Together, these snippets cover the core workflow used in React Native app development:

1. Build layouts with `View`, `Text`, and style objects.
2. Collect data with `TextInput`.
3. Handle interaction with `Pressable`, `Button`, and `Switch`.
4. Render lists with `ScrollView` and `FlatList`.
5. Add keyboard-safe behavior with `KeyboardAvoidingView`.
6. Display media using `Image` for local and remote assets.

These examples are a good starting point for building more complete mobile screens and reusable UI components.
