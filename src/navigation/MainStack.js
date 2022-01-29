import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// import Pages
import Home from '../screens/Home';
import Details from '../screens/Details';
import DrawerMenu from '../screens/DrawerMenu';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="details" component={Details} />
      <Stack.Screen name="drawer" component={DrawerMenu} />
    </Stack.Navigator>
  );
};

export default MainStack;
