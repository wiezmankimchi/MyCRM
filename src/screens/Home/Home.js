import React, {useEffect} from 'react';
import {Box, Button, Text, Image} from 'native-base';
import {ImageBackground, StyleSheet, Dimensions} from 'react-native';
import {useStoreState, useStoreActions} from 'easy-peasy';
import HomeLogo from '~/components/HomeLogo';

const onLoginButtonPressed = navigation => {
  navigation.navigate('login');
};

const onSignUpButtonPressed = () => {
  console.warn('Signup pressed');
};

const Home = ({navigation}) => {
  const store = useStoreState(state => state);
  const storeActions = useStoreActions(actions => actions);
  console.log(store.userSession);
  useEffect(() => {
    if (!store.userSession.isLoggedIn) {
      storeActions.setEmail('');
      storeActions.setPassword('');
    }
  });

  return (
    <ImageBackground
      source={require('~/assets/images/bg.png')}
      resizeMode="cover"
      style={styles.image}>
      <Box flex={1} alignItems="center" justifyContent="center">
        <HomeLogo size="2xl" color="white" />
        <Text
          fontFamily="NunitoSans-Black"
          fontWeight="black"
          fontSize="4xl"
          color="white">
          myCRM
        </Text>
        <Text bold fontSize="30" color="white" py="1/5">
          Do more to grow your business
        </Text>
        <Button
          rounded="full"
          w="80%"
          p="2"
          m="3"
          colorScheme="blueGray"
          _text={{color: 'white', fontSize: '24', fontWeight: 'bold'}}
          onPress={() => onLoginButtonPressed(navigation)}>
          Log in
        </Button>
        <Button
          rounded="full"
          w="80%"
          p="2"
          m="3"
          variant="outline"
          colorScheme="blueGray"
          _text={{color: 'white', fontSize: '24', fontWeight: 'bold'}}
          onPress={() => onSignUpButtonPressed()}>
          Sign Up
        </Button>
      </Box>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});
export default Home;
