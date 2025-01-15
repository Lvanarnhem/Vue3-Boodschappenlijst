<script setup>
import { ref } from 'vue'
import GroceriesTable from '../components/GroceriesTable.vue'
import {router} from '../../../router/index.js'
import {getAllGroceries, removeGrocery} from '../../../store/Groceries.js';

const groceries = getAllGroceries

const edit = id => {
    router.push({ name: 'edit', params:{id: id}});
}

const del = grocery => {
    removeGrocery(grocery);
}



</script>

<template>
  <GroceriesTable :groceries="groceries"  @submit="edit" @remove="del"/>
 
</template>


