import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  ImageBackground,
} from "react-native";
import { FlatList, TextInput } from "react-native-web";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onPress = () => {
    window.alert(
      `Đăng nhập thành công với Email: ${email} và Password: ${password}`
    );
  };
  return (
    <ImageBackground
      source={{
        uri: "https://img.thuthuatphanmem.vn/uploads/2018/11/11/hinh-nen-xanh-cho-may-tinh_051049343.jpg",
      }}
      style={myStyles.backgroundImage}
    >
      <View style={myStyles.container}>
        <Image
          style={myStyles.Img}
          source={{
            uri: "https://image.winudf.com/v2/image1/Y29tLm5pYW50aWNsYWJzLnBva2Vtb25nb19zY3JlZW5fMF8xNTcwMjI0MTM3XzA5Ng/screen-0.jpg?fakeurl=1&type=.jpg",
          }}
        />
        <Text style={{ fontSize: 15, alignSelf: "flex-end", marginRight: 5 }}>
          RERISTER
        </Text>
        <TextInput
          style={myStyles.TextInput}
          onChangeText={setEmail}
          value={email}
          inputMode="email"
        />
        <TextInput
          style={myStyles.TextInput}
          onChangeText={setPassword}
          value={password}
          secureTextEntry
          inputMode="text"
        />
        <Pressable
          style={({ pressed }) => [
            myStyles.button,
            {
              backgroundColor: pressed ? "darkgreen" : "green",
            },
          ]}
          onPress={onPress}
        >
          <Text style={myStyles.TextButton}>Login</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default App;

const myStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    justifyContent: "center",
  },
  TextInput: {
    borderWidth: 0.6,
    margin: 5,
    fontSize: 15,
    height: 40,
    paddingLeft: 10,
  },
  button: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    margin: 10,
  },
  TextButton: {
    fontSize: 18,
    fontWeight: "400",
  },
  Img: {
    height: 180,
    margin: 5,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
});
