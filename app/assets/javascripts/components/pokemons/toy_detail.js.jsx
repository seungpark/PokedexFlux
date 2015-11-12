var ToyDetail = React.createClass ({

  _toys: [],

  getInitialState: function () {
    return {toy: this.getStateFromStore()};
  },

  getStateFromStore: function () {
    var id = parseInt(this.props.params.toyId);
    return ToyStore.find(id);
  },

  _onChange: function () {
    this.setState({toy: ToyStore.getToyDetail() });
  },

  componentDidMount: function () {
    ToyStore.addToyDetailChangeListener(this._onChange);
  },

  componentWillUnmount: function () {
    ToyStore.removeToyDetailChangeListener(this._onChange);
  },

  componentWillReceiveProps: function (props) {
    this.setState({toy: ToyStore.find(parseInt(props.params.toyId))});
  },

  render: function () {
    var toy = this.state.toy,
        toyElement;

    if (toy) {
      toyElement = (
        <ul>
          <li>Name: {toy.name}</li>
          <li>Price: {toy.price}</li>
          <li>Happiness: {toy.happiness}</li>
          <img src={toy.image_url} />
        </ul>
      );
    }
    return (
      <div className="detail">
        {toyElement}
      </div>
    );
  }
});
