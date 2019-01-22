// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Colors } from 'assets';
import { Slider } from 'components';
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

const Statistic = ({ name, value }: Props) => (
  <Container>
    <Text>{name}</Text>
    <Slider value={value} />
  </Container>
);

export default Statistic;
