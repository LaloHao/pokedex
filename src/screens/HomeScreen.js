import React from 'react';
import { View, Text, Image, Button } from 'react-native';

import { withHeader } from 'compose';
import { Input } from 'components';

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
        <Input value={value} onChangeText={this.onChange} />
        <Text>
          Home
        </Text>
        <Button
          title="Press"
          onPress={() => this.props.navigation.push('Detail')}
        />
      </View>
    );
  }
}

export default withHeader(HomeScreen);
