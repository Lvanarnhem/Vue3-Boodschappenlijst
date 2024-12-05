<script setup>
import { ref, computed, reactive } from 'vue'
const groceries = ref([
  {index:0, name:"Appels", price:4.40, amount:0}, 
  {index:1, name:"Bananen", price:1.52, amount:0}, 
  {index:2, name:"Snoep", price:3.50, amount:0}, 
  {index:3, name:"Thee", price:1.90, amount:0},
])

const subtotal = (item, index) => {
  console.log(index)
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
  for (let i = 0; i < groceries.value.length; i++) {
    allPrices.push(subtotal(groceries.value[i], groceries.value[i].amount),)    
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
  <tr v-for="(item, index) in groceries">
    <td >{{ item.name }}</td>
    <td><input v-model.number="item.amount" id="index" value=item.amount class="amount" type="number"></td>
    <td>{{ item.price }}</td>
    <td>{{ subtotal(item, item.amount) }}</td>
    <td> 
      <!-- Functie totalprice die alles bij elkaar optelt -->
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
