/**
 * @jsx Reac.DOM
 */

var React = require('react/addons');

var ReactButton = React.createClass({
  getInitialState: function() {
    return {
      selected: true
    }
  },
  handleClick: function() {
    event.preventDefault();
    this.props.callback(this.state.selected, this.props);

    var newSate = !this.state.selected;

    this.setState({
      selected: newSate
    });
  },

  render: function() {
    return (
      <div className="vary__button">
        <button ref="current" onClick={ this.handleClick }>{ this.props.text}</button>
      </div>
    );
  }
});

module.exports.ReactButton = ReactButton;
