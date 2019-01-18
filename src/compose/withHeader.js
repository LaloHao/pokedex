// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Header } from 'components';
import { Colors } from 'assets';

import type { ComponentType } from 'react';
import type { Header as Props } from 'types';

const Container = styled.View`
  background-color: ${Colors.Gray};
  flex-direction: column;
  flex: 1;
`;

// eslint-disable-next-line react/display-name
const withHeader = (Component: ComponentType<Props>) => (props: Props) => (
  <Container>
    <Header navigation={props.navigation} />
    <Component {...props} />
  </Container>
);

export default withHeader;
