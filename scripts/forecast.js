class Forecast {
  constructor() {
    this.key = '3NNqZfAitBdhi1CGVjzveCTwKJdBmw2F'
    this.weatherURI = 'https://dataservice.accuweather.com/currentconditions/v1/'
    this.cityURI = 'https://dataservice.accuweather.com/locations/v1/cities/search'
  }
  async updateCity(city) {
    const location = await this.getCity(city)
    const weather = await this.getWeather(location.Key)
  
    return { location, weather }
  }
  async getCity(city) {
    const base = this.cityURI
    const query = `?apikey=${this.key}&q=${city}`
  
    const response = await fetch(base + query)
    const data = await response.json()
  
    return data[0]
  }
  async getWeather(city) {
    const base = this.weatherURI
    const query = `${city}?apikey=${this.key}`
  
    const response = await fetch(base + query)
    const data = await response.json()
  
    return data[0]
  }
}


