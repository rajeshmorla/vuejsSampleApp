<template>
<div class="c-container" id="app">
            <div class="c-header">
               <md-toolbar id="site-header-main">
                    <md-button class="md-icon-button" @click.native="toggleSidenav" id='toggle-button-sh' v-if="!isLoginPage">
                        <md-icon>menu</md-icon>
                    </md-button>
                    <center>
                        <img src="../static/wave-logo.png" alt="People" width="150px" height="150px"
                                v-on:mouseover="handleHeaderLogoMouseHover"
                                onmouseout="this.src='../static/wave-logo.png'" id='header-logo'>
                    </center>
                    <h2 class="md-title" style="flex: 1"></h2>
                </md-toolbar>
            </div>
            <div class="content-holder">
                <div class="c-nav-bar" id="navbar" v-if="!isLoginPage">
                    <div class="c-nav-bar-inner-container">
                    <br>
            <div id="sh-nav-link">
                <md-list>
                <md-list-item class="nav-bar-router-link">      
                    <router-link exact to="/home">Home<md-icon md-theme="light-blue">home</md-icon></router-link>
                </md-list-item>
                <md-list-item>      
                    <router-link exact to="/login">Login<md-icon md-theme="green">people</md-icon></router-link>
                </md-list-item>                
                <md-list-item>
                    <span>Tables</span>
                    <md-list-expand>
                        <md-list>
                            <md-list-item>      
                                <router-link exact to="/table">Table<md-icon md-theme="orange">menu</md-icon></router-link>
                            </md-list-item>
                            <md-list-item>      
                                <router-link exact to="/users">Users<md-icon md-theme="orange">menu</md-icon></router-link>
                            </md-list-item>
                        </md-list>
                    </md-list-expand>
                </md-list-item>
            </md-list><!--
            <router-link to="/haha">Ha Ha</router-link>
            <router-link to="/lala">La La</router-link>
            <router-link to="/sare">Sa re</router-link> -->
            </div>
                    </div>
                </div>
                <div class="c-page-content">
                    <div class="page-content-inner-table">
                        <transition name="slideRouter" appear>
                <router-view></router-view>
                </transition>
                    </div>
                </div>
            </div>    
        </div>
</template>

            


