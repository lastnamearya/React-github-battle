var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');

class Badge extends React.Component {
  render(){
    return (
      <div>
        <img 
          src={this.props.img}
          alt="Avatar"
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

class Users extends React.Component {
  render(){
    var friends = this.props.list.filter(function(user) {
      return user.friend === true;
    });

    var nonfriends = this.props.list.filter(function(user) {
      return user.friend !== true;
    });

    return(
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
          {nonfriends.map(function(user){
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

Users.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object),
}

// ReactDOM.render(
//   <Badge 
//     name="Jigyasu Arya"
//     username="lastnamearya"
//     img="https://avatars1.githubusercontent.com/u/6664187?s=460&v=4"
//   />,
//   document.getElementById('app')
// );

ReactDOM.render(
  <Users list={[
    { name: 'Tyler', friend: true },
    { name: 'Ryan', friend: true },
    { name: 'Michael', friend: false },
    { name: 'Mikenzi', friend: false },
    { name: 'Jessica', friend: true },
    { name: 'Dan', friend: false } ]} 
  />,
  document.getElementById('app')
);