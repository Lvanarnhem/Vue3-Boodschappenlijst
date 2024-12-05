import  "./domains/groceries/pages/Overview.vue"
import "domains/pages/Create.vue"
import  "domains/pages/Edit.vue"

const routes = [
    { path: '/overview', component: Overview },
    { path: '/create', component: Create },
    { path: '/edit', component: Edit },
  ]