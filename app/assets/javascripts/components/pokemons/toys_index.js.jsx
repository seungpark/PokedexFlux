var ToysIndex = React.createClass ({

  getInitialState: function () {
    return {toys: ToyStore.all()};
  },

  componentDidMount: function () {
    PokemonStore.addPokemonsIndexChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    PokemonStore.removePokemonsIndexChangeListener(this._onChange);
  },

  _onChange: function () {
    this.setState({ toys: ToyStore.all() });
  },

  render: function () {
    return (
      <ul>
        {this.props.toys.map(function (toy) {
          return (
            <li className="toy" key={toy.id}>
              <ToyIndexItem toy={toy}/>
            </li>
          );
        })}
      </ul>
    );
  }

});
