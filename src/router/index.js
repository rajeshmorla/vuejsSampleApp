import Vue from 'vue'
import Router from 'vue-router'
import Hello from 'components/Hello'
import Login from 'components/Login'


Vue.use(Router)
var router = new Router({
  history: false,
  routes: [
      {
          path: '/', 
          component: Hello
      },
      {
          path: '/#/login', 
          component: Login
      }
  ]
})

export default router