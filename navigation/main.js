import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import Register from '../components/register';


const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>

    </NavigationContainer>
  );
};

export default AppNavigator;
