<script setup>
import { ref } from 'vue';

const props = defineProps(['grocery']);
const newGrocery = ref({...props.grocery});
const emits = defineEmits(['submit']);
</script>
<template>

<form>
    <!-- input hidden id met ->  if grocery id isset, gebruik die, en anders: met grocery length + 1(?) als id-->
     <input type="text">
    <label for="name">Item</label>
    <input v-model="newGrocery.name" type="text" name="name"></input>
    <label for="price">Price</label>
    <input v-model.number="newGrocery.price" type="number" name="price" step="0.01" ></input>
    <label for="amount">Amount</label>
    <input v-model.number="newGrocery.amount" type="number" name="amount" >
    <input type="button" value="Submit" @click="emits('submit', newGrocery)"> 
</form>
</template>