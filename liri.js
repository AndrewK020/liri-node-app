var SpotifySearch = require("./spotify");

var type = process.argv.splice(2,1).join();
var term = process.argv.slice(2).join(" ");




var songSearch = new SpotifySearch();

songSearch.spotifySearch(term);