import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Menswear from '../views/Menswear.vue'
import Womanswear from '../views/Womanswear.vue'
import Shoes from '../views/Shoes.vue'
import Accessories from '../views/Accessories.vue'
import Jeans from '../views/Jeans.vue'
import Shirts from '../views/Shirts.vue'
import Coats from '../views/Coats.vue'
import Deals from '../views/Deals.vue'


const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/menswear', component: Menswear },
  { path: '/womanswear', component: Womanswear},
  { path: '/shoes', component: Shoes},
  { path: '/accessories', component: Accessories},
  { path: '/jeans', component: Jeans},
  { path: '/Shirts', component: Shirts},
  { path: '/Coats', component: Coats},
  { path: '/Deals', component: Deals}
]


const router = createRouter({
  
  history: createWebHistory(),
  routes, 
})

export default router