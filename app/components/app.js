var React = require('react');
var Popular = require('./Popular');

class App extends React.Component{
  render(){
    return (
      <div>
        <Popular />
      </div>
    )
  }
}

// This is called common.js
module.exports = App;