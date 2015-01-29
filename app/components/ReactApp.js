/**
 * @jsx React.DOM
 */

var React       = require('react/addons');
var ReactButton = React.createFactory(require('./ReactButton').ReactButton);
var Griddle     = React.createFactory(require('griddle-react'));

var fakeData   = require('../data/fakeData.js').fakeData;
var columnMeta = require('../data/columnMeta.js').columnMeta;

var ReactApp = React.createClass({
  componentDidMount: function() {
    console.log("Loaded");
  },

  resultsPerPage: function() {
    return 100;
  },

  render: function() {
    return (
      <div id='table-area'>
        <Griddle results={fakeData} columnMetadata={columnMeta} resultsPerPage={resultsPerPage} tableClassname="table" />
      </div>
    );
  }
});

module.exports.ReactApp = ReactApp;
