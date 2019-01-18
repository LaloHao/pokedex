// @flow
import React from 'react';
import { TextInput } from 'react-native';

import styled from 'styled-components/native';
import type { Input as Props } from 'types';

import { Colors } from 'assets';

const Container = styled.View`
  background-color: ${Colors.Gray};
  border-radius: 5px;
  padding: 15px;
`;

const Input = (props: Props) => (
  <Container>
    <TextInput {...props} />
  </Container>
);

export default Input;
