// Creating our initial map object
// We set the longitude, latitude, and the starting zoom level
// This gets inserted into the div with an id of 'map'
var myMap = L.map("map", {
  center: [38.90287, -77.02742],
  zoom: 2
});

// Adding a tile layer (the background map image) to our map
// We use the addTo method to add objects to our map
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Dart and the GW Class | Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 24,
  // type of map
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

link = worldjson.js
//Connect to 
// Our style object
var mapStyle = {
  color: "white",
  fillColor: "pink",
  fillOpacity: 0.5,
  weight: 1.5
};

// Grabbing our GeoJSON data..
d3.json(link, function(data) {
  // Creating a geoJSON layer with the retrieved data
  L.geoJson(data, {
    // Passing in our style object
    style: mapStyle
  }).addTo(map);
});
