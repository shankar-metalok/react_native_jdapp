import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

import Register from './components/register'
import Example from './components/example'

const OTPVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleGenerateOTP = () => {
    // Make API call to the backend to generate and send OTP
    fetch("http://localhost:5000/api/generate-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error generating OTP:", error);
        setMessage("Error generating OTP. Please try again later.");
      });
  };

  const handleVerifyOTP = () => {
    // Make API call to the backend to verify the entered OTP
    fetch("http://localhost:5000/api/verify-otp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, otp }),
    })
      .then((response) => response.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error verifying OTP:", error);
        setMessage("Error verifying OTP. Please try again later.");
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Register/>
      <View style={styles.otpParent}>
        <Text style={styles.heading}>OTP Verification</Text>
        <View>
          <Text>Email Address:</Text>
          <TextInput
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View>
          <Text>OTP:</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            value={otp}
            onChangeText={(text) => setOTP(text)}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <Button title="Generate OTP" onPress={handleGenerateOTP} />
          <Button title="Verify OTP" onPress={handleVerifyOTP} />
        </View>
        <Text>{message}</Text>
      </View>

      <Example/>

    </ScrollView>
  );
};

const styles = {
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  otpParent: {
    width: "80%",
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
};

export default OTPVerification;
