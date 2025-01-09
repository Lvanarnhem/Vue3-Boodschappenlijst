<script setup>
import { ref, shallowRef } from 'vue'
import GroceriesTable from '../components/GroceriesTable.vue'
import GroceryForm from '../components/GroceryForm.vue'
import {router} from '../../../router/index.js'

import {getAllGroceries} from '../../../store/Groceries.js';

const groceries = {...getAllGroceries.value}

const edit = id => {
    router.push({ name: 'edit', params:{id: id}});
}

</script>

<template>
  <GroceriesTable :groceries="groceries"  @submit="edit"/>
 
</template>


