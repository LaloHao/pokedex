// @flow
import React from 'react';
import { Dimensions } from 'react-native';
import styled from 'styled-components/native';
import type { Card as Props } from 'types';
import { withNavigation } from 'react-navigation';
import { CachedImage as Image } from 'react-native-cached-image';

import { Colors } from 'assets';

const cardSize = () => {
  const { width, height } = Dimensions.get('window');
  return Math.min(width, height) * 0.3;
};

const Container = styled.TouchableOpacity`
  background-color: ${Colors.White};
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width; ${cardSize}px;
  height; ${cardSize}px;
  margin: 5px 0;
`;

const Text = styled.Text`
  font-size: 14px;
`;

class Card extends React.Component<Props> {
  render() {
    const { name, uri } = this.props;
    const imageSize = cardSize() * 0.8;
    const style = { width: imageSize, height: imageSize };
    return (
      <Container onPress={() => this.props.navigation.push('Detail')}>
        <Image source={{ uri }} style={style} />
        <Text>
          {name}
        </Text>
      </Container>
    );
  }
}

export default withNavigation(Card);
