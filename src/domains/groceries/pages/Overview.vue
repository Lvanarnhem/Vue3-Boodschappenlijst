<script setup>
import { ref, shallowRef } from 'vue'
import GroceriesTable from '../components/GroceriesTable.vue'
import GroceryForm from '../components/GroceryForm.vue'

import {getAllGroceries} from '../../../store/Groceries.js';

const groceries = {...getAllGroceries.value}
console.log(groceries)

</script>

<template>
  <GroceriesTable :groceries="groceries"/>
  <GroceryForm/>
</template>


