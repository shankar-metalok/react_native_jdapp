import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const Register = () => {
  const [regsuccess, setRegSuccess] = useState(null);
  const [formNone, setFormNone] = useState(true);

  const [regdata, setRegData] = useState({
    restaurantname: '',
    businessmail: '',
    phonenumber: '',
    location: '',
    password: '',
    confirmpassword: '',
  });

  const eventChange = (name, value) => {
    setRegData({ ...regdata, [name]: value });
  };




  const regsubmit = () => {
    if (
      regdata.restaurantname !== '' &&
      regdata.businessmail &&
      regdata.phonenumber &&
      regdata.location &&
      regdata.password &&
      regdata.confirmpassword
    ) {
      setRegSuccess(true);
      setFormNone(false);
    }
    console.log('register data',regdata)
  



    fetch("http://192.168.0.154:5000/usersdata", {
      method: "post",
      headers: {
        "Content-Type": "application/json" // Fix: Use "Content-Type" instead of "content-type"
      },
      body: JSON.stringify({
        username: regdata.restaurantname,
        email: regdata.businessmail,
        password: regdata.password,
        confirmpassword: regdata.confirmpassword,
      })
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      console.log("posted data successfully", data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }






  useEffect(() => {
    if (!formNone) {
      console.log('register user data', regdata);
    }
  });

  const successFun = () => {
    // navigation.navigate('SignUp');
  };

  return (
    <View style={styles.container}>
      {regsuccess && (
        <View style={styles.successContainer}>
          <Text style={styles.successText}>Registered Successfully</Text>
          <Button title="Done" onPress={successFun} />
        </View>
      )}

      {formNone && (
        <View style={styles.formContainer}>
          <Text style={styles.formHeaderText}>Registration Details</Text>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Restaurant Name"
              value={regdata.restaurantname}
              onChangeText={(value) =>
                eventChange('restaurantname', value)
              }
              style={styles.input}
            />
            <TextInput
              placeholder="Business Mail"
              value={regdata.businessmail}
              onChangeText={(value) => eventChange('businessmail', value)}
              style={styles.input}
            />
            <TextInput
              placeholder="Phone Number"
              value={regdata.phonenumber}
              onChangeText={(value) => eventChange('phonenumber', value)}
              keyboardType="numeric"
              style={styles.input}
            />
            <TextInput
              placeholder="Location"
              value={regdata.location}
              onChangeText={(value) => eventChange('location', value)}
              style={styles.input}
            />
            <TextInput
              placeholder="Password"
              value={regdata.password}
              onChangeText={(value) => eventChange('password', value)}
              secureTextEntry
              style={styles.input}
            />
            <TextInput
              placeholder="Confirm Password"
              value={regdata.confirmpassword}
              onChangeText={(value) =>
                eventChange('confirmpassword', value)
              }
              secureTextEntry
              style={styles.input}
            />
          </View>

          <Button title="Continue" onPress={regsubmit} />
        </View>
      )}
    </View>
  );
};

const styles = {
  container: {
    margin: 20,
    width:'80%'
  },
  successContainer: {
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  successText: {
    textAlign: 'center',
    fontSize: 24,
  },
  formContainer: {
    marginBottom: 20,
  },
  formHeaderText: {
    marginBottom: 20,
    fontSize: 18,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
};

export default Register;
