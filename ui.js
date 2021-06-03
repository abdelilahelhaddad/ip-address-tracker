class UI {
  constructor() {
    this.getIp = document.querySelector('.getIp');
    this.getLocation = document.querySelector('.getLocation');
    this.getTimezone = document.querySelector('.getTimezone');
    this.getIsp = document.querySelector('.getIsp');
  }

  displayGeo(geo) {
    this.getIp.textContent = geo.ip;
    this.getLocation.textContent = geo.location.region;
    this.getTimezone.textContent = 'UTC' + geo.location.timezone;
    this.getIsp.textContent = geo.isp;
  }
}