// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Colors } from 'assets';
import type { Statistic as Props } from 'types';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Text = styled.Text`
  width: 20%;
  color: ${Colors.GrayDarker};
`;

const Slider = styled.Slider`
  width: 80%;
`;

const Statistic = ({ name, value }: Props) => (
  <Container>
    <Text>{name}</Text>
    <Slider
      minimumTrackTintColor="#217cd3"
      maximumTrackTintColor="#00b0ff"
      maximumValue={100}
      value={value}
      step={1}
      disabled
    />
  </Container>
);

export default Statistic;
