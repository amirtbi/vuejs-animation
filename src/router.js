import { createRouter, createWebHistory } from "vue-router";

import HomePage from "./components/Pages/Home.vue";
import AboutPage from "./components/Pages/About.vue";
import FaqPage from "./components/Pages/Faq.vue";
//importing header and footer components
import TheFooter from './components/Layouts/Navs/TheFooter.vue';
import TheHeader from './components/Layouts/Navs/TheHeader.vue';
//importing categories routes
import ButtonsCatergory from "./components/Catergories/ButtonAnimations.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: HomePage },
    {
      name: "home-page",
      path: "/home",
      components: {default:HomePage,footer:TheFooter,header:TheHeader},
      children: [
        {
          name: "buttons-category",
          path: "buttons",
          component: ButtonsCatergory,
         
        },
      ],
    },
    { name: "about-page", path: "/about", component: AboutPage },
    { name: "faq-page", path: "/faq", component: FaqPage },
  ],
});

export default router;
