var React = require('react');
var Popular = require('./Popular');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
// New Component that React Router gives us ~ Switch
var Switch = ReactRouter.Switch;
var Nav = require('./Nav');
var Home = require('./Home');
var Battle = require('./Battle');

class App extends React.Component{
  render(){
    return (
      <Router>
        <div className="container">
          <Nav />
          {/* Instead of rendering all active routes, Switch will render only one specific Route */}
          <Switch>
            <Route exact path='/' component={Home} />
            {/* added exact to battle because it has some default view associated */}
            <Route exact path='/battle' component={Battle} />
            <Route path='/popular' component={Popular} />
            {/* If none of above component is active */}
            <Route render={function() {
              return <p>Not Found</p>
            }} />
          </Switch>
        </div>
      </Router>
    )
  }
}

// This is called common.js
module.exports = App;