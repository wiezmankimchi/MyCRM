import React, {useState} from 'react';
import {
  Box,
  Text,
  Button,
  VStack,
  HStack,
  Icon,
  Center,
  Pressable,
} from 'native-base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeLogo from '~/components/HomeLogo';
import {useStoreState, useStoreActions} from 'easy-peasy';

const navigateTo = (navigation, screenName) => navigation.navigate(screenName);

const Dashboard = ({navigation}) => {
  const [selected, setSelected] = useState(0);
  const store = useStoreState(state => state);
  const storeActions = useStoreActions(actions => actions);

  const onHomeButtonPress = () => {
    setSelected(0);
    setTimeout(() => {
      navigateTo(navigation, 'dashboard');
    }, 500);
  };

  return (
    <Box
      flex={1}
      bg="white"
      safeAreaTop
      width="full"
      // maxW="300px"
      alignSelf="center">
      <HStack space={3} mb={6}>
        <HomeLogo navigation={navigation} diableNavigate={false} />
        <Text fontSize="3xl" bold color="violet.700">
          Dashboard Page
        </Text>
      </HStack>
      <Center flex={1}>
        <Text>Store Value</Text>
        <Text>{JSON.stringify(store)}</Text>
      </Center>
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        <Pressable
          cursor="pointer"
          opacity={selected === 0 ? 1 : 0.5}
          py="3"
          flex={1}
          onPress={() => onHomeButtonPress()}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 0 ? 'home' : 'home-outline'}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Home
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 1 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(1)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 1 ? 'account-tie' : 'account-tie-outline'}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Leads
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 2 ? 1 : 0.6}
          py="2"
          flex={1}
          onPress={() => setSelected(2)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 2 ? 'shopping' : 'shopping-outline'}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Deals
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={
                    selected === 3 ? 'bag-personal' : 'bag-personal-outline'
                  }
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Inventory
            </Text>
          </Center>
        </Pressable>
        <Pressable
          cursor="pointer"
          opacity={selected === 3 ? 1 : 0.5}
          py="2"
          flex={1}
          onPress={() => setSelected(3)}>
          <Center>
            <Icon
              mb="1"
              as={
                <MaterialCommunityIcons
                  name={selected === 3 ? 'account' : 'account-outline'}
                />
              }
              color="white"
              size="sm"
            />
            <Text color="white" fontSize="12">
              Account
            </Text>
          </Center>
        </Pressable>
      </HStack>
    </Box>
  );
};

export default Dashboard;
