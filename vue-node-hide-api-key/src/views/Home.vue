<template>
  <div class="home">
    <h1>Weather App</h1>
    <div class="enter-city">
      <input @keyup.enter="getWeather" v-model="data.city" type="text" placeholder="Enter a city">
    </div>
    <div v-if="data.weather" class="weather">
      <h1>{{ Math.round(data.weather.main.temp)}}&deg;</h1>
      <h2>{{data.weather.weather[0].main}}</h2>
      <h3>{{data.weather.weather[0].description}}</h3>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue"
import axios from "axios"
export default {
  setup() {
    let data = reactive({
      city: 'london',
      weather: null
    })

    const apiUrl = 'http://localhost:3000/'
    const apiKey = '7072edc8ba7df4103c3a2efc6061be00'

    const getWeather = () => {
      axios(`${apiUrl}?units=metric&q=${data.city}&appid=${apiKey}`).then(response => {
        data.weather = response.data
        console.log(data.weather)
      })
    }

    return {
      data,
      getWeather,
    }
  }
}
</script>

<style lang="sass">
.enter-city
  input
    font-size: 40px
    outline: none
    border-radius: 999px
    border: 1px solid lightgray
.weather
  margin-top: 10px
  h1
    font-size: 80px
  h1, h2, h3
   margin: 0
</style>

