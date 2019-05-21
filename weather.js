class Weather {
  constructor(city, state) {
    this.apiKey = "a0dc2a088fc608f4afc8cd2052f1a962";
    this.city = city;
    this.state = state;
  }
  //Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city},${
        this.state
      }&units=metric&appid=${this.apiKey}`
    );
    const responseData = await response.json();

    return responseData;
  }

  //Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}
