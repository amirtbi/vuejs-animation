import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
//importing UI component
import TheHeader from './components/Layouts/TheHeader.vue';
import TheFooter from './components/Layouts/TheFooter.vue';

const app = createApp(App);
//*regiseteing components*//
app.component("the-header",TheHeader);
app.component('the-footer',TheFooter);

app.use(router);
app.mount('#app');
