var axios = require('axios');

var id = "e06e8bb1440c9c7dbd81";
var sec = "0ce083ba92dfc1212af5e42f52d6477f707dc0fa";
var params = "?client_id=" + id + "&client_secret=" + sec;

// Get User Profile

function getProfile (username) {
  // Axios will return a promise after that, this request will get us an object
  return axios.get('https://api.github.com/users/' + username + params)
    // passing return data object ~ user to get filtered data (property)
    .then(function(user){
      // Formatting data before we pass it back
      return user.data;
    });
}

// Get Repos

function getRepos (username) {
  return axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
}

// Get Stars Count

function getStarCount (repos) {
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}

// Calculate Score

function calculateScore (profile, repos) {
  var followers = profile.followers;
  var totalStars = getStarCount(repos);

  return (followers * 3) + totalStars;
}

// Handle Error ~ if there's error with our API request

function handleError (error) {
  console.warn(error);
  return null;
}

// Composing functions into one function

function getUserData (player) {
  // axios.all can take array of promises 
  return axios.all([
    getProfile(player),
    getRepos(player)
  ]).then(function (data) {
    var profile = data[0];
    var repos = data[1];

    // Return an object with the user information  
    return {
      profile: profile,
      score: calculateScore(profile, repos)
    }
  })
}

// Sort Players ~ passing an array of players

function sortPlayers (players) {
  // Return a brand new array (sorted by calculateScore)
  return players.sort(function (a, b) {
    return b.score - a.score;
  });
}


module.exports = {
  // passing array of two players, not going to return the info about the player, but also the winner
  battle: function(players){ 
    return axios.all(players.map(getUserData))
      .then(sortPlayers)
      .catch(handleError)
  }, 

  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};