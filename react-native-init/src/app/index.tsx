import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Switch, Text, View, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const themes = {
  light: {
    background: "#ffffff",
    card: "#f5f5f5",
    text: "#1a1a1a",
    subtext: "#666666",
    accent: "#6c63ff",
  },
  dark: {
    background: "#121212",
    card: "#1e1e1e",
    text: "#ffffff",
    subtext: "#AAAAAA",
    accent: "#9d97ff",
  },
};

const HomeScreen = () => {
  const systemScheme = useColorScheme(); //light \ dark
  const [manualDark, setManualDark] = useState<boolean | null>(null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";

  const theme = isDark ? themes.dark : themes.light;

  console.log(systemScheme);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={isDark ? "light" : "dark"} />
      {/* Header */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          System preference: {systemScheme ?? "unknown"}
        </Text>
      </View>

      {/* Toggle Row */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.accent }]}>
          Themed Card 🎨
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Colors adapt to dark/light mode automatically
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  card: { padding: 20, borderRadius: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 4 },
  label: { fontSize: 16 },
});

// import { StyleSheet, Text } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const styleA = StyleSheet.create({
//   text: { color: "red", fontSize: 16 },
// });
// const styleB = StyleSheet.create({
//   text: { color: "blue", fontWeight: "bold" },
// });

// const flat = StyleSheet.flatten([styleA.text, styleB.text]);

// const index = () => {
//   return (
//     <SafeAreaView>
//       <Text style={flat}>Flattened Style</Text>;
//       <Text style={styleB.text}>Another Flattened Style</Text>;
//     </SafeAreaView>
//   );
// };

// export default index;

// const styles = StyleSheet.create({});

// import { StyleSheet, Text, View } from "react-native";

// const Homescreen = () => {
//   return (
//     <View style={styles.card}>
//       <Text>Homescreen</Text>
//     </View>
//   );
// };

// export default Homescreen;

// const styles = StyleSheet.create({
//   card: {
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     padding: 16,
//     margin: 16,
//     elevation: 3,
//     shadowColor: "#000",
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//   },
// });

// import { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   Platform,
//   Pressable,
//   ScrollView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
// } from "react-native";

// const Index = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [message, setMessage] = useState("");

//   const handleLogin = () => {
//     if (!username.trim() || !password) {
//       setMessage("Enter your username and password to continue.");
//       return;
//     }

//     setMessage(`Welcome back, ${username.trim()}!`);
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//       style={styles.screen}
//     >
//       <ScrollView
//         contentContainerStyle={styles.content}
//         keyboardShouldPersistTaps="handled"
//       >
//         <View style={styles.header}>
//           <Text style={styles.eyebrow}>WELCOME BACK</Text>
//           <Text style={styles.title}>Sign in to your account</Text>
//           <Text style={styles.subtitle}>
//             Enter your details below to pick up where you left off.
//           </Text>
//         </View>

//         <View style={styles.form}>
//           <View style={styles.fieldGroup}>
//             <Text style={styles.label}>Username</Text>
//             <TextInput
//               autoCapitalize="none"
//               autoCorrect={false}
//               onChangeText={setUsername}
//               placeholder="you@example.com"
//               placeholderTextColor="#9aa0a8"
//               style={styles.input}
//               value={username}
//             />
//           </View>

//           <View style={styles.fieldGroup}>
//             <Text style={styles.label}>Password</Text>
//             <TextInput
//               onChangeText={setPassword}
//               placeholder="Enter your password"
//               placeholderTextColor="#9aa0a8"
//               secureTextEntry
//               style={styles.input}
//               textContentType="password"
//               value={password}
//             />
//           </View>

//           <Pressable
//             accessibilityRole="button"
//             onPress={handleLogin}
//             style={({ pressed }) => [
//               styles.button,
//               pressed && styles.buttonPressed,
//             ]}
//           >
//             <Text style={styles.buttonText}>Log in</Text>
//           </Pressable>

//           {!!message && <Text style={styles.message}>{message}</Text>}
//         </View>
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };

// export default Index;

// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     backgroundColor: "#f5f3ef",
//   },
//   content: {
//     flexGrow: 1,
//     justifyContent: "center",
//     padding: 28,
//   },
//   header: {
//     marginBottom: 36,
//   },
//   eyebrow: {
//     color: "#bf5b3f",
//     fontSize: 12,
//     fontWeight: "700",
//     letterSpacing: 1.8,
//     marginBottom: 12,
//   },
//   title: {
//     color: "#1e252b",
//     fontSize: 34,
//     fontWeight: "800",
//     letterSpacing: 0,
//     lineHeight: 40,
//     maxWidth: 340,
//   },
//   subtitle: {
//     color: "#687078",
//     fontSize: 16,
//     lineHeight: 24,
//     marginTop: 14,
//     maxWidth: 340,
//   },
//   form: {
//     gap: 20,
//   },
//   fieldGroup: {
//     gap: 8,
//   },
//   label: {
//     color: "#303940",
//     fontSize: 14,
//     fontWeight: "700",
//   },
//   input: {
//     backgroundColor: "#ffffff",
//     borderColor: "#d8d5cf",
//     borderRadius: 10,
//     borderWidth: 1,
//     color: "#1e252b",
//     fontSize: 16,
//     height: 54,
//     paddingHorizontal: 16,
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#bf5b3f",
//     borderRadius: 10,
//     height: 54,
//     justifyContent: "center",
//     marginTop: 6,
//   },
//   buttonPressed: {
//     opacity: 0.82,
//   },
//   buttonText: {
//     color: "#ffffff",
//     fontSize: 16,
//     fontWeight: "700",
//   },
//   message: {
//     color: "#536069",
//     fontSize: 14,
//     lineHeight: 20,
//     textAlign: "center",
//   },
// });

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
