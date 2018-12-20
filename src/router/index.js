import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addsmothies from '@/components/AddSnpthie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Index',
      component: Index,
    },
    {
      path: '/add-smothie',
      name: 'Addsmothies',
      component: Addsmothies,
    },
  ]
})

