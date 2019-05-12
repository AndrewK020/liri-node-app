var axios = require("axios");

class Omdb {
    movieSearch(title) {
        if(title === "") {
            title = "Mr. Nobody";
        }
        axios.get("http://www.omdbapi.com/?&y=&plot=short&apikey=trilogy", {
            params: {
                t: title
            }
        }).then(
            function(response) {
                function printInfo(result) {
                    console.log("\ntitle: " + result.title);
                    console.log("release year: " + result.year);
                    console.log("imdb rating " + result.imdbRating);
                    console.log("rotten tomatoes rating: " + result.rottenRating);
                    console.log("country: " + result.country);
                    console.log("language: " + result.language);
                    console.log("plot: " + result.plot);
                    console.log("actors: " + result.actors + "\n");
                }
                
                var result = {
                    title: response.data.Title,
                    year: response.data.Year,
                    imdbRating: response.data.imdbRating,
                    rottenRating: response.data.Ratings[1].Value,
                    country: response.data.Country,
                    language: response.data.Language,
                    plot: response.data.Plot,
                    actors: response.data.Actors
                }
                printInfo(result);
            }
        );
    }
}

module.exports = Omdb;