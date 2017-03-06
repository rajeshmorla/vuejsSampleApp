<template>
<div id="country-list" class="data-container">
    <md-table-card>
  <md-toolbar>
    <h1 class="md-title">Countries</h1>
    <md-button class="md-icon-button" v-on:click.native="updateCountries1">
      <md-icon>filter_list</md-icon>
    </md-button>
    <md-button class="md-icon-button" v-on:click.native="updateCountries1">
      <md-icon v-if="!isDataUnderChange">refresh</md-icon>      
    <md-spinner v-if="isDataUnderChange" :md-size="20" md-indeterminate>
    </md-spinner>
    </md-button>
    <md-chips v-model="searchAttributeList" :md-max="columnList.length" v-if="searchAttributeList.length>0">
        <template scope="chip">
            <span>{{ chip.value }}</span>
            <small v-html="getHighlightedSearchKeyword(chip.value)"></small>
        </template>
    </md-chips>
    <md-button class="md-icon-button" id="searchTableButton" @click.native="openSearchDialog('searchDialog')">
      <md-icon>search</md-icon>
    </md-button>
  </md-toolbar>

  <md-table md-sort="name" md-sort-type="desc" @select="onSelect" @sort="onSort">
    <md-table-header>
      <md-table-row md-auto-select md-selection>
        <md-table-head v-for="(row, rowIndex) in columnList" :md-sort-by="row" :md-tooltip="'Sort By: '+row">
            {{row}}
        </md-table-head>
      </md-table-row>
    </md-table-header>

    <md-table-body>
      <md-table-row v-for="(row, rowIndex) in tableDataCurrentPage" :key="rowIndex" :md-item="row" md-auto-select md-selection>
        <md-table-cell v-for="(column, columnIndex) in row" v-html="heiglightSearchMatch(column,columnIndex)" :key="columnIndex" :md-numeric="false">
          ag
        </md-table-cell>
      </md-table-row>
    </md-table-body>
  </md-table>

  <md-table-pagination
    :md-size="pageSize"
    md-total="200"
    md-page="1"
    md-label="Rows"
    md-separator="of"
    :md-page-options="[5, 10, 25, 50]"
    @pagination="onPagination"></md-table-pagination>
</md-table-card>


<md-dialog md-open-from="#searchTableButton" md-close-to="#searchTableButton" ref="searchDialog">
  <md-dialog-title>Search Table</md-dialog-title>

  <md-dialog-content>
    <form>
      <md-input-container>
    <label for="movie">Attribute to Search</label>
    <md-select name="SearchAttributeSelect" id="SearchAttributeSelect">
      <md-option v-for="(row, rowIndex) in columnList" :value="row">{{row}}</md-option>
    </md-select>
  </md-input-container>
      <md-input-container>
        <label>keyword..</label>
        <md-textarea id='SearchKeywordArea'></md-textarea>
      </md-input-container>
    </form>
  </md-dialog-content>

  <md-dialog-actions>
    <md-button class="md-primary" @click.native="closeSearchDialogCancel('searchDialog')">Cancel</md-button>
    <md-button class="md-primary" @click.native="closeSearchDialogSearch('searchDialog')">Search</md-button>
  </md-dialog-actions>
</md-dialog>
  </div>
</template>


