import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";

import Register from './components/register'
import Example from './components/example'

import Singin_Signup from './components/signinsingup'
import Otp from './components/otp'

const App = () => {
 
  return (
    <ScrollView contentContainerStyle={styles.container}>

      <Singin_Signup/>

      {/* <Register/> */}
      
      <Otp/>

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

};

export default App;
