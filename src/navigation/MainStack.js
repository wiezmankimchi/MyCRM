import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Pages
import Home from '~/screens/Home';
import Login from '~/screens/Login';
import SignUp from '~/screens/Signup';
import Dashboard from '~/screens/Dashboard';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="dashboard" component={Dashboard} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="signup" component={SignUp} />
    </Stack.Navigator>
  );
};

export default MainStack;
