<template>
<md-whiteframe md-elevation="9" id="login-page-whiteframe" class="data-container">
    <md-card class="" id="login-form-card">
    <br><br>
  <md-card-header>
    <md-card-header-text>
      <div class="md-title">{{$route.params.id}}</div>
      <div class="md-subhead">Dhondhu, just chill!</div>
    </md-card-header-text>
  </md-card-header>

  <md-card-media>
    <center><img src="../assets/card-image-horse.jpg" alt="People"></center>
  </md-card-media>
    
  <md-card-content>
    <center>
    Mera dil bhi kitna pagal hai<br>
    Ye pyar jo tumse karta hai<br>
    par samne jab tum aati ho<br>
    Kuchh bhi kehen se darta hai
    </center>
  </md-card-content>
</md-card>
  </md-whiteframe>
</template>


<script>
// import { updateCountries, updateDataChangeStatus } from '../store/actions'
import { mapGetters } from 'vuex'
import { mapActions } from 'vuex'
import { mapState } from 'vuex'

export default {
    data: () => ({
    tableTitle: 'Users',
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
      tableData: 'users/users',
      isDataUnderChange: 'users/dataUpdating'
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
             data = data.filter(function( obj ) {  return (typeof obj[searchAttribute] != 'undefined') && obj[searchAttribute].toUpperCase().indexOf(searchKeyword.toUpperCase()) >= 0 ; });
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
    updateTableData: function() {
        //alert('le lota')
        var temp = {};
        temp.status = true;
        this.$store.dispatch('users/updateDataChangeStatus', temp)
        this.$store.dispatch('users/updateUsers', '1488772692543')
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
        s.data = this.tableData.slice().sort(function (a, b) {
          a = a[sortKey]
          b = b[sortKey]
          return (a === b ? 0 : a > b ? 1 : -1) * sortType
        })
        }
        console.log('sorted:++++++++++++'+JSON.stringify(s));
        this.$store.dispatch('users/updateUsersFromData', s)
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
        console.log('++++++++++++++++++++++++++++'+value+' '+ cIndex+' +++++++++++++++');
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
.md-theme-default a:not(.md-button):hover {
    color: #2f8aff !important;
    cursor: pointer !important;
}
.md-card .md-card-media img {
    width: 300px !important; 
}
#login-form-card{
    background-color: #f5f5f5;
}
#login-page-whiteframe{
    margin: 0 auto;
    width: 350px;
}
.md-input-container .md-icon:not(.md-icon-delete):after {
    width: 0px !important;
    height: 0px !important;
}
.md-theme-default.md-input-container .md-icon:not(.md-icon-delete):after {
    background: rgba(109, 104, 104, 0) !important;
}
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

