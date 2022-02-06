import React from 'react';
import {Box, Button, Text, VStack, Input} from 'native-base';
import HomeLogo from '~/components/HomeLogo';

const onSignUpButtonPressed = navigation => navigation.navigate('dosignup');
const onLoginButtonPressed = navigation => navigation.navigate('login');

const SignUp = ({navigation}) => {
  return (
    <Box safeArea p={2}>
      <HomeLogo navigation={navigation} />
      <Text
        fontSize="25"
        bold
        mb="1/6"
        ml="8"
        color="black"
        fontFamily="NunitoSans-Regular">
        Create new account
      </Text>
      <VStack space="5">
        <VStack space="5" alignItems="center">
          <Input
            value="email"
            placeholder="email"
            borderRadius="13"
            bg="warmGray.200"
            p="5"
            w="90%"
            size="xl"
          />
          <Input
            value="password"
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
            onPress={() => onSignUpButtonPressed(navigation)}>
            Sign Up (skip)
          </Button>
          <Text color="gray.400">Already have an account?</Text>
          <Button
            variant="ghost"
            colorScheme="violet"
            bg="muted.100"
            _text={{
              fontSize: '20',
              fontFamily: 'NunitoSans-Regular',
              color: 'violet.700',
            }}
            onPress={() => onLoginButtonPressed(navigation)}>
            Log In
          </Button>
        </VStack>
      </VStack>
    </Box>
  );
};

export default SignUp;
