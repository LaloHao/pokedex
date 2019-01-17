import React from 'react';
import styled from 'styled-components/native';

import { Colors, Images } from 'assets';

import {
  StatusBar,
  Platform,
  Text,
  Image,
} from 'react-native';

const paddingTop = Platform.OS === 'ios' ? 45 : 25;

const Container = styled.View`
  background-color: ${Colors.Red};
  padding-top: ${paddingTop};
  padding-bottom: 10px;
  flex-direction: column;
  align-items: center;
`;

class Header extends React.Component {
  render() {
    return (
      <Container>
        <StatusBar
          backgroundColor={Colors.Red}
          barStyle="light-content"
        />
        <Image source={Images.LogoPokemon} style={styles.logo} />
      </Container>
    );
  }
}

const styles = {
  logo: {
    width: 189,
    height: 70,
  },
};

export default Header;
