ToyStore = $.extend({}, EventEmitter.prototype, {

  TOYS_DETAIL_CHANGE_EVENT: 'toy detail change',
  TOYS_INDEX_CHANGE_EVENT: 'toys index change',

  _toys: [],

  all: function () {
    return this._toys.slice;
  },

  addToyDetailChangeListener: function (callback) {
    this.on(ToyStore.TOYS_DETAIL_CHANGE_EVENT, callback);
  },

  removeToyDetailChangeListener: function (callback) {
    this.removeListener(ToyStore.TOYS_DETAIL_CHANGE_EVENT, callback);
  },

  resetToys: function (toys) {
    this._toys = toys;
  },


  find: function (id) {
    return this._toys.find(function(toy) {
      return toy.id === id;
    });
  },

  appDispatcherId: AppDispatcher.register(function(payload) {

    switch (payload.actionType) {
      case PokemonConstants.POKEMON_RECEIVED:
        ToyStore.resetToys(payload.pokemon.toys);
        ToyStore.emit(ToyStore.TOYS_INDEX_CHANGE_EVENT);
        break;
    }
  })
});
