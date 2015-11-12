window.ApiActions = {
  receiveAllPokemons: function (data) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMONS_RECEIVED,
      pokemons: data
    });
  },

  receiveOnePokemon: function (data) {
    AppDispatcher.dispatch({
      actionType: PokemonConstants.POKEMON_RECEIVED,
      pokemon: data
    });
  }
};
