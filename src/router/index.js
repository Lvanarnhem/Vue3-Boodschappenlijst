import Overview from "../domains/groceries/pages/Overview.vue"
import Create from "../domains/groceries/pages/Create.vue"
import  Edit from "../domains/groceries/pages/Edit.vue"
import { createRouter } from 'vue-router'
import { createWebHistory } from "vue-router"

const routes = [
    { path: '/', component: Overview },
    { path: '/create', component: Create },
    { path: '/edit', component: Edit },
  ]

  export const router = createRouter({
    history: createWebHistory(),
    routes,
  })