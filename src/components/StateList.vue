<template>
<div id="state-list">
    <md-button class="md-raised md-primary" v-on:click.native="updateCountries1">Update States</md-button>
        <md-button class="md-raised md-primary" v-on:click="clearTable()">Clear table</md-button>
        <br />
         <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>country</md-table-head>
              <md-table-head>name</md-table-head>
              <md-table-head>area</md-table-head>
              <md-table-head>largest_city</md-table-head>
              <md-table-head>abbr</md-table-head>
              <md-table-head>capital</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="tstate in allStates">
              <md-table-cell>{{tstate.country}}</md-table-cell>
              <md-table-cell>{{tstate.name}}</md-table-cell>
              <md-table-cell>{{tstate.area}}</md-table-cell>
              <md-table-cell>{{tstate.largest_city}}</md-table-cell>
              <md-table-cell>{{tstate.abbr}}</md-table-cell>
              <md-table-cell>{{tstate.capital}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
  </div>
</template>

<script>
import { updateCountries } from '../store/actions'
import { mapGetters } from 'vuex'

export default {
  name: 'StateSection',
  computed: {
    ...mapGetters({
      allCountries: 'countries',
      states: 'states'
    }),
   allStates(){
        return this.states
    }
  },
  methods: {
    updateCountries1: function() {
        alert('le lota')
        this.$store.dispatch('updateCountries', {})
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
