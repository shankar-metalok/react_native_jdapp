import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";


import Main from './navigation/main'

const App = () => {
     console.log('helllooo')
  return (
   <Main/>
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
