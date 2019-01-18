// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { withHeader } from 'compose';
import { Input } from 'components';

import type { Navigation } from 'types';

type Props = {
  navigation: Navigation;
};

type State = {
  value: string,
};

class HomeScreen extends React.Component<Props, State> {
  state = {
    value: '',
  };

  onChange = (value) => {
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
