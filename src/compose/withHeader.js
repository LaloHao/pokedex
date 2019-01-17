import React from 'react';
import { View } from 'react-native';
import { Header } from 'components';

type Props = {
  navigation: {
    push: Function,
  },
};

// eslint-disable-next-line react/display-name
const withHeader = Component => (props: Props) => (
  <View>
    <Header navigation={props.navigation} />
    <Component {...props} />
  </View>
);

export default withHeader;
