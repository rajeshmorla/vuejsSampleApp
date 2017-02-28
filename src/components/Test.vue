<template>
</template>


<script>
import { updateCountries } from '../store/actions'
import { mapGetters } from 'vuex'

export default {
    data: () => ({
    nutrition: [
      {
        dessert: 'Frozen yogurt',
        type: 'ice_cream',
        calories: '159',
        fat: '6.0',
        comment: 'Icy'
      },
      {
        dessert: 'Ice cream sandwich',
        type: 'ice_cream',
        calories: '237',
        fat: '9.0',
        comment: 'Super Tasty'
      },
      {
        dessert: 'Eclair',
        type: 'pastry',
        calories: '262',
        fat: '16.0',
        comment: ''
      },
      {
        dessert: 'Cupcake',
        type: 'pastry',
        calories: '305',
        fat: '3.7',
        comment: ''
      },
      {
        dessert: 'Gingerbread',
        type: 'other',
        calories: '356',
        fat: '16.0',
        comment: ''
      }
    ],
  }),
  name: 'CountrySection',
  computed: {
    ...mapGetters({
      allCountries: 'countries'
    }),
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
    },
    onSelect: function(){
        alert('selected')
        // this.$store.dispatch('clearCountryList', {})
    },
    onSort: function(){
        alert('sorted');
        var sortKey = 'alpha3_code'
        var s = {};
        if (sortKey) {
        s.result = this.allCountries.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * 1
        })
        }
        console.log('sorted:++++++++++++'+JSON.stringify(s));
        this.$store.dispatch('updateCountriesFromData', s)
    // this.$store.dispatch('clearCountryList', {})
    },
    onPagination: function(){
        alert('pagination');
    }
  }
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