<script>
// import { updateCountries, updateDataChangeStatus } from '../store/actions'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

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
    currentPage : 1,
    pageSize: 15,
    searchAttribute: '',
    searchKeyword: '',
    searchAttributeList: [],
    searchAttributeKeywordPairs: {},
    searchCount: 0,
    colorCodes: ['#f00','#0f0','#00f','#0ff','#ff0'],
    isDataUnderChange1 : true,
  }),
  name: 'CountrySection',
  computed: {
    ...mapGetters({
      tableData: 'countries/countries',
      isDataUnderChange: 'countries/dataUpdating'
    }),
    filteredTableData: function(){
        var data = this.tableData;
        //var len = Object.keys(this.searchAttributeKeywordPairs).length;
        var len = this.searchAttributeList.length;
        for(var i=0; i<len; i++){            
             var searchAttribute = this.searchAttributeList[i];
             console.log('filteredTableData: '+ data.length)
             var searchKeyword = this.searchAttributeKeywordPairs[searchAttribute];
             console.log("from Filtered Data: filtering: => searchAttribute=>"+searchAttribute+" =>searchKeyword"+searchKeyword);
             data = data.filter(function( obj ) {  return obj[searchAttribute].toUpperCase().indexOf(searchKeyword.toUpperCase()) >= 0 ; });
        }
         console.log("from Filtered Data: data=> "+JSON.stringify(this.tableData))
         console.log('From: filteredTableData => no of countries: => '+data.length);
        return data;
    },
    tableDataMutable: function(){
        return this.tableData;
    },
    tableDataCurrentPage: function(){
        //return this.tableDataMutable;
        return this.filteredTableData.slice((this.currentPage-1)*this.pageSize,((this.currentPage-1)*this.pageSize)+this.pageSize);
        //return this.tableData.slice((this.currentPage-1)*this.pageSize,((this.currentPage-1)*this.pageSize)+this.pageSize);
    },    
    columnList: function(){
        if(this.tableData.length > 0){
            var temp = this.tableData[0];
            temp = Object.keys(temp);
            return temp;
        }
        else{
            var temp = [];
            return temp;
        }
    }
  },
  watch: {
    searchCount: function (newValue) {
      // alert('Inside watcher*************************: searchAttributeKeywordPairs => ');
      var s = {};
      s.result = JSON.parse(JSON.stringify(this.tableData));
      this.$store.dispatch('updateCountriesFromData', s)
    },
    searchAttributeList: function (newValue) {
      console.log('Inside watcher*************************:'+JSON.stringify(this.searchAttributeList));
      var s = {};
      s.result = JSON.parse(JSON.stringify(this.tableData));
      this.$store.dispatch('updateCountriesFromData', s)
    },
    searchAttributeKeywordPairs: function (newValue) {
      console.log('Inside watcher*************************: searchAttributeKeywordPairs => ');
      //var s = {};
      //s.result = JSON.parse(JSON.stringify(this.tableData));
      //this.$store.dispatch('updateCountriesFromData', s)
    },
  },
  methods: {
    ...mapActions('countries', {
        updateDataChangeStatus: 'updateDataChangeStatus',
        updateCountries: 'updateCountries' 
    }),
    updateCountries1: function() {
        //alert('le lota')
        var temp = {};
        temp.status = true;
        this.$store.dispatch('countries/updateDataChangeStatus', temp)
        this.$store.dispatch('countries/updateCountries', {})
    },
    updateStates: function(ccode) {
        alert('le lota c:'+ccode)
        this.$store.dispatch('updateStates', ccode)
    },
    clearTable: function(){
        this.$store.dispatch('clearCountryList', {})
    },
    onSelect: function(e){
        console.log('from: onSelect=>'+JSON.stringify(e))
        // this.$store.dispatch('clearCountryList', {})
    },
    onSort: function(e){
        console.log('from: onSort=> starting sorting => '+ e.name + ' ' + e.type);
        var sortKey = e.name;
        var sortType = 1;
        sortType = e.type == 'asc'? 1 : -1;
        console.log('form: onSort=> '+ e.type+' '+sortType)
        var s = {};
        // onSort (e) {
        // this.tableData = _.orderBy(this.tableData, [item => item[e.name]], e.type);
        // }
        if (sortKey) {
        s.result = this.tableData.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * sortType
        })
        }
        console.log('sorted:++++++++++++'+JSON.stringify(s));
        this.$store.dispatch('updateCountriesFromData', s)
    // this.$store.dispatch('clearCountryList', {})
    },
    onPagination: function(e){
        //alert('pagination'+e.page);
        this.currentPage = e.page;
        this.pageSize = e.size;
        alert(e.page+' '+e.size);
    },
    openSearchDialog(ref) {
      this.$refs[ref].open();
    },
    closeSearchDialogCancel(ref) {
      this.$refs[ref].close();
      alert("cancel");
    },
    closeSearchDialogSearch(ref) {
      this.$refs[ref].close();
      console.log('from: closeSearchDialogSearch=> searchAttribute: '+this.searchAttribute+' =>searchKeyword'+ this.searchKeyword);
      //var s = {};
      //var searchAttribute = this.searchAttribute;
      //var searchKeyword = this.searchKeyword;
      //s.result = this.tableData.filter(function( obj ) {  return obj[searchAttribute].toUpperCase().indexOf(searchKeyword.toUpperCase()) >= 0 ; });
      //this.$store.dispatch('updateCountriesFromData', s)
      
      this.searchAttribute = document.getElementById("SearchAttributeSelect").value
      this.searchKeyword = document.getElementById("SearchKeywordArea").value
      if(this.searchAttributeList.indexOf(this.searchAttribute)>=0){
        this.searchAttributeKeywordPairs[this.searchAttribute] = this.searchKeyword;
      }
      else{
        this.searchAttributeList.push(this.searchAttribute);
        this.searchAttributeKeywordPairs[this.searchAttribute] = this.searchKeyword;
      }
      // alert(document.getElementById("SearchKeywordArea").value);
      console.log('from: closeSearchDialogSearch=> searchAttributeList : '+JSON.stringify(this.searchAttributeList));
      console.log('from: closeSearchDialogSearch=> searchAttributeKeywordPairs : '+JSON.stringify(this.searchAttributeKeywordPairs));
      //var data = this.tableData;
      //var len = Object.keys(this.searchAttributeKeywordPairs).length;
      //alert('closeSearchDialogSearch: '+Object.keys(this.searchAttributeKeywordPairs).length);
      //for(var i=0; i<len; i++){
      //    alert('closeSearchDialogSearch: '+JSON.stringify(this.searchAttributeKeywordPairs));
      //    var searchAttribute = this.searchAttributeList[i];
       //   alert('closeSearchDialogSearch: '+data.length);
      //    var searchKeyword = this.searchAttributeKeywordPairs[searchAttribute];
      //    console.log("from Filtered Data: filtering: => searchAttribute=>"+searchAttribute+" =>searchKeyword"+searchKeyword);
      //    data = data.filter(function( obj ) {  return obj[searchAttribute].toUpperCase().indexOf(searchKeyword.toUpperCase()) >= 0 ; });
      //}
      //var s = {};
      //alert('closeSearchDialogSearch: '+data.length);
      //s.result = data;
      //this.$store.dispatch('updateCountriesFromData', s)
      //this.searchCount++;
      console.log('From: closeSearchDialogSearch => searchCount => '+this.searchCount);
      //this.tableDataMutable = [{name:'Pakistan',alpha2_code:'IN', alpha3_code:'IND'}];
      //console.log("hu ha ******************* =>"+JSON.stringify(this.tableDataMutable));
    },
    onSearchDialogOpen() {
      console.log('Opened');
    },
    onSearchDialogClose(type) {
      alert('Closed', type);
    },
    heiglightSearchMatch(value, cIndex) {
        //alert(value.replace(this.searchKeyword, "<span style='color:yellow'>"+this.searchKeyword+"</span>"));
        //var matchedKeyword = value.toUpperCase
        if(this.searchAttributeList.indexOf(cIndex) < 0 ){
            console.log('From <<didnt match>>heiglightSearchMatch: value => ' + value + ' cIndex=> ' + cIndex + ' matchedKeyword => '+matchedKeyword +' =>returning =>'+value);
            return value;
        }
        var colorCode = this.colorCodes[this.searchAttributeList.indexOf(cIndex)];
        var matchedKeyword = this.searchAttributeKeywordPairs[cIndex];
        console.log('from: closeSearchDialogSearch=> searchAttributeKeywordPairs : '+JSON.stringify(this.searchAttributeKeywordPairs));
        console.log('From heiglightSearchMatch: value => ' + value + ' cIndex=> ' + cIndex + ' matchedKeyword => '+matchedKeyword +' =>returning =>'+value.replace(this.searchKeyword, "<span style='background-color:yellow'>"+this.searchKeyword+"</span>"));
        var startIndex = value.toUpperCase().indexOf(matchedKeyword.toUpperCase());
        matchedKeyword = value.substring(startIndex, startIndex+matchedKeyword.length);
        return value.replace(matchedKeyword, "<span style='background-color:"+colorCode+"'>"+matchedKeyword+"</span>")
    },
    getHighlightedSearchKeyword(cIndex) {
        var colorCode = this.colorCodes[this.searchAttributeList.indexOf(cIndex)];
        return "(<span style='color:"+colorCode+"'>"+this.searchAttributeKeywordPairs[cIndex]+"</span>)";
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

