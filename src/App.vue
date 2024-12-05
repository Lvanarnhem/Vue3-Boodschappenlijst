<script setup>
import {ref } from 'vue'

import GroceriesTable from './components/GroceriesTable.vue';

const groceries = ref([
  {index:0, name:"Appels", price:4.40, amount:0}, 
  {index:1, name:"Bananen", price:1.52, amount:0}, 
  {index:2, name:"Snoep", price:3.50, amount:0}, 
  {index:3, name:"Thee", price:1.90, amount:0},
])
</script>

<template>
  <GroceriesTable :groceries="groceries"/>
  <nav>
    <RouterLink to="/overview">Go to Overview</RouterLink>
    <RouterLink to="/create">Go to Create</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>


