var PokemonDetail = React.createClass({

  getInitialState: function () {
    return {pokemon: this.getStateFromStore()};
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.pokemonId);
    return PokemonStore.find(id);
  },

  componentWillReceiveProps: function (props) {
    ApiUtil.fetchOnePokemon(parseInt(props.params.pokemonId));
  },

  componentDidMount:function() {
    PokemonStore.addPokemonDetailChangeListener(this._onChange);
    ApiUtil.fetchOnePokemon(parseInt(this.props.params.pokemonId));
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonDetailChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ pokemon: PokemonStore.getPokemonDetail() });
  },

  render: function () {
    var pokemon = this.state.pokemon;
    var pokemonElement;
    var toysElement;
    if (pokemon) {
      pokemonElement = (
        <div className="detail">
          <h3>Name: {pokemon.name}</h3>
          <img src={pokemon.image_url}/>
          <ul>
            <li>Attack: {pokemon.attack}</li>
            <li>Defense: {pokemon.defense}</li>
            <li>Poke Type: {pokemon.poke_type}</li>
            <li>Moves: <ul>
              {pokemon.moves.map(function (move) {
                return(<li key={move}>{move}</li>);
              })}
            </ul>
            </li>
          </ul>
        </div>
      );
    }

    if (pokemon && pokemon.toys) {
      toysElement =
        <div className="toys-index">
          <ToysIndex toys={pokemon.toys}/>
        </div>
      ;
    }

    return (
      <div>
      <div>{pokemonElement}</div>
      <div>{toysElement}</div>
      </div>
    );
  }
});
