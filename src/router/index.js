import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/pages/Login'
import Dashboard from '@/components/pages/Dashboard'
import Products from '@/components/pages/Products'
import StockAdjust from '@/components/pages/StockAdjust'
import InventoryCheck from '@/components/pages/InventoryCheck'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'*',
      redirect:'/login',
    },
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld,
    //   meta: { requiresAuth: true },
    // },
    {
      path:'/login',
      name:'Login',
      component:Login,
    },
    {
      path:'/admin',
      name:'Dashboard',
      component:Dashboard,
      children: [
        {
        path:'products',
        name: 'Products',
        component:Products,
        meta: { requiresAuth: true },
        },
        {
        path:'stockadjust',
        name: 'StockAdjust',
        component:StockAdjust,
        meta: { requiresAuth: true },
        },
        {
          path:'inventorycheck',
          name: 'InventoryCheck',
          component:InventoryCheck,
          meta: { requiresAuth: true },
          },
      ],
    },
  ]
})
