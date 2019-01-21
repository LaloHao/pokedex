// @flow
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';

import { withHeader } from 'compose';
import { SearchBox, Card } from 'components';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPokemons } from 'store/actions';

import type { Navigation } from 'types';

import { throttle } from 'lodash';

type Props = {
  navigation: Navigation;
  fetchPokemons: Function,
  Pokemon: {
    pokemons: Array<{ name: string, uri: string }>,
    isLoading: boolean,
  },
};

type State = {
  page: number,
  search: string,
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
    this.state = {
      page: 1,
      search: '',
    };
  }

  componentDidMount() {
    this.fetchPokemons();
  }

  fetchPokemons = () => {
    this.props.fetchPokemons();
    this.setState({ page: 1 });
  }

  onEndReached = throttle(() => {
    let { pokemons } = this.props.Pokemon;
    const { page, search } = this.state;
    if (search !== '') {
      // eslint-disable-next-line
      pokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id == search);
    }
    const pages = Math.ceil(pokemons.length / 50);
    if (page < pages) {
      this.setState({ page: page + 1 });
    }
  }, 500, { leading: false, trailing: true });

  onSearch = (search: string) => {
    this.setState({ search });
  }

  renderPokemon = ({ item: pokemon }) => (
    <Card name={pokemon.name} uri={pokemon.uri} />
  );

  render() {
    const { isLoading } = this.props.Pokemon;
    let { pokemons } = this.props.Pokemon;
    const { page, search } = this.state;
    if (search !== '') {
      // eslint-disable-next-line
      pokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()) || pokemon.id == search);
    }
    return (
      <View style={{ flex: 1 }}>
        <SearchBox onSearch={this.onSearch} />
        <FlatList
          style={{ flex: 1 }}
          refreshing={isLoading}
          onRefresh={this.fetchPokemons}
          contentContainerStyle={styles.list}
          columnWrapperStyle={styles.column}
          data={pokemons.slice(0, 50 * page)}
          renderItem={this.renderPokemon}
          numColumns={3}
          keyExtractor={pokemon => pokemon.name}
          onEndReachedThreshold={0.5}
          onEndReached={this.onEndReached}
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
