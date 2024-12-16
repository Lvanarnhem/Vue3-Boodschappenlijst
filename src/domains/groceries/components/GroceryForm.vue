<script setup> 

const props = defineProps(['grocery']);
const newGrocery = {...props.grocery};
console.log(newGrocery)
const emits = defineEmits(['submit']);
</script>
<template>

<form action="submit emit?" method="POST">
    <label for="name">Item</label>
    <input type="text" placeholder="Milk" name="name"></input>
    <label for="price">Price</label>
    <input type="number" name="price" step="0.01" placeholder="0.99"></input>
    <label for="amount">Amount</label>
    <input type="number" name="amount" placeholder="1">
    <input type="button" value="Submit" @click="emits('submit', newGrocery)"> <!-- @click moet een functie worden die de nieuwe inputs in newGrocery pushed als een nieuw object
                                                                                    en deze dan via de submit emit weer teruggeeft aan de vorige pagina -->
</form>
</template>