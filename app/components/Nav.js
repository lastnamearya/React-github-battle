// Always need to require React
var React = require('react');
var NavLink = require('react-router-dom').NavLink;

// Can make our Router Stateless Function Component, because it didn't have any state and not going to have any life cycle method

function Nav(){

  return(
    <ul className="nav">

      <li>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" to="/battle">
          Battle
        </NavLink>
      </li>

      <li>
        <NavLink activeClassName="active" to="/popular">
          Popular
        </NavLink>
      </li>

    </ul>
  )
}

module.exports = Nav;