import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';

const AlertIcon = () => (
  <View>
    <Svg viewBox="0 0 25 25" width="21" height="21">
      <Path
        fill="#000"
        d="M25.04,20C23.73,20,22,18,22,16.83v-5.52c0-4.06-2.94-7.8-6.98-8.89c-0.01,0-0.03-0.01-0.04-0.01 long long path in a far far away galaxy"
      />
    </Svg>
  </View>
);

export {AlertIcon};
