import { createApp } from 'vue';
import App from './App.vue';
import './css/main.css';
import './css/tailwind.css';
import store from './store/store';

const app = createApp(App);
app.use(store);
app.mount('#app');
