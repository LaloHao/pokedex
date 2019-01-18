// @flow
import React from 'react';
import {
  Platform,
  Keyboard,
  TouchableOpacity,
  NativeModules,
  LayoutAnimation,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import styled from 'styled-components/native';
import type { SearchBox as Props } from 'types';

import { Colors } from 'assets';

const device = Platform.OS;

if (device !== 'ios') {
  const { UIManager } = NativeModules;

  // eslint-disable-next-line
  UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Container = styled.View`
  background-color: ${Colors.White};
  padding: 10px 20px;
  flex-direction: row;
  align-items: center;
`;

const InputContainer = styled.View`
  background-color: ${Colors.Gray};
  border-radius: 5px;
  padding: ${device === 'ios' ? '15px' : '5px 10px'};
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

const Input = styled.TextInput`
  flex: 1;
  font-size: 20px;
  margin: 0 5px;
`;

const Text = styled.Text`
  font-size: 20px;
  color: ${Colors.Blue};
  margin-left: 5px;
`;

type State = {
  value: string,
  focused: boolean,
};

class SearchBox extends React.Component<Props, State> {
  state = {
    value: '',
    focused: false,
  };

  onChange = (value: string) => {
    this.setState({ value });

    if (this.props.onSearch) {
      this.props.onSearch(value);
    }
  }

  onSubmit = () => {
    this.Blur();
    if (this.props.onSearch) {
      const { value } = this.state;
      this.props.onSearch(value);
    }
  }

  onFocus = () => {
    LayoutAnimation.spring();
    this.setState({ focused: true });
  }

  onBlur = () => {
    LayoutAnimation.spring();
    this.setState({ focused: false });
  }

  Blur = () => {
    this.onBlur();
    Keyboard.dismiss();
  }

  render() {
    const { value, focused } = this.state;

    return (
      <Container>
        <InputContainer>
          <Icon size={20} name="search" color={Colors.GrayDarker} />
          <Input
            value={value}
            onChangeText={this.onChange}
            placeholderTextColor={Colors.GrayDarker}
            placeholder="Search"
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            onSubmitEditing={this.onSubmit}
          />
        </InputContainer>
        {focused && (
          <TouchableOpacity onPress={this.Blur}>
            <Text>Cancel</Text>
          </TouchableOpacity>
        )}
      </Container>
    );
  }
}

export default SearchBox;
