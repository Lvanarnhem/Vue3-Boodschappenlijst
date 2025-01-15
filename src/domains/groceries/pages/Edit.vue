<script setup>
import {ref } from 'vue'
//Then use ^ grocery to call form with newGrocery as a ref
import { useRoute } from 'vue-router'
import {router } from './../../../router';
import {updateGrocery} from '../../../store/Groceries.js';
import GroceryForm from '../components/GroceryForm.vue'
import { getGroceryById } from '../../../store/Groceries.js';

const route = useRoute()
const id = route.params.id

const grocery = ref({...getGroceryById(id).value})

const editGrocery = grocery => {
    updateGrocery(grocery);
    router.push({ name: 'Home' });
}

console.log(grocery.value)

</script>

<template>
    <!--Geen addGrocery maar aparte editGrocery functie maken-->
    <GroceryForm :grocery="grocery" @submit="editGrocery"/>
</template>
