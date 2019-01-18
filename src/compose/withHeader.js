// @flow
import React from 'react';
import { View } from 'react-native';
import { Header } from 'components';

import type { ComponentType } from 'react';
import type { Header as Props } from 'types';

// eslint-disable-next-line react/display-name
const withHeader = (Component: ComponentType<Props>) => (props: Props) => (
  <View>
    <Header navigation={props.navigation} />
    <Component {...props} />
  </View>
);

export default withHeader;
