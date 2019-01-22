// @flow
import React from 'react';
import styled from 'styled-components/native';
import { Colors } from 'assets';
import type { Slider as Props } from 'types';

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  position: relative;
  height: 45px;
  flex: 1;
  align-items: center;
`;

const Left = styled.View`
  background-color: ${Colors.Blue};
  height: 15px;
  border-radius: 5px;
`;

const Right = styled.View`
  background-color: ${Colors.Gray};
  height: 15px;
  border-radius: 5px;
`;

const Thumb = styled.View`
  background-color: ${Colors.White};
  border-width: 1px;
  border-radius: 5px;
  border-color: ${Colors.Gray};
  position: absolute;
  width: 65px;
  height: 30px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  color: black;
  font-weight: bold;
`;

type State = {
  left: number,
  right: number,
  width: number,
};

class Slider extends React.Component<Props, State> {
  constructor(props: any) {
    super(props);
    this.state = {
      left: 0,
      right: 0,
      width: 0,
    };
  }

  onLayout = ({ nativeEvent: { layout: { width } } }: any) => {
    const { value } = this.props;
    const left = width / 100 * value;
    const right = width - left;
    this.setState({ left, right, width });
  }

  // eslint-disable-next-line
  UNSAFE_componentWillReceiveProps(next: any) {
    const { value } = this.props;
    if (value !== next.value) {
      const { width } = this.state;
      const left = width / 100 * next.value;
      const right = width - left;
      this.setState({ left, right });
    }
  }

  render() {
    const { value } = this.props;
    const { left, right } = this.state;
    return (
      <Container onLayout={this.onLayout}>
        <Left style={{ width: left }}/>
        <Right style={{ width: right }}/>
        <Thumb style={{ left: left - 32.5 }}>
          <Text>{value || 0}</Text>
        </Thumb>
      </Container>
    );
  }
}

export default Slider;
