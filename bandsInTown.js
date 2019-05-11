var axios = require("axios");
var moment = require("moment");

var artist = "khalid"
axios.get("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
.then(
  function(response) {
    var event = response.data[0];
    var result = {
        venueName: event.venue.name,
        location: event.venue.city + ", " + event.venue.region,
        date: moment(event.datetime).format("MM-DD-YYYY")
    }

    console.log(result);
  }
);
