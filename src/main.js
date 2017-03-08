// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import router from './router'
import Vue from 'vue'
import App from './App'
import App1 from './App1'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from 'store/index'
import VueRouter from 'vue-router'
import PageContent from './components/PageContent';
import CountryTable from './components/CountryTable';
import UserTable from './components/Users';
import Home from './components/Home';
import Login from './components/Login';
import PropTest from './components/PropTest';
import VueResource from 'vue-resource'

Vue.use(VueMaterial)
Vue.use(VueRouter)
Vue.use(VueResource)
// Vue.use(Store)
// router.start(App, '#app1')
/* eslint-disable no-new */

/* new Vue({
  el: '#app1',
  data: { Store },
  router,
  components: { App }
}) */


const routes = [
  { path: '/', component: Login },
  { path: '/home', component: Home },
  { path: '/table', component:  CountryTable},
  { path: '/login', component:  Login},
  { path: '/users', component:  UserTable},
  { path: '/user/:id', component: PropTest }
]

const router = new VueRouter({
  routes
})

//router.beforeEach((to, from, next) => {
//  //alert(JSON.stringify(to));
//  Vue.nextTick(() => {
//    let dataContainer = document.querySelector('#country-list');
//
//    if (dataContainer) {
//      dataContainer.style.top = '-100px';
//    }
//
//    //Docs.closeSidenav();
//
//    next();
//  });
//  //next();
//})
Vue.component('page-content', PageContent);
// Vue.material.setCurrentTheme(theme);
var Docs = Vue.component('app', App)
/* render: h => h(App) */
var Docs = new Docs({
  el: '#app',
  store,
  router
})
