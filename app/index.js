var React = require('react');
var ReactDOM = require('react-dom');

// Webpack thing ~ add css to our file when everything bundles
require('./index.css');

// state
// lifecycle event
// UI

class App extends React.Component {
  render() {
    return (
      <div>
        Hello Webpack!
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);