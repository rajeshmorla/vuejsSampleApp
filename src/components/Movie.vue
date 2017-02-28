<template>
  <div id="app">
    <movie-list></movie-list>
    <movie-card></movie-card>
  </div>
</template>

<script>

import MovieList from './components/MovieList'
import MovieCard from './components/MovieCard'

export default {
    components: {
        MovieList,
        MovieCard
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
