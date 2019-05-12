var SpotifySearch = require("./spotify");
var BandInTown = require("./bandsInTown");

var type = process.argv.splice(2,1).join();
var term = process.argv.slice(2).join(" ");




var songSearch = new SpotifySearch();
var eventSearch = new BandInTown();
//songSearch.spotifySearch(term);
eventSearch.eventSearch(term);