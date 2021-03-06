require("dotenv").config();

const Spotify = require('node-spotify-api');
const keys = require("./keys.js");

class SpotifySearch {
    constructor() {
        this.keys = keys
    }
    spotifySearch(searchTerm) {
        if(searchTerm === "") {
            searchTerm = "The Sign";
        }

        function setArtists(data) {
            var artists = [];
            for(var i = 0; i < data.tracks.items[0].artists.length; i++) {
                artists.push(data.tracks.items[0].artists[i].name);
            }
            return artists;
        }

        function printInfo(result) {
            console.log("\nartist: " + result.artist.join(" "));
            console.log("song name: " + result.songName);
            console.log("song spotify link: " + result.songLink);
            console.log("album name: " + result.albumName + "\n");
        }
    
        var spotify = new Spotify(this.keys.spotify);
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
            printInfo(result);
        });
      }
}

module.exports = SpotifySearch;