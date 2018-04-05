var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Users extends React.Component {
  render() {
    var friends = this.props.list.filter(function(user) {
      return user.friend === true;
    });

    var nonFriends = this.props.list.filter(function(user) {
      return user.friend !== true;
    });

    return (
      <div>
        <h1>Friends</h1>
        <ul>
          {friends.map(function(user) {
            return (
              <li key={user.name}>
                {user.name}
              </li>
            )
          })}
        </ul>

        <hr />

        <h1>Non Friends</h1>
        <ul>
          {nonFriends.map(function (user) {
            return (
              <li key={user.name}>
                {user.name}
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

// We can be more specific with PropTypes using PropTypes.shape
Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    friend: PropTypes.bool.isRequired,
  })),
}

class Badge extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.img}
          alt='Avatar'
          style={{width: 100, height: 100}}
        />
        <h1>Name: {this.props.name}</h1>
        <h3>username: {this.props.username}</h3>
      </div>
    )
  }
}

Badge.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
}

// ReactDOM.render(
//   <Badge 
//     name="Jigyasu Arya"
//     username="lastnamearya"
//     img={"https://avatars3.githubusercontent.com/u/6664187?s=400&u=e56c1cfc515eb5e093bb9b0437765c5af86850a8&v=4"}
//   />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Users list = {[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false }
  ]}
  />,
  document.getElementById('app')
);
