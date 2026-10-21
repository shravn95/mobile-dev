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

## SecureStore notes

This sample demonstrates encrypted local key-value storage with
[`expo-secure-store`](https://docs.expo.dev/versions/v57.0.0/sdk/securestore/).
The implementation is in [`src/app/index.tsx`](./src/app/index.tsx).

### Installation

Use Expo's installer so the package version matches the Expo SDK:

```bash
npx expo install expo-secure-store
```

Import SecureStore with its namespace:

```tsx
import * as SecureStore from "expo-secure-store";
```

### Save and read a token

SecureStore values are strings. Save a token with `setItemAsync` and read it
with `getItemAsync`:

```tsx
await SecureStore.setItemAsync("token", "my-secret-token");

const token = await SecureStore.getItemAsync("token");
console.log(token);
```

`getItemAsync` returns `null` when the key does not exist. Applications should
handle that case before displaying or using the value.

### Save an object

Objects must be serialized before they are stored. Read the string back and
parse it when the object is needed:

```tsx
const user = {
  name: "Shravan",
  dob: "16-01-2006",
};

await SecureStore.setItemAsync("user", JSON.stringify(user));

const storedUser = await SecureStore.getItemAsync("user");
const parsedUser = storedUser ? JSON.parse(storedUser) : null;
```

The sample's **Save object** button stores the `user` object, and the **Get
object** button displays its serialized JSON value.

### Delete values

Delete a specific stored value with `deleteItemAsync`:

```tsx
await SecureStore.deleteItemAsync("token");
await SecureStore.deleteItemAsync("user");
```

The sample provides separate buttons for deleting the token and the saved
object.

### Check availability

Check whether SecureStore is available on the current device before relying on
it:

```tsx
const available = await SecureStore.isAvailableAsync();
console.log(available ? "available" : "not available");
```

### Important considerations

- SecureStore is intended for small sensitive values such as tokens and
  credentials. Large payloads can be rejected by the underlying platform.
- Android stores values using encrypted Android Keystore-backed storage.
- iOS stores values in the Keychain. Keychain values can persist after an app
  uninstall if the app is reinstalled with the same bundle identifier.
- SecureStore should not be the only source of truth for irreplaceable data.

## AsyncStorage notes

This sample tests local, asynchronous key-value storage with
[`@react-native-async-storage/async-storage`](https://react-native-async-storage.github.io/async-storage/).
The implementation is in [`src/app/index.tsx`](./src/app/index.tsx).

### Installation

Use Expo's installer so the package version matches the Expo SDK:

```bash
npx expo install @react-native-async-storage/async-storage
```

For this Expo SDK 57 sample, the installed compatible version is `2.2.0`.

### Basic operations

AsyncStorage stores strings. Serialize objects before saving them and parse them
after reading them:

```tsx
import AsyncStorage from "@react-native-async-storage/async-storage";

const user = {
  name: "Suraj",
  age: 22,
  isDeveloper: true,
};

// Save an object
await AsyncStorage.setItem("user", JSON.stringify(user));

// Read the object
const value = await AsyncStorage.getItem("user");
const savedUser = value ? JSON.parse(value) : null;

// Remove one key
await AsyncStorage.removeItem("user");

// Remove all keys
await AsyncStorage.clear();
```

`getItem` returns `null` when a key does not exist. In the sample, the value is
also displayed in the UI after pressing **Get Data**.

### Multiple values

Use `multiSet` and `multiGet` for several key-value pairs:

```tsx
await AsyncStorage.multiSet([
  ["name", "Code Snippet"],
  ["role", "Developer"],
]);

const values = await AsyncStorage.multiGet(["name", "role"]);
console.log(values);
```

Other useful methods demonstrated in the sample include:

```tsx
const keys = await AsyncStorage.getAllKeys();
await AsyncStorage.removeItem("user");
await AsyncStorage.clear();
```

### `createAsyncStorage` compatibility note

AsyncStorage v3 introduced `createAsyncStorage("databaseName")`, but that API
requires the newer `RNAsyncStorage` native module. When running this sample in
the current Expo Go runtime, using it can produce:

```text
Native module is null, cannot create db
```

For Expo SDK 57 and Expo Go, use the standard `AsyncStorage` singleton shown
above with `setItem`, `getItem`, `multiSet`, and `multiGet`. If you intentionally
need separate databases with `createAsyncStorage`, use a compatible development
build that includes the required native module.

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
