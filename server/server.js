var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyCrR727Z0UE2OOSZSmbeAnOG4vK1GWjtzc'
  });

  googleMapsClient.geocode({
    address: '1600 Amphitheatre Parkway, Mountain View, CA'
  }, function(err, response) {
    if (!err) {
      console.log(response.json.results);
    }
  });