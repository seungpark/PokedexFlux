var ToyIndexItem = React.createClass({

  mixins: [ReactRouter.History],

  _handleDivClick: function (e) {
    e.preventDefault();
    this.history.pushState(null, "/pokemon/" + this.props.toy.pokemon_id + "/toys/" + this.props.toy.id);
  },

  render: function () {
    return (
      <div className="toy-list-item" onClick={this._handleDivClick}>
        <h3>Toy: {this.props.toy.name}</h3>
      </div>
    );
  }


});
