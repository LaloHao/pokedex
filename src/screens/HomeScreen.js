// @flow
import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';

import { withHeader } from 'compose';
import { SearchBox } from 'components';

import type { Navigation } from 'types';

type Props = {
  navigation: Navigation;
};

type State = {

};

class HomeScreen extends React.Component<Props, State> {
  onSearch = (value: string) => {
    console.log(value);
  }

  render() {
    return (
      <View>
        <SearchBox onSearch={this.onSearch} />
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
