import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:"/home"
    },
    {
      path:'/home',
      component: ()=> import('components/content/routecomponents/home')
    },
    {
      path:'/category',
      component:()=>import('components/content/routecomponents/fenlei')
    },
    {
      path:'/cart',
      component:()=>import('components/content/routecomponents/gouwuche')
    },
    {
      path:'/my',
      component:()=>import('components/content/routecomponents/wode')
    },
    {
      path:'/detail',
      component:()=>import('components/content/routecomponents/details')
    }
  ],
mode: 'history'
})
