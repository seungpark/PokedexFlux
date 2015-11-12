//not IIFE, but still call functions same way
//what is convention?

PokemonStore = $.extend({}, EventEmitter.prototype, {

  POKEMONS_INDEX_CHANGE_EVENT: "change",

  POKEMON_DETAIL_CHANGE_EVENT: "pokemon detail change",

  _pokemons: [],

  _pokemonDetail: {},

  all: function () {
    return this._pokemons.slice();
  },

  getPokemonDetail: function () {
    return this._pokemonDetail;
  },

  addPokemonsIndexChangeListener: function (callback) {
    this.on(PokemonStore.POKEMONS_INDEX_CHANGE_EVENT, callback);
  },

  removePokemonsIndexChangeListener: function (callback) {
    this.removeListener(PokemonStore.POKEMONS_INDEX_CHANGE_EVENT, callback);
  },

  addPokemonDetailChangeListener: function (callback) {
    this.on(PokemonStore.POKEMON_DETAIL_CHANGE_EVENT, callback);
  },

  removePokemonDetailChangeListener: function (callback) {
    this.removeListener(PokemonStore.POKEMON_DETAIL_CHANGE_EVENT, callback);
  },

  resetPokemons: function (pokemons) {
    this._pokemons = pokemons;
  },

  resetPokemonDetail: function (pokemon) {
    this._pokemonDetail = pokemon;
  },

  find: function (id) {
    return this._pokemons.find(function(pokemon) {
      return pokemon.id === id;
    });
  },


  appDispatcherId: AppDispatcher.register(function(payload) {

    switch (payload.actionType) {
      case PokemonConstants.POKEMONS_RECEIVED:
        PokemonStore.resetPokemons(payload.pokemons);
        PokemonStore.emit(PokemonStore.POKEMONS_INDEX_CHANGE_EVENT);
        break;
      case PokemonConstants.POKEMON_RECEIVED:
        PokemonStore.resetPokemonDetail(payload.pokemon);
        PokemonStore.emit(PokemonStore.POKEMON_DETAIL_CHANGE_EVENT);
        break;
    }
  })



});
