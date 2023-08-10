import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
// import { useNavigation } from '@react-navigation/native';

const Signup = () => {
//   const navigation = useNavigation();
  const [signinup, setsigninup] = useState(true);

  const signin = () => {
    setsigninup(true);
  };
  const signup = () => {
    setsigninup(false);
  };

  const loginfun = () => {
    navigation.navigate('Home');
  };

  const createaccountfun = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={signin}>
          Sign In
        </Text>
        <Text style={styles.buttonText} onPress={signup}>
          Sign Up
        </Text>
      </View>

      {signinup ? (
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Sign In To Your Account</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
          </View>

          <Button title="Login" onPress={loginfun} />
        </View>
      ) : (
        <View style={styles.formContainer}>
          <Text style={styles.heading}>Sign Up To Your Account</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Full Name"
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
            />
          </View>

          <Button title="Create Account" onPress={createaccountfun} />
        </View>
      )}
    </View>
  );
};

const styles = {
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
    color: "blue",
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
};

export default Signup;
