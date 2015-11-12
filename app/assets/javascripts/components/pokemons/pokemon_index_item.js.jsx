var PokemonIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  render: function () {
    return (
      <li className="poke-list-item" onClick={this._handleLiClick}>
        <h3>{this.props.pokemon.name}</h3>
        <p>{this.props.pokemon.poke_type}</p>
      </li>
    );
  },

  _handleLiClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, '/pokemon/' + this.props.pokemon.id);
  }
});
