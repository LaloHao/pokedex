// @flow
import React from 'react';
import styled from 'styled-components/native';
import { View } from 'react-native';

import { withHeader } from 'compose';
import { SearchBox, Card } from 'components';

import type { Navigation } from 'types';

type Props = {
  navigation: Navigation;
};

type State = {

};

const List = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const pokemons = [
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png',
  },
  {
    name: 'Bulbasaur',
    uri: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png',
  },
];

class HomeScreen extends React.Component<Props, State> {
  // eslint-disable-next-line
  onSearch = (value: string) => {
    // console.log(value);
  }

  render() {
    return (
      <View>
        <SearchBox onSearch={this.onSearch} />
        <List>
          {pokemons.map(pokemon => (
            <Card key={pokemon.name} name={pokemon.name} uri={pokemon.uri} />
          ))}
        </List>
      </View>
    );
  }
}

export default withHeader(HomeScreen);
