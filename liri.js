require("dotenv").config();

var Spotify = require('node-spotify-api');
var keys = require("./keys.js");

var type = process.argv.splice(2,1).join();
var term = process.argv.slice(2).join(" ");



  function spotifySearch(searchTerm) {

    function setArtists(data) {
        var artists = [];
        for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
            artists.push(data.tracks.items[0].artists[i].name);
        }
        return artists;
    }

    var spotify = new Spotify(keys.spotify);

    spotify.search({ type: 'track', query: searchTerm }, function(err, data) {
        if (err) {
        return console.log('Error occurred: ' + err);
        }
        var result = {
            artist: [],
            songName: data.tracks.items[0].name,
            songLink: data.tracks.items[0].external_urls.spotify,
            albumName: data.tracks.items[0].album.name
        }
        result.artist = setArtists(data);
        console.log(result);
    });
  }



  spotifySearch(term);