var PokemonsIndex = React.createClass({

  getInitialState: function () {
    return {pokemons: PokemonStore.all()};
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsIndexChangeListener(this._onChange);
    ApiUtil.fetchAllPokemons();
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonsIndexChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ pokemons: PokemonStore.all() });
  },

  render: function () {
    return (
      <div className="pokemons-index">
        <ul className="pokemons-list">
          { this.state.pokemons.map( function (pokemon) {
            return(
                <PokemonIndexItem pokemon={pokemon} key={pokemon.id} />
            );
          }) }
        </ul>
      </div>
    );
  }
});
