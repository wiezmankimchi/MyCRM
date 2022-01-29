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
  console.warn('Button Pressed');
};

const onHomeButtonPressed = navigation => {
  navigation.navigate('home');
};

const onBackPagePressed = navigation => {
  navigation.goBack();
};

const DrawerMenu = ({navigation}) => {
  return (
    <Box safeArea p={2}>
      <VStack space={3} mb="1/6">
        <HStack space={3}>
          <HomeIcon
            color="tertiary.600"
            onPress={() => onHomeButtonPressed(navigation)}
          />
          <Text fontSize="2xl" bold color="tertiary.500">
            DrawerMenu Page
          </Text>
        </HStack>
      </VStack>
      <VStack space="lg">
        <Button onPress={() => onButtonPressed()} colorScheme="tertiary">
          Press
        </Button>
        <Button
          onPress={() => onBackPagePressed(navigation)}
          variant="outline"
          colorScheme="tertiary">
          Go Back
        </Button>
      </VStack>
    </Box>
  );
};

export default DrawerMenu;
