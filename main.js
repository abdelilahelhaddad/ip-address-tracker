//Setting up the map
var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  id: 'mapbox/streets-v11',
  tileSize: 512,
  zoomOffset: -1,
  accessToken: 'pk.eyJ1Ijoia2lyaXRvbXNhbyIsImEiOiJja3BmZWVsaWMwbTd5MnBxdDB5ejB3dmxsIn0.IuRYNs2jaCaXkI9pONRrTA'
}).addTo(map);

//Add SVG marker
var greenIcon = L.icon({
  iconUrl: './images/icon-location.svg',

  iconSize: [46, 56], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
});

L.marker([51.5, -0.09], {
  icon: greenIcon
}).addTo(map);