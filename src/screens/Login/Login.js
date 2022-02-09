import React, {useState} from 'react';
import {Box, Button, Text, VStack, Input} from 'native-base';
import HomeLogo from '~/components/HomeLogo';

import {useStoreState, useStoreActions, useStore} from 'easy-peasy';
const navigateTo = (navigation, screenName) => navigation.navigate(screenName);

const Login = ({navigation}) => {
  const store = useStoreState(state => state);
  const storeActions = useStoreActions(actions => actions);
  const [form, setform] = useState({email: '', password: ''});

  const onSignUpButtonPressed = () => navigateTo(navigation, 'signup');
  const onLoginButtonPressed = () => {
    console.log('email / password', form);
    storeActions.setEmail(form.email);
    storeActions.setPassword(form.password);
    navigateTo(navigation, 'dashboard');
  };

  return (
    <Box safeArea p={2} bg="violet.50">
      <HomeLogo navigation={navigation} />
      <Text
        fontSize="25"
        bold
        mb="1/6"
        ml="8"
        color="black"
        fontFamily="NunitoSans-Regular">
        Log in
      </Text>
      <VStack space="5">
        <VStack space="5" alignItems="center">
          <Input
            value={form.email}
            onChangeText={value => {
              setform({...form, email: value});
            }}
            placeholder="email"
            borderRadius="13"
            bg="warmGray.200"
            p="5"
            w="90%"
            size="xl"
          />
          <Input
            value={form.password}
            onChangeText={value => setform({...form, password: value})}
            placeholder="password"
            borderRadius="13"
            bg="warmGray.200"
            p="5"
            w="90%"
            size="xl"
            type="password"
          />
        </VStack>
        <VStack space="5" mt="10" alignItems="center" justifyContent="center">
          <Button
            w="90%"
            p="4"
            borderRadius="full"
            bg="violet.700"
            _text={{
              fontSize: '20',
              fontFamily: 'NunitoSans-SemiBold',
              color: 'white',
            }}
            onPress={() => onLoginButtonPressed()}>
            Login (skip)
          </Button>
          <Text color="gray.400">Do you need an account?</Text>
          <Button
            variant="ghost"
            colorScheme="violet"
            bg="muted.100"
            _text={{
              fontSize: '20',
              fontFamily: 'NunitoSans-Regular',
              color: 'violet.700',
            }}
            onPress={() => onSignUpButtonPressed()}>
            Sign Up
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default Login;
