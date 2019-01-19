// @flow
import React from 'react';
import type { Node } from 'react';
import styled from 'styled-components/native';
import { Colors } from 'assets';
import { CachedImage as Image } from 'react-native-cached-image';
import { withHeader } from 'compose';
import { Statistic } from 'components';

const Container = styled.View`
  background-color: ${Colors.White};
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width: 90%;
  align-self: center;
  margin-top: 15px;
`;

const AttributesContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const Attributes = styled.View`
  flex-direction: column;
  margin-left: 10px;
`;

const Id = styled.Text`
  font-size: 14px;
  color: ${Colors.GrayDarker};
`;

const Name = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin: 5px 0;
`;

const AttributeContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

const TextBold = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

const Text = styled.Text`
  font-size: 16px;
  text-align: center;
`;

const StatisticsContainer = styled.View`
  flex-direction: column;
`;

const StatisticsHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 15px 0;
`;

const Line = styled.View`
  flex: 1;
  background-color: ${Colors.Gray};
  height: 1px;
`;

const Attribute = ({ attribute, value }: { attribute: string, value: string}) => (
  <AttributeContainer>
    <TextBold>{attribute}: </TextBold>
    <Text>{value}</Text>
  </AttributeContainer>
);

const Statistics = ({ children }: { children: Node }) => (
  <StatisticsContainer>
    <StatisticsHeader>
      <Line />
      <Text style={{ color: Colors.GrayDarker, fontSize: 12 }}>STATISTICS</Text>
      <Line />
    </StatisticsHeader>
    {children}
  </StatisticsContainer>
);

const uri = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png';

const DetailScreen = () => (
  <Container>
    <AttributesContainer>
      <Image
        source={{ uri }}
        style={{
          width: 110,
          height: 110,
        }}
      />
      <Attributes>
        <Id>#001</Id>
        <Name>Bulbasaur</Name>
        <Attribute attribute="Height" value="0.7m" />
        <Attribute attribute="Weight" value="6.9kg" />
      </Attributes>
    </AttributesContainer>
    <Text>
      For some time after its birth, it grows by gaining nourishment from the see on its back.
    </Text>
    <Statistics>
      <Statistic name="HP" value={45} />
      <Statistic name="Attack" value={49} />
      <Statistic name="Defense" value={49} />
      <Statistic name="Speed" value={45} />
      <Statistic name="Sp Atk" value={65} />
      <Statistic name="Sp Def" value={65} />
    </Statistics>
  </Container>
);

export default withHeader(DetailScreen);
