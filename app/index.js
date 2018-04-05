var React = require('react');
var ReactDOM = require('react-dom');

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

ReactDOM.render(
  <Badge 
    name="Jigyasu Arya"
    username="lastnamearya"
    img="https://avatars3.githubusercontent.com/u/6664187?s=400&u=e56c1cfc515eb5e093bb9b0437765c5af86850a8&v=4"
  />,
  document.getElementById('app')
);