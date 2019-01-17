import React from 'react';
import { View } from 'react-native';
import { Header } from 'components';

const withHeader = (Component) => (props) => (
  <View>
    <Header
      navigation={props.navigation}
      screenProps={props.screenProps}
    />
    <Component {...props} />
  </View>
);

export default withHeader;
