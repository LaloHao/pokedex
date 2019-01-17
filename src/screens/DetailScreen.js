import React from 'react';
import { View, Text } from 'react-native';

import { Header } from 'components';

class DetailScreen extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Header />
        <Text>Detail</Text>
      </View>
    );
  }
}

export default DetailScreen;
