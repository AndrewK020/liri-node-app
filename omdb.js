var axios = require("axios");

class Omdb {
    movieSearch(title) {
        axios.get("http://www.omdbapi.com/?&y=&plot=short&apikey=trilogy", {
            params: {
                t: title
            }
        }).then(
            function(response) {
                
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
                console.log(result);
            }
        );
    }
}

module.exports = Omdb;