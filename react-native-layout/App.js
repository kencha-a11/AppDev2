import { StyleSheet, View } from "react-native";
import { useState } from "react";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import Todo from "./screens/Todo";

export default function App() {
  const [screen, setScreen] = useState("login"); 

  return (
    // <View style={styles.container}>
    //   {screen === "login" ? (
    //     <Login switchScreen={() => setScreen("signup")} />
    //   ) : (
    //     <Signup switchScreen={() => setScreen("login")} />
    //   )}
    // </View>
    <Todo />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
