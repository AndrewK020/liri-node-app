var SpotifySearch = require("./javascript/spotify");
var BandInTown = require("./javascript/bandsInTown");
var Omdb = require("./javascript/omdb");

var type = process.argv.splice(2,1).join();
var term = process.argv.slice(2).join(" ");

switch (type) {
    case "concert-this":
        var eventSearch = new BandInTown();
        eventSearch.eventSearch(term);
        break;
    case "spotify-this-song":
        var songSearch = new SpotifySearch();
        songSearch.spotifySearch(term);
        break;
    case "movie-this":
        var omdbSearch = new Omdb();
        omdbSearch.movieSearch(term);
        break;
    default:
        console.log("invalid search request\nplease try:\n'concert-this'\n'spotify-this-song'\n'movie-this'\nfollowed by your search term");
        break;
}