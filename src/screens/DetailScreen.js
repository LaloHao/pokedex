import React from 'react';
import { View, Text } from 'react-native';

import { withHeader } from 'compose';

const DetailScreen = () => (
  <View>
    <Text>Detail</Text>
  </View>
);

export default withHeader(DetailScreen);
