var axios = require('axios');

var id = "3b925c08aab40ac38d05";
var sec = "31be1b1285e20f238e8777adb3bc11907739a47b";
var params = "?client_id=" + id + "&client_secret=" + sec;

// Get User Profile

function getProfile (username) {
  // Axios will return a promise after that, this request will get us an object
  return axios.get('https://api.github.com/users' + username + params)
    // passing return data object ~ user to get filtered data (property)
    .then(function(user){
      // Formatting data before we pass it back
      return user.data;
    });
}

// Get Repos

function getRepos (username) {
  return axios.get('https://api.github.com/users' + username + '/repos' + params + '&per_page=100')
}

// Get Stars Count

function getStarCount (repos) {
  return repos.data.reduce(function (count, repo) {
    return count + repo.stargazers_count;
  }, 0);
}



module.exports = {
  // passing array of two players, not going to return the info about the player, but also the winner
  battle: function(players){ 

  }, 

  fetchPopularRepos: function (language) {
    var encodedURI = window.encodeURI('https://api.github.com/search/repositories?q=stars:>1+language:'+ language + '&sort=stars&order=desc&type=Repositories');

    return axios.get(encodedURI)
      .then(function (response) {
        return response.data.items;
      });
  }
};