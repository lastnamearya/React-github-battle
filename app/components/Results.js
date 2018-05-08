var React = require('react');
// Package to parse query string for us
var queryString = require('query-string');

class Results extends React.Component {
  render() {
    console.log(this.props);
    var players = queryString.parse(this.props.location.search);
    console.log(players);
    return (
      <div>Results</div>
    )
  }
}

module.exports = Results; 