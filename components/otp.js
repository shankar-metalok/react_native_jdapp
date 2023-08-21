import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";



const OTPVerification = () => {
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState("");
  const [message, setMessage] = useState("");

  const handleGenerateOTP = () => {
    // Make API call to the backend to generate and send OTP
    fetch("http://192.168.0.154:5004/api/generate-otp", {
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
    fetch("http://192.168.0.154:5004/api/verify-otp", {
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
    width: "98%",
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
    gap:3
  },


};

export default OTPVerification;
