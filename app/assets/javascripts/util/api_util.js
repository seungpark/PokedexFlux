window.ApiUtil = {

  fetchAllPokemons: function () {
    $.ajax({
      url: "api/pokemon",
      type: "GET",
      dataType: "JSON",
      success: function (data) {
        ApiActions.receiveAllPokemons(data);
      }
    });
  },

  fetchOnePokemon: function (id) {
    $.ajax({
      url: "api/pokemon/" + id,
      type: "GET",
      dataType: "JSON",
      success: function (data) {
        ApiActions.receiveOnePokemon(data);
      }
    });
  }
};
