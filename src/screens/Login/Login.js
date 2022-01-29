import React from 'react';
import {Box, Button, Text, VStack} from 'native-base';

const onButtonPressed = () => {
  console.warn('Button Pressed');
};

const Login = ({navigation}) => {
  return (
    <Box safeArea p={2}>
      <Text fontSize="2xl" bold mb="1/6" color="primary.500">
        Login Page
      </Text>
      <VStack space="lg">
        <Button onPress={() => onButtonPressed}>Press</Button>
        <Button
          onPress={() => navigation.navigate('details')}
          variant="outline">
          Next Page
        </Button>
      </VStack>
    </Box>
  );
};

export default Login;
