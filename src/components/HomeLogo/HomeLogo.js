import React from 'react';
import {Box, Icon, Center} from 'native-base';
import {TouchableOpacity} from 'react-native';
import Svg, {Path, G} from 'react-native-svg';

const onHomeButtonPressed = navigation => {
  console.log('home button pressed');
  navigation.navigate('home');
};

const HomeLogo = ({
  navigation,
  color = '#6d28d9',
  diableNavigate = false,
  size = 'lg',
  props,
}) => {
  return (
    <Center>
      <TouchableOpacity
        onPress={() =>
          !diableNavigate ? onHomeButtonPressed(navigation) : null
        }>
        <Icon size={size} viewBox="0 0 24 24 ">
          <G fill="none" fill-rule="evenodd">
            <Path d="M0 0h24v24H0z" />
            <Path
              fill={color}
              d="M2 13h6v8H2v-8zM9 3h6v18H9V3zm7 5h6v13h-6V8z"
            />
          </G>
        </Icon>
      </TouchableOpacity>
    </Center>
  );
};

export default HomeLogo;
