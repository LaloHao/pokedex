// @flow
import React from 'react';
import type { Node } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Colors } from 'assets';
import { CachedImage as Image } from 'react-native-cached-image';
import { withHeader } from 'compose';
import { Statistic } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemon } from 'store/actions';

import type { Navigation, Pokemon } from 'types';

const Container = styled.View`
  background-color: ${Colors.White};
  padding: 10px;
  flex-direction: column;
  align-items: center;
  width: 90%;
  align-self: center;
  margin: 15px 0;
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

type Props = {
  fetchPokemon: Function,
  navigation: Navigation,
  Pokemon: {
    pokemons: Array<Pokemon>,
  }
};

class DetailScreen extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.props.fetchPokemon(this.props.navigation.state.params.name);
  }

  render() {
    const { name } = this.props.navigation.state.params;
    const pokemon: any = this.props.Pokemon.pokemons.find(p => p.name === name);
    return (
      <ScrollView>
        <Container>
          <AttributesContainer>
            <Image
              source={{ uri: pokemon.uri }}
              style={{
                width: 110,
                height: 110,
              }}
            />
            <Attributes>
              <Id>#{pokemon.id}</Id>
              <Name>{pokemon.name}</Name>
              <Attribute attribute="Height" value={`${pokemon.height || 0}m`} />
              <Attribute attribute="Weight" value={`${pokemon.weight || 0}kg`} />
            </Attributes>
          </AttributesContainer>
          <Text>
            {pokemon.description}
          </Text>
          <Statistics>
            <Statistic name="HP" value={pokemon.hp} />
            <Statistic name="Attack" value={pokemon.attack} />
            <Statistic name="Defense" value={pokemon.defense} />
            <Statistic name="Speed" value={pokemon.speed} />
            <Statistic name="Sp Atk" value={pokemon['special-attack']} />
            <Statistic name="Sp Def" value={pokemon['special-defense']} />
          </Statistics>
        </Container>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemon,
}, dispatch);

export default withHeader(connect(mapStateToProps, mapDispatchToProps)(DetailScreen));