<style >
            html *{
                /*! box-sizing: inherit; */
            }
            body{
                margin: 0px 0px 0px 0px;
                /*! min-height: 100%; */
                background-color: antiquewhite;
            }
            .c-container {
                height: 100%;
                width: 100%;
                display: flex;
                position: absolute;
            }
            .c-header{
                height: 60px;
                width: 100%;
                background-color: blue;
            }
            .content-holder{
                /* background-color: aquamarine; */
                position: absolute;
                top: 60px;
                bottom: 0px;
                right: 0px;
                left: 0px;
                overflow: auto;
                display: flex;
                /*background-image: url(../src/assets/c-h-bg-12.png) !important;*/
            }

            .c-page-content{
                height: 100%;
                /* float: left; */
                width: 100%;
                display: table-cell;
                border-left: solid 2px #b7b9b7;
                padding-left: 20px;
                padding-top: 20px;
                /* position: absolute; */
                /* background-color: #d0d01a; */
                /* right: 0px; */
            }

            .c-nav-bar{
                display: table-cell;
                height: 100%;
                float: left;
                /* background-color: #f96c13; */
                box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
            }

            .page-content-inner-table {
                position: relative;
                /* top: 0px; */
                /* bottom: 0px; */
                height: 100%;
                width: 100%;
                padding-right: 20px;
                overflow: auto;
            }

            .c-nav-bar-inner-container{
                width: 280px;
                /* background-color: beige; */
                height: 100%;
                display: block;
            }

            .c-router-data{
                /*background-color: gray; */
                /* position: absolute; */
                /* top: 60px; */
                /* bottom: 0px; */
                /* width: 100%; */
            }
            #sh-nav-link{
                overflow: auto;
            }
            #nav-bar-logo-container{
                background-color: #8ed7f5 !important;
                border-bottom: 1px solid #cccccc !important;
            }
            #site-header-main{
                border-bottom: 2px inset rgb(199, 199, 199) !important;
                background-color: #5fb9e2 !important;                
                /*background-image: url(../src/assets/mzbg.png);*/
            }
            .md-list-item .md-list-item-container{
                font-weight: bold !important;
                border-bottom: #f7e3aa 1px solid !important;
            }
            .md-theme-default.md-list {
                background-color: transparent !important;
            }
            #header-logo{
                cursor: pointer;
            }

            /* Mobile navigation */

            .nav-mobile {
                display: none;
                position: absolute;
                top: 0;
                right: 0;
                background: #262626;
                height: 60px;
                width: 60px;
            }

            @media only screen and (max-width: 800px) {
                .c-nav-bar{
                    display: none;
                }
                .nav-mobile {
                    display: block;
                }
                #toggle-button-sh{
                    display:block !important;
                }
            }

            @media screen and (min-width: 800px) {
                .c-nav-bar{
                    display: inline-table !important;
                }
                .nav-mobile {
                    display: none;
                }
                #toggle-button-sh{
                    display:none;
                }
            }

            #nav-toggle {
                position: absolute;
                left: 18px;
                top: 22px;
                cursor: pointer;
                padding: 10px 35px 16px 0px;
            }

            #nav-toggle span,
            #nav-toggle span:before,
            #nav-toggle span:after {
                cursor: pointer;
                border-radius: 1px;
                height: 5px;
                width: 35px;
                background: #ffffff;
                position: absolute;
                display: block;
                content: '';
                transition: all 300ms ease-in-out;
            }

            #nav-toggle span:before {
                top: -10px;
            }

            #nav-toggle span:after {
                bottom: -10px;
            }

            #nav-toggle.active span {
                background-color: transparent;
            }

            #nav-toggle.active span:before,
            #nav-toggle.active span:after {
                top: 0;
            }

            #nav-toggle.active span:before {
                transform: rotate(45deg);
            }

            #nav-toggle.active span:after {
                transform: rotate(-45deg);
            }
            .slideRouter-enter-active{
                transition: all .5s
            }
            .slideRouter-enter {
                transform: translate3d(0, 100%, 0);
            }
            #country-list, #login-page-whiteframe, #welcome-page{
                /*position: relative;*/
            }
            .data-container{
                /*position: relative;
                top : 0px;*/
                /*transition: top .5s linear;*/
            }
            .md-toolbar{
                min-height: 60px !important;
            }
            

            /* start=> v-r-transition, default is {forward: 'forward', back: 'back'}*/
            .view {
                transition: all .5s ease;
            }
            .forward-enter, .forward-leave {
                transform: translate3d(-100%, 0, 0);
            }
            .back-enter, .back-leave {
                transform: translate3d(100%, 0, 0);
            }
            /*end=> v-r-transition, default is {forward: 'forward', back: 'back'}*/
</style>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: '',
        transitionName: 'slide-left',
        logoHoverCount: 0
      };
    },
    computed: {
      logo() {
        let theme = Vue.material.currentTheme;

        if (theme) {
          return `assets/logo-vue-material-${theme}.png`;
        }

        return 'assets/logo-vue-material-default.png';
      },
      isLoginPage() {
        return (this.$route.path == '/login' || this.$route.path == '/') ? true : false;
      }
    },
    methods: {
      toggleSidenav() {
        //alert('called');
if (document.getElementById('navbar').style.display == 'inline-table') {
                            document.getElementById('navbar').style.display = 'none';
                        } else {
                            document.getElementById('navbar').style.display = 'inline-table';
                        }
      },
      closeSidenav() {
        this.$refs['main-sidebar'].close();
      },
      handleHeaderLogoMouseHover: function(){
        //alert(event.target.tagname)
        this.logoHoverCount++;
        var temp = this.logoHoverCount%6;
        document.getElementById('header-logo').setAttribute('src', '../static/wave-logo-hover-'+temp+'.png');
      }
    }
  };
</script>
