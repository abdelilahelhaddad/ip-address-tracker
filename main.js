//Get Current IP
let myIP = "";

fetch("https://api.ipify.org/?format=json")
  .then(res => res.json())
  .then(data => {
    myIP = data.ip;
  });

const geolocation = new Geolocation(myIP);
const ui = new UI();

document.addEventListener('DOMContentLoaded', getGeolocation);

const arrow = document.querySelector('.arrow');
arrow.addEventListener("click", () => {
  const ipAddress = document.querySelector('#ipAddress').value;
  geolocation.changeGeolocation(ipAddress);
  getGeolocation();
})

function getGeolocation() {
  geolocation.getGeolocation()
    .then(results => {
      ui.displayGeo(results);
    })
    .catch(err => console.log(err));
}

const getLatt =
  geolocation.getGeolocation()
  .then(results => {
    return results.location.lat;
  })

// const Latt = () => {
//   getLatt.then((latt) => {
//     return latt;
//   });
// };

const Latt = async () => {
  const a = await getLatt;
  return a
};

const MyLat = Latt();

const getLng =
  geolocation.getGeolocation()
  .then(results => {
    return results.location.lng;
  })

// const Lng = () => {
//   getLng.then((lng) => {
//     return lng
//   });
// };

const Lng = async () => {
  const b = await getLng;
  return b
};

const MyLng = Lng();

//Setting up the map
var map = L.map('map').setView([MyLat, MyLng], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  id: 'mapbox/streets-v11',
  accessToken: 'pk.eyJ1Ijoia2lyaXRvbXNhbyIsImEiOiJja3BmZWVsaWMwbTd5MnBxdDB5ejB3dmxsIn0.IuRYNs2jaCaXkI9pONRrTA'
}).addTo(map);

//Add SVG marker
var greenIcon = L.icon({
  iconUrl: './images/icon-location.svg',
  iconSize: [46, 56], // size of the icon
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
});

L.marker([MyLat, MyLng], {
  icon: greenIcon
}).addTo(map);