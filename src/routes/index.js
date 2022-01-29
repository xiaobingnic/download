import { createRouter, createWebHistory } from 'vue-router'
// import vueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Products from '../components/Products.vue'

const routes =[
    {
        path :'/',
        name: 'Home',
        component: Home
    },
    {
        path :'/products/:id',
        name: 'Products',
        component : Products
        // component: ()=>
        //     import ('../components/Products.vue')
    }
]
export default createRouter({
    history: createWebHistory(),//'/base/'),
    routes: routes
})
// const router = vueRouter.createRouter({
//     history: vueRouter.createWebHashHistory(),
//     routes

// })
// export default router