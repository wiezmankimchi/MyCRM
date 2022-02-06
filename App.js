import React from 'react';
import {NativeBaseProvider, Box} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './src/navigation/MainStack';
import {StoreProvider} from 'easy-peasy';
import store from './src/Store/Store';

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <StoreProvider store={store}>
          <MainStack />
        </StoreProvider>
      </NativeBaseProvider>
    </NavigationContainer>
  );
};

export default App;
