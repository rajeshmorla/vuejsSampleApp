<template>
<div id="country-list">
    <md-button class="md-raised md-primary" v-on:click.native="updateCountries1">Update Countries</md-button>
        <md-button class="md-raised md-primary" v-on:click.native="clearTable">Clear table</md-button>
        <br />
         <md-table>
          <md-table-header>
            <md-table-row>
              <md-table-head>Name</md-table-head>
              <md-table-head>alpha2_code</md-table-head>
              <md-table-head>alpha2_code</md-table-head>
            </md-table-row>
          </md-table-header>
          <md-table-body>
            <md-table-row v-for="country in allCountries" v-on:click.native="updateStates(country.alpha3_code)">
              <md-table-cell>{{country.name}}</md-table-cell>
              <md-table-cell>{{country.alpha2_code}}</md-table-cell>
              <md-table-cell>{{country.alpha3_code}}</md-table-cell>
            </md-table-row>
          </md-table-body>
        </md-table>
  </div>
</template>

<script>
import { updateCountries } from '../store/actions'
import { mapGetters } from 'vuex'

export default {
  name: 'CountrySection',
  computed: {
    ...mapGetters({
      allCountries: 'countries'
    })
  },
  methods: {
    updateCountries1: function() {
        alert('le lota')
        this.$store.dispatch('updateCountries', {})
    },
    updateStates: function(ccode) {
        alert('le lota c:'+ccode)
        this.$store.dispatch('updateStates', ccode)
    },
    clearTable: function(){
        this.$store.dispatch('clearCountryList', {})
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
