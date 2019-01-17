import React from 'react';
import { View, Text, Image } from 'react-native';

import { Input } from 'components';
import { LogoPokemon } from 'assets/Images';

class HomeScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(value) {
    this.setState({ value });
  }

  render() {
    const { value } = this.state;

    return (
      <View>
        <Image source={LogoPokemon} style={{
          width: 189,
          height: 70,
        }} />
        <Input value={value} onChangeText={this.onChange} />
        <Text>
          Home
        </Text>
      </View>
    );
  }
}

export default HomeScreen;
