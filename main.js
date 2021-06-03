const geolocation = new Geolocation('8.8.8.8');
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