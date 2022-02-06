import React from 'react';
import {Icon} from 'native-base';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
const HomeIcon = ({onPress, color, size = 30}) => (
  <Icon
    as={FontAwesome}
    name="home"
    size="30"
    color={color}
    onPress={onPress}
  />
);

export default HomeIcon;
