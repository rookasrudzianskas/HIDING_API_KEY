<template>
  <div class="home">
    <h1>Weather App</h1>
    <div class="enter-city">
      <input @keyup.enter="getWeather" v-model="data.city" type="text" placeholder="Enter a city">
    </div>
    <div class="weather">
      <h1>6&deg;</h1>
      <h2>Cloudy</h2>
      <h3>Loads of clouds</h3>
    </div>
  </div>
</template>
<script>
import { reactive } from "vue"
import axios from "axios"
export default {
  setup() {
    let data = reactive({
      city: '',
      weather: null
    })

    const getWeather = () => {
      axios('http://api.openweathermap.org/data/2.5/weather?units=metric&q=london&appid=7072edc8ba7df4103c3a2efc6061be00').then(response => {
        console.log(response);
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

