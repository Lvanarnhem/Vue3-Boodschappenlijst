<script setup>
import {ref } from 'vue'

// Grocery by id using the id that's been given in groceriestable

</script>

<template>
     <GroceryForm :grocery="newGrocery" @edit="editGrocery" />
</template>
