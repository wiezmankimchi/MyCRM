import React from 'react';
import {Box, Text, Button, VStack, HStack, Icon} from 'native-base';
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
  console.alert('Button Pressed');
};

const onBackPagePressed = navigation => {
  navigation.goBack();
};

const onHomeButtonPressed = navigation => {
  navigation.navigate('home');
};

const Details = ({navigation}) => {
  return (
    <Box safeArea p={2}>
      <HStack space={3}>
        <HomeIcon
          color="secondary.600"
          onPress={() => onHomeButtonPressed(navigation)}
        />
        <Text fontSize="2xl" bold mb="1/6" color="secondary.500">
          Details Page
        </Text>
      </HStack>
      <VStack space="lg">
        <Button colorScheme="secondary" onPress={() => onButtonPressed()}>
          Press
        </Button>
        <Button
          onPress={() => navigation.navigate('drawer')}
          variant="ghost"
          colorScheme="secondary">
          Drawer Menu
        </Button>
        <Button
          colorScheme="secondary"
          onPress={() => onBackPagePressed(navigation)}
          variant="outline">
          Go Back
        </Button>
      </VStack>
    </Box>
  );
};

export default Details;
