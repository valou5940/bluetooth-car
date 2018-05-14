var mapboxgl = require('mapbox-gl/dist/mapbox-gl.js');

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsb3U1OTQwIiwiYSI6ImNqZ3l4ZDRmcjBrM2kycXF4dHI3Nm1oZDcifQ.AKZ20AefriTriLTCSJJlfQ';
var map = new mapboxgl.Map({
  container: document.getElementById(map),
  style: 'mapbox://styles/mapbox/streets-v10'
});
