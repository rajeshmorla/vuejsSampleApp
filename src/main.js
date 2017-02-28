// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// import router from './router'
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import store from 'store/index'
import VueRouter from 'vue-router'
import PageContent from './components/PageContent';
import CountryTable from './components/CountryTable';
import Home from './components/Home';
import Login from './components/Login';
import Test from './components/Test';

Vue.use(VueMaterial)
Vue.use(VueRouter)
// Vue.use(Store)
// router.start(App, '#app1')
/* eslint-disable no-new */

/* new Vue({
  el: '#app1',
  data: { Store },
  router,
  components: { App }
}) */

const HaHa = { template: '<div><h1>Ha Ha Ha Ha..<h1></div>' }
const LaLa = { template: '<div><h1>La La La La..</h1></div>' }

const routes = [
  { path: '/home', component: Home },
  { path: '/table', component:  CountryTable},
  { path: '/login', component:  Login},
  { path: '/lala', component:  Test}
]

const router = new VueRouter({
  routes
})

Vue.component('page-content', PageContent);
// Vue.material.setCurrentTheme(theme);
var Docs = Vue.component('app', App)
/* render: h => h(App) */
var Docs = new Docs({
  el: '#app',
  store,
  router
})
