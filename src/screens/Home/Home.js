import React from 'react';
import {Box, Button, Text, VStack, HStack, Icon} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeIcon = ({onPress, color}) => (
  <Icon
    as={FontAwesome}
    name="home"
    size={30}
    color={color}
    onPress={onPress}
  />
);

const onButtonPressed = () => {
  console.warn('button prssed');
};

const onHomeButtonPressed = () => {};

const Home = ({navigation}) => {
  return (
    <Box safeArea p={2}>
      <HStack space={3}>
        <HomeIcon
          color="primary.600"
          onPress={() => onHomeButtonPressed(navigation)}
        />
        <Text fontSize="2xl" bold mb="1/6" color="primary.500">
          Home Page
        </Text>
      </HStack>
      <VStack space="lg">
        <Button onPress={() => onButtonPressed()} colorScheme="primary">
          Press
        </Button>
        <Button
          onPress={() => navigation.navigate('drawer')}
          variant="ghost"
          colorScheme="primary">
          Drawer Menu
        </Button>
        <Button
          onPress={() => navigation.navigate('details')}
          variant="outline"
          colorScheme="primary">
          Details Page
        </Button>
      </VStack>
    </Box>
  );
};

export default Home;
