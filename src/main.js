import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';


//**UI */
import BaseCard from './components/UI/BaseCard.vue';


const app = createApp(App);
//*regiseteing components*//

app.component("base-card",BaseCard);

app.use(router);
app.mount('#app');
