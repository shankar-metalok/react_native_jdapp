
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Register from '../components/register'
import Home from '../components/home'
import Otp from '../components/otp'
import Paymentmethod from '../components/payment'
import Singin_Signup from '../components/signinsingup'





const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Singin_Signup" component={Singin_Signup} />
        <Stack.Screen name="Otp" component={Otp} />

        <Stack.Screen name="Paymentmethod" component={Paymentmethod} />


      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;