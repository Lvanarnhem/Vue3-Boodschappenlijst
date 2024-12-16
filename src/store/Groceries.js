import { ref, computed } from 'vue'

// State
const groceries = ref([
    {index:0, name:"Appels", price:4.40, amount:0}, 
    {index:1, name:"Bananen", price:1.52, amount:0}, 
    {index:2, name:"Snoep", price:3.50, amount:0}, 
    {index:3, name:"Thee", price:1.90, amount:0},
  ])


// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));

// Actions
export const addGrocery = (grocery) => groceries.value.push(grocery);