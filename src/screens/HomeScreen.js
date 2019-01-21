// @flow
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { withHeader } from 'compose';
import { SearchBox, Card } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemons } from 'store/actions';

import type { Navigation } from 'types';

type Props = {
  navigation: Navigation;
  fetchPokemons: Function,
  Pokemon: {
    pokemons: Array<{ name: string }>,
  },
};

type State = {

};

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 10,
    marginVertical: 5,
  },
  column: {
    justifyContent: 'space-between',
  },
});

class HomeScreen extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.props.fetchPokemons();
  }

  // eslint-disable-next-line
  onSearch = (value: string) => {
    // console.log(value);
  }

  renderPokemon = ({ item: pokemon }) => {
    const { pokemons } = this.props.Pokemon;
    const id = pokemons.findIndex(p => p.name === pokemon.name) + 1;
    const uri = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
    return (
      <Card name={pokemon.name} uri={uri} />
    );
  };

  render() {
    const { pokemons } = this.props.Pokemon;
    return (
      <View>
        <SearchBox onSearch={this.onSearch} />
        <FlatList
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.column}
          data={pokemons}
          renderItem={this.renderPokemon}
          numColumns={3}
          keyExtractor={pokemon => pokemon.name}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({ ...state });

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchPokemons,
}, dispatch);

export default withHeader(connect(mapStateToProps, mapDispatchToProps)(HomeScreen));
