import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../component/Home';
import ForgotPassword from '../component/ForgotPassword';

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
         </Stack.Navigator>
      </NavigationContainer>
   );
};

export default StackNavigation;
