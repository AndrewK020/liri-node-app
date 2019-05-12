var axios = require("axios");
var moment = require("moment");

class BandInTown {
    eventSearch(artist) {
        if(artist === "") {
            artist = "Khalid";
        }

        axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(
        function(response) {
            function printInfo(result) {
                console.log("\nvenue name: " + result.venueName);
                console.log("location: " + result.location);
                console.log("date: " + result.date + "\n");
            }

            var event = response.data[0];
            var result = {
                venueName: event.venue.name,
                location: event.venue.city + ", " + event.venue.region,
                date: moment(event.datetime).format("MM-DD-YYYY")
            }
            printInfo(result);
            }
        );
    }
    
}
module.exports = BandInTown;