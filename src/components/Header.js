import React from 'react';
import styled from 'styled-components/native';

import { Colors, Images } from 'assets';

import {
  StatusBar,
  Platform,
} from 'react-native';

const paddingTop = Platform.OS === 'ios' ? 45 : 25;

const Container = styled.View`
  background-color: ${Colors.Red};
  padding-top: ${paddingTop};
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.Image`
  width: 189;
  height: 70;
`;

const Header = () => (
  <Container>
    <StatusBar
      backgroundColor={Colors.Red}
      barStyle="light-content"
    />
    <Image source={Images.LogoPokemon} />
  </Container>
);

export default Header;
