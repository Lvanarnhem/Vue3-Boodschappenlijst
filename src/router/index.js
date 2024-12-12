import  "./domains/groceries/pages/Overview.vue"
import "domains/pages/Create.vue"
import  "domains/pages/Edit.vue"
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/overview', component: Overview },
    { path: '/create', component: Create },
    { path: '/edit', component: Edit },
  ]

  const router = createRouter({
    history: createMemoryHistory(),
    routes,
  })