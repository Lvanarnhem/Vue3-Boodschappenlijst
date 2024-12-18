<script setup>
import {ref } from 'vue'
import GroceryForm from '../components/GroceryForm.vue'
import {addGrocery} from '../../../store/Groceries.js';
import {router } from './../../../router';


const newGrocery = ref({name: '', price: 0, amount: 0});

const editGrocery = grocery => {
    console.log(grocery);
    addGrocery(grocery);
    router.push({ name: 'Home' });

}


</script>

<template>
     <GroceryForm :grocery="newGrocery" @submit="editGrocery" />
</template>
