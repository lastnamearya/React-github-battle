var React = require('react');
// Package to parse query string for us
var queryString = require('query-string');
var api = require('../utils/api');

class Results extends React.Component {
  
  componentDidMount () {
    var players = queryString.parse(this.props.location.search);
    
    // We're going to pass it as an array
    api.battle([
      players.playerOneName,
      players.playerTwoName
    ]).then(function (results) {
      console.log(results);
    });
  }
  
  
  render() {
    return (
      <div>Results</div>
    )
  } 
}

module.exports = Results; 