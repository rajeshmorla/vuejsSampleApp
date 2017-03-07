<template>
<div class="c-container" id="app">
    <div class="c-nav-bar" id="navbar">
        <div class="c-nav-bar-inner-container">
            <md-toolbar class="md-large md-primary" id="nav-bar-logo-container">
                <h1 style="color:blue; "></h1><center id="header-logo-navbar"><img src="../src/assets/wave-logo.png" alt="People" width="150px" height="200px"></center>
            </md-toolbar>
            <div id="sh-nav-link">
                <md-list>
                <md-list-item class="nav-bar-router-link">      
                    <router-link exact to="/dashboard">Dashboard<md-icon md-theme="light-blue"></md-icon></router-link>
                </md-list-item>
                <md-list-item class="nav-bar-router-link">      
                    <router-link exact to="/users">Users<md-icon md-theme="light-blue"></md-icon></router-link>
                </md-list-item>
                <md-list-item class="nav-bar-router-link">      
                    <router-link exact to="/devices">Devices<md-icon md-theme="light-blue"></md-icon></router-link>
                </md-list-item>
                <md-list-item class="nav-bar-router-link">      
                    <router-link exact to="/services">Services<md-icon md-theme="light-blue"></md-icon></router-link>
                </md-list-item>               
                <md-list-item>
                    <span>Configuration</span>
                    <md-list-expand>
                        <md-list>
                            <md-list-item>      
                                <router-link exact to="/config/hardware">Hardware<md-icon md-theme="orange"></md-icon></router-link>
                            </md-list-item>
                            <md-list-item>      
                                <router-link exact to="/config/hp">Hardware Profile<md-icon md-theme="orange"></md-icon></router-link>
                            </md-list-item>
                            <md-list-item>      
                                <router-link exact to="/config/devices">Devices<md-icon md-theme="orange"></md-icon></router-link>
                            </md-list-item>
                            <md-list-item>      
                                <router-link exact to="/config/lan">LAN Setting<md-icon md-theme="orange"></md-icon></router-link>
                            </md-list-item>
                            <md-list-item>      
                                <router-link exact to="/config/wan">WAN Setting<md-icon md-theme="orange"></md-icon></router-link>
                            </md-list-item>
                        </md-list>
                    </md-list-expand>
                </md-list-item>               
                <md-list-item>
                    <span>Firmware</span>
                    <md-list-expand>
                        <md-list>
                            <md-list-item>      
                                <router-link exact to="/firmware/view">View<md-icon md-theme="orange">Hardware</md-icon></router-link>
                            </md-list-item>
                            <md-list-item>      
                                <router-link exact to="/firmware/upload">Upload<md-icon md-theme="orange">Hardware Profile</md-icon></router-link>
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
            <div class="c-header">
                <md-toolbar id="site-header-main">
                    <md-button class="md-icon-button" @click.native="toggleSidenav" id='toggle-button-sh'>
                        <md-icon>menu</md-icon>
                    </md-button>
                    <h2 class="md-title" style="flex: 1"></h2>
                </md-toolbar>
            </div>
            <div class="c-router-data">
                <transition name="slideRouter" appear>
                <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</div>
</template>

            


<style scoped>
            html *{
                /*! box-sizing: inherit; */
            }
            body{
                margin: 0px 0px 0px 0px;
                /*! min-height: 100%; */
                background-color: antiquewhite;
                background-image: url(../src/assets/mzbg.png) !important;
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
                /*! width: 100%; */
                background-color: blue;
                /*! display: table-caption; */
            }

            .c-page-content{
                height: 100%;
                float: left;
                width: 100%;
                /*! flex: 1; */
                display: block;
                position: relative;
            }

            .c-nav-bar{
                /*width: 300px;*/
                /*display: inline-table;*/
                z-index: 10;
                height: 100%;
                float: left;
                background-color: #f96c13;
                box-shadow: 3px 0px 7px 2px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12);
                /*! position: fixed; */
            }

            .page-content-inner-table {
                position: relative;
                top: 0px;
                bottom: 0px;
                height: 100%;
                width: 100%;
            }

            .c-nav-bar-inner-container{
                /* width: 280px; */
                background-color: #ffffff;
                height: 100%;
                display: block;
                overflow: auto;
                background-image: url(../src/assets/mzbg.png);
            }

            .c-router-data{
                background-color: #ffffff;
                /*! width: 100%; */
                /*! display: inline-block; */
                /*! height: 90%; */
                position: absolute;
                top: 50px;
                bottom: 0px;
                width: 100%;
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 20px;
                border-left: #e0e0e0 1px solid;
                overflow: auto;                
                background-image: url(../src/assets/mzbg.png);
                /* box-shadow: 0 1px 5px rgba(0,0,0,.2), 0 2px 2px rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12); */
            }
            #sh-nav-link{
                overflow: auto;
            }
            #nav-bar-logo-container{
                background-color: #5fb9e2 !important;
                border-bottom: 1px solid #cccccc !important;
                background-image: url(../src/assets/mzbg.png);
                min-height: 100px !important;
            }
            #site-header-main{
                z-index: 9;
                min-height: 50px;
                /* border-bottom: 6px outset rgb(255, 24, 0) !important; */
                background-color: #5fb9e2 !important;                
                background-image: url(../src/assets/mzbg.png);
                box-shadow: 0 1px 17px rgba(0,0,0,.2), 0 1px 1px rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
            }
            .md-list-item .md-list-item-container{
                /* font-weight: bold !important; */
                font-weight: 300 !important;
            }
            .md-theme-default.md-list {
                background-color: transparent !important;
            }
            #header-logo-navbar{
                /* background-color: #8ed7f5;                
                height: 60px;
                border-bottom: 2px outset rgb(255, 24, 0) !important;*/
                margin: 0 auto;
            }
            .md-list-item-container{
                background-image: url(../src/assets/mzbg.png);
                background-color: hsla(0,0%,60%,.2) !important;
                /* height: 20px; */
            }
            .md-list-item-container:hover{
                background-color: #5fb9e2 !important;
            }
            .md-list{
                margin-top: -8px;
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
            
            .md-theme-default.md-list .md-list-item-expand .md-list-item-container {
                background-color: hsla(0,0%,60%,.2) !important; 
            }
</style>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: '',
        transitionName: 'slide-left'
      };
    },
    computed: {
      logo() {
        let theme = Vue.material.currentTheme;

        if (theme) {
          return `assets/logo-vue-material-${theme}.png`;
        }

        return 'assets/logo-vue-material-default.png';
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
      }
    }
  };
</script>
