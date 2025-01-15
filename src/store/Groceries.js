import { ref, computed } from 'vue'

// State
const groceries = ref([
    {id:0, name:"Appels", price:4.40, amount:0}, 
    {id:1, name:"Bananen", price:1.52, amount:0}, 
    {id:2, name:"Snoep", price:3.50, amount:0}, 
    {id:3, name:"Thee", price:1.90, amount:0},
  ])

// Getters
export const getAllGroceries = computed(() => groceries.value);
export const getGroceryById = (id) => computed(() => groceries.value.find(grocery => grocery.id == id));
export const removeGrocery = (grocery) => {groceries.value.splice(groceries.value.indexOf(grocery), 1)}

// Actions
export const updateGrocery = (grocery) => {
  groceries.value[grocery.id] = grocery;
};

export const addGrocery = (grocery) => {
  grocery.id = Math.max(...groceries.value.map(item => item.id)) + 1;
  groceries.value.push(grocery);
};