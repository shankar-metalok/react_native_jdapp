import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const Signup = ({ navigation }) => {
  const [signinup, setsigninup] = useState(true);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleEmailChange = (text) => {
    setemail(text);
  };

  const handlePasswordChange = (text) => {
    setpassword(text);
  };

  const loginfun = () => {
    fetch("http://192.168.0.153:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("posted data successfully", data);
        navigation.navigate("Home");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const createaccountfun = () => {
    navigation.navigate("Home");
  };

  useEffect(() => {
    console.log(email, "email");
    console.log(password, "password");
  }, [email, password]);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={() => setsigninup(true)}>
          Sign In
        </Text>
        <Text style={styles.buttonText} onPress={() => setsigninup(false)}>
          Sign Up
        </Text>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.heading}>
          {signinup ? "Sign In To Your Account" : "Sign Up To Your Account"}
        </Text>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={handleEmailChange}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={handlePasswordChange}
          />
        </View>

        <Button
          title={signinup ? "Login" : "Create Account"}
          onPress={signinup ? loginfun : createaccountfun}
        />
      </View>
    </View>
  );
};
// example@example.com  examplePassword
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  buttonText: {
    marginRight: 10,
    fontSize: 18,
    color: "white",
    backgroundColor: "green",
    padding: 10,
    borderRadius: 5,
  },
  formContainer: {
    marginTop: 20,
  },
  heading: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    marginBottom: 10,
    padding: 5,
  },
});

export default Signup;
