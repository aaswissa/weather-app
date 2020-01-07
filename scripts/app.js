const cityForm = document.querySelector('form')
const card = document.querySelector('.card')
const details = document.querySelector('.details')
const time = document.querySelector('img.time')
const icon = document.querySelector('.icon img')
const forecast = new Forecast()

const updateUI = (data) => {

  const { location, weather } = data
  
  details.innerHTML = 
    `<h5 class="my-3">${location.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-4 my-4">
    <span>${Math.round(weather.Temperature.Metric.Value)}</span>
    <span>&deg;C</span>
    </div>`
        
  const iconSource = `img/icons/${weather.WeatherIcon}.svg`
  icon.setAttribute('src', iconSource)

  let timeSource = null
  weather.IsDayTime ? timeSource = 'img/day.svg' : timeSource = 'img/night.svg'
  time.setAttribute('src', timeSource)

  card.classList.contains('d-none') ? card.classList.remove('d-none') : null
}

cityForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const city = cityForm.city.value.trim()
  cityForm.reset()

  localStorage.city = city

  forecast.updateCity(city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err))
})

if (localStorage.city) {
  forecast.updateCity(localStorage.city)
    .then((data) => updateUI(data))
    .catch((err) => console.log(err))
}

forecast.getCity()
  .then((data) => {
    return forecast.getWeather(data.Key)
  })
  .then((data) => console.log(data))
  .catch((err) => console.log('rejected', err.message))


  function algosearch() {
    places({
      appId: 'pl2VD406Q1Z4',
      apiKey: '18797bd8e1b23beed2316c561b2458f7',
      container: document.querySelector('#city'),
      templates: {
        value: function(suggestion) {
          return suggestion.name;
        }
      }
    }).configure({
      type: 'city',
      aroundLatLngViaIP: false,
    });
  }
  algosearch();