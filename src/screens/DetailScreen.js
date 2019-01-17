import React from 'react';
import { View, Text } from 'react-native';

import { withHeader } from 'compose';

class DetailScreen extends React.Component {
  render() {
    console.log(this.props);
    return (
      <View>
        <Text>Detail</Text>
      </View>
    );
  }
}

export default withHeader(DetailScreen);
