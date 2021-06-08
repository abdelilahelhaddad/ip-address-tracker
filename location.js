class Geolocation {
  constructor(ip) {
    this.apiKey = 'at_6z09DqZZYfNVzJKlvOJDzatwNS5CR';
    this.ip = ip;
  }

  async getGeolocation() {
    const response = await fetch(`https://geo.ipify.org/api/v1?apiKey=${this.apiKey}&ipAddress=${this.ip}`);

    const responseData = await response.json();
    return responseData
  }

  changeGeolocation(ip) {
    this.ip = ip;
  }
}