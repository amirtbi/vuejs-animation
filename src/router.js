import {createRouter,createWebHistory} from 'vue-router';

import HomePage from './components/Pages/Home.vue';
import AboutPage from './components/Pages/About.vue';
import FaqPage from './components/Pages/Faq.vue';
const router = createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/', component:HomePage},
        {name:'home-page',path:'/home',component:HomePage},
        {name:'about-page',path:'/about',component:AboutPage},
        {name:'faq-page',path:'/faq',component:FaqPage}
    ]
})

export default router