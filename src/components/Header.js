// @flow
import React from 'react';
import styled from 'styled-components/native';

import { Colors, Images } from 'assets';

import {
  StatusBar,
  Platform,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import type { Header as Props } from 'types';

const paddingTop = Platform.OS === 'ios' ? 45 : 25;
const size = Platform.OS === 'ios' ? 45 : 30;

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

const BackButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 20px;
  left: 20px;
`;

const Header = ({ navigation: { state: { routeName }, goBack } }: Props) => (
  <Container>
    <StatusBar backgroundColor={Colors.Red} barStyle="light-content" />
    <Image source={Images.LogoPokemon} />
    { routeName !== 'Home' && (
      <BackButton onPress={() => goBack()}>
        <Icon name="angle-left" size={size} color={Colors.White} />
      </BackButton>
    )}
  </Container>
);

export default Header;
