<template>
  <div class="home">
    <h1>Rookas Weather App</h1>
    <div class="enter-city">
      <input @keyup.enter="getWeather" v-model="data.city" type="text" placeholder="Enter a city">
    </div>
    <div v-if="data.weather" class="weather">
      <h1>{{ Math.round(data.weather.main.temp)}}&deg;</h1>
      <h2>{{data.weather.weather[0].main}}</h2>
      <h3>{{data.weather.weather[0].description}}</h3>
    </div>
    <ul>
      <li>
        <router-link style="text-decoration: none; color: #2c3e50"
                     :to="{name: 'Post', params: { id: 1, title: 'My first post'} }">
          Link to the blog post 1
        </router-link>
      </li>

      <li>
        <router-link style="text-decoration: none; color: #2c3e50"
                     :to="{name: 'Post', params: { id: 2, title: 'My second post'} }">
          Link to the blog post 2
        </router-link>
      </li>

      <li>
        <router-link style="text-decoration: none; color: #2c3e50"
                     :to="{name: 'Post', params: { id: 3 , title: 'My third post'} }">
          Link to the blog post 3
        </router-link>
      </li>
    </ul>
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

    const apiUrl = 'http://localhost:3001/'


    const getWeather = () => {
      axios(`${apiUrl}?units=metric&q=${data.city}`).then(response => {
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

.home > ul li
  list-style-type: none !important
  padding: 0

</style>

