import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Addsmothies from '@/components/AddSnpthie'
import EditSmoosie from '@/components/EditSmoosie'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
    },
    {
      path: '/add-smothie',
      name: 'Addsmothies',
      component: Addsmothies,
    },
    {
      path: '/edit-smoosie/:smoosie_slug',
      name: 'EditSmoosie',
      component: EditSmoosie,
      props: true,
    },
  ]
})

