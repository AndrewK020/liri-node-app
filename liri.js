var SpotifySearch = require("./javascript/spotify");
var BandInTown = require("./javascript/bandsInTown");
var Omdb = require("./javascript/omdb");

var type = process.argv.splice(2,1).join();
var term = process.argv.slice(2).join(" ");




var songSearch = new SpotifySearch();
var eventSearch = new BandInTown();
var omdbSearch = new Omdb();

//songSearch.spotifySearch(term);
//eventSearch.eventSearch(term);
omdbSearch.movieSearch(term);