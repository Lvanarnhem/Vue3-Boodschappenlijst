<script setup >
import {ref, computed, reactive } from 'vue'
import {router } from './../../../router';
import {getGroceryById} from './../../../store/Groceries.js'

const props = defineProps(['groceries']);
const emits = defineEmits(['edit', 'remove']);

const subtotal = (item, index) => {
  const sum = item.price * index
  return sum.toFixed(2)
}

const sumOFAllPrices = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
  sum += Number(array[i]);
}
  return sum.toFixed(2)
}

const fullTotal = computed(() => {
  const allPrices = reactive([])
  for (let i = 0; i < Object.values(props.groceries).length; i++) {
    allPrices.push(subtotal(props.groceries[i], props.groceries[i].amount),)    
  }
  return sumOFAllPrices(allPrices)
})

</script>

<template>
 <table>
  <th>Artikel</th>
  <th>Aantal</th>
  <th>Prijs</th>
  <th>Subtotaal</th>
  <tr v-for="(item) in props.groceries">
    <td>{{ item.name }}</td>
    <td>{{ item.amount }}</td>
    <td>{{ item.price }}</td>
    <td>{{ subtotal(item, item.amount) }}</td>
    <td> 
        <button value="edit" @click="emits('submit', item.id)">Edit</button>   
    </td>

    <td>
        <button value="remove" @click="emits('remove', item)">Remove</button>
    </td>
  </tr>
  <tr>
    <td class="bold">
      Totaalprijs
    </td>
    <td></td>
    <td></td>
    <td class="bold"> {{fullTotal}}</td>
  </tr>
 </table>
</template>
