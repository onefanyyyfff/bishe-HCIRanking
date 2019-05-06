import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
const GeneralRank = resolve => require(['../views/GeneralRank'],resolve) 
const NewKeyRank = resolve => require(['../views/NewKeyRank'],resolve) 
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'GeneralRank',
      component: GeneralRank
    },
    {
      path: '/nkr',
      name: 'NewKeyRank',
      component: NewKeyRank
    }
  ]
})
