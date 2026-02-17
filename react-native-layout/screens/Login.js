import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";

const Login = ({ switchScreen }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/login.png")}
          style={styles.headerImage}
        />
        <Text style={{ color: "darkblue", fontSize: 40, fontWeight: "bold" }}>
          LOGIN
        </Text>
      </View>

      <View style={styles.inputTextContainer}>
        <Text style={styles.textVisualInput}>Email</Text>

        <View style={styles.inputText}>
          <MaterialCommunityIcons name="email-box" size={24} color="#09234d" />
          <TextInput
            placeholder={"enter email account"}
            style={{ color: "#09234d" }}
          />
        </View>

        <Text style={styles.textVisualInput}>Password</Text>

        <View style={styles.inputText}>
          <Entypo name="lock" size={24} color="#09234d" />
          <TextInput
            placeholder={"enter password"}
            style={{ color: "#09234d" }}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <View style={styles.accountTextContainer}>
          <Text style={styles.accountText}>Dont have account?</Text>
          <TouchableOpacity onPress={switchScreen}>
            <Text style={[styles.accountText, { color: "darkviolet" }]}>
              signup here
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
  },
  headerContainer: {
    flex: 3,
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingTop: 50,
  },
  headerImage: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    borderWidth: 10,
    padding: 20,
    borderRadius: 100,
    borderColor: "lightblue",
  },
  inputTextContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    marginHorizontal: "10%",
    gap: 10,
  },
  inputText: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderWidth: 2,
    borderColor: "lightblue",
    borderRadius: 8,
    color: "#000",
    fontSize: 16,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "center",
    gap: 10,
  },
  buttonContainer: {
    flex: 3,
    marginHorizontal: "10%",
    marginTop: "30%",
  },
  button: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 4,
    borderColor: "darkgreen",
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  textVisualInput: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#09234d",
  },
  accountTextContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
  },
  accountText: {
    fontSize: 14,
    fontWeight: "bold",
  },
});
