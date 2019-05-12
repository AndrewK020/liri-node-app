var SpotifySearch = require("./spotify");
var BandInTown = require("./bandsInTown");
var Omdb = require("./omdb");

var type = process.argv.splice(2,1).join();
var term = process.argv.slice(2).join(" ");




var songSearch = new SpotifySearch();
var eventSearch = new BandInTown();
var omdbSearch = new Omdb();

//songSearch.spotifySearch(term);
//eventSearch.eventSearch(term);
omdbSearch.movieSearch(term);