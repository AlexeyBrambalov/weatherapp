//Init weather class
const weather = new Weather("London", "uk");

//Init UI

const ui = new UI();

weather
  .getWeather()
  .then(results => {
    console.log(results);
    ui.paint(results);
  })
  .catch(err => console.log(err));
