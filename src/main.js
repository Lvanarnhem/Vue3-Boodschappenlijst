import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import './router/index.js'
import './style.css'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.mount('#app')

const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })
  
