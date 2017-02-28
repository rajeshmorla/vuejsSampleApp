<template>
<div class="c-container" id="app">
    <div class="c-nav-bar" id="navbar">
        <div class="c-nav-bar-inner-container">
            <md-toolbar class="md-large md-warn">
                <div class="md-toolbar-container" md-theme="orange">
                <h3 class="md-title">let's see</h3>
            </div>
            </md-toolbar>
            <md-list>
                <md-list-item>      
                    <router-link exact to="/home">Home<md-icon md-theme="light-blue">home</md-icon></router-link>
                </md-list-item>
                <md-list-item>      
                    <router-link exact to="/login">Login<md-icon md-theme="green">people</md-icon></router-link>
                </md-list-item>
                <md-list-item>      
                    <router-link exact to="/table">Table<md-icon md-theme="orange">menu</md-icon></router-link>
                </md-list-item>
            </md-list>
            <router-link to="/haha">Ha Ha</router-link>
            <router-link to="/lala">La La</router-link>
            <router-link to="/sare">Sa re</router-link>
        </div>
    </div>
    <div class="c-page-content">
        <div class="page-content-inner-table">
            <div class="c-header">
                <md-toolbar>
                    <md-button class="md-icon-button" @click.native="toggleSidenav" id='toggle-button-sh'>
                        <md-icon>menu</md-icon>
                    </md-button>
                    <h2 class="md-title" style="flex: 1">Welcome</h2>
                </md-toolbar>
            </div>
            <div class="c-router-data">
                <router-view></router-view>
            </div>
        </div>
    </div>
</div>
</template>

<style>
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
                height: 100%;
                float: left;
                background-color: #f96c13;
                box-shadow: 0 1px 5px rgba(0,0,0,.2),0 2px 2px rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.12);
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
                width: 280px;
                background-color: #ffffff;
                height: 100%;
                display: block;
                overflow: auto;
            }

            .c-router-data{
                background-color: #ffffff;
                /*! width: 100%; */
                /*! display: inline-block; */
                /*! height: 90%; */
                position: absolute;
                top: 60px;
                bottom: 0px;
                width: 100%;
                padding-left: 20px;
                padding-right: 20px;
                padding-top: 20px;
                border-left: #e0e0e0 1px solid;
                overflow: auto;
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
</style>

<script>
  import Vue from 'vue';

  export default {
    data() {
      return {
        toolbar: true,
        theme: 'default',
        pageTitle: ''
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
