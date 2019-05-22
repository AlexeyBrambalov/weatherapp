//Init weather class
const weather = new Weather("London", "uk");

//Init UI

const ui = new UI();

// Get weather on DOM load

document.addEventListener("DOMContentLoaded", getWeather);

weather
  .getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
