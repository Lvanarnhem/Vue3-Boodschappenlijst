<script setup>
import {ref } from 'vue'
import GroceryForm from '../components/GroceryForm.vue'
import {addGrocery} from '../../../store/Groceries.js';
import {router } from './../../../router';
import {getAllGroceries} from '../../../store/Groceries.js';


const newGrocery = ref({name: '', price: 0, amount: 0});

const editGrocery = grocery => {
    addGrocery(grocery);
    router.push({ name: 'Home' });

}




</script>

<template>
     <GroceryForm :grocery="newGrocery" @submit="editGrocery" />
</template>
