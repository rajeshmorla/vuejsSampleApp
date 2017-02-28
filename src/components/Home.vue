<template>
<md-whiteframe md-elevation="9" id="welcome-page">
    <md-card class="">
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">Vue js</div>
      <div class="md-subhead">Welcomes you</div>
    </md-card-header-text>
  </md-card-header>

  <md-card-media>
    <!-- <img src="../assets/logo.png" alt="People" width="300px" height="300px"> -->
  </md-card-media>

  <md-card-content>
    Le lota lota le.., Le lota lota le.., Le lota lota le.., Le lota lota le.., Le lota lota le.., Le lota lota le.., Le lota lota le.., Le lota lota le..
    Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is very easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling and supporting libraries.
  </md-card-content>
</md-card>
  </md-whiteframe>
</template>


<script>
import { updateCountries } from '../store/actions'
import { mapGetters } from 'vuex'

export default {
    
}

</script>


<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

