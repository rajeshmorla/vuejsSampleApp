<template>
<md-whiteframe md-elevation="9" id="login-page-whiteframe">
    <md-card class="" id="login-form-card">
    <br><br>
  <!-- <md-card-header>
    <md-card-header-text>
      <div class="md-title">Vue js</div>
      <div class="md-subhead">Welcomes you</div>
    </md-card-header-text>
  </md-card-header> -->

  <md-card-media>
    <center><img src="../assets/user-logo-2.png" alt="People" width="100px" height="100px"></center>
  </md-card-media>

  <md-card-content>
    <form novalidate @submit.stop.prevent="submit">
  <md-input-container>
    <label>user name</label>
    <md-input v-model="initialValue"></md-input>
  </md-input-container>

  <md-input-container md-has-password>
    <label>Password</label>
    <md-input type="password"></md-input>
  </md-input-container>
    <center><md-button class="md-raised md-primary">Login</md-button></center>
    </form>
    <span><a @click="needHelpClickHandler('PWFDialog')">need help?</a></span>
  </md-card-content>
</md-card>
    <md-dialog-alert
  :md-title="passwordForgotDialogData.title"
  :md-content-html="passwordForgotDialogData.contentHtml"
  @open="onOpenPWFDialog"
  @close="onClosePWFDialog"
  ref="PWFDialog">
</md-dialog-alert>
  </md-whiteframe>
</template>


<script>
import { updateCountries } from '../store/actions'
import { mapGetters } from 'vuex'

export default {
    data: ()=> ({initialValue : 5,
        passwordForgotDialogData: {
            title: 'Forgot username or Password!',
            contentHtml: 'Beep ke<strong> Password </strong>mat bhoola karo'
        }
    }), 
    methods: {
    needHelpClickHandler: function(ref) {
        //alert('le lota')
        //this.$store.dispatch('updateCountries', {})
        this.openPWFDialog(ref)
    },
    openPWFDialog(ref) {
      this.$refs[ref].open();
    },
    closePWFDialog(ref) {
      this.$refs[ref].close();
    },
    onOpenPWFDialog() {
      console.log('Opened');
    },
    onClosePWFDialog(type) {
      console.log('Closed', type);
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
    width: 100px !important; 
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

