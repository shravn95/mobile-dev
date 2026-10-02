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
