<script setup>
import { ref, computed } from 'vue'
const groceries = ref([
  {index:0, name:"Appels", price:4.40, amount:0}, 
  {index:1, name:"Bananen", price:1.50, amount:0}, 
  {index:2, name:"Snoep", price:3.50, amount:0}, 
  {index:3, name:"Thee", price:1.90, amount:0},
])

const amount = defineModel({default:0})

const subtotal = (item, index) => {
  console.log(amount[index])
  const sum = item.price * amount.value
  return sum.toFixed(2)
}

const total = computed(() => {
  let sum = 0
  for (const grocery in groceries.value) {
    sum +=  subtotal(grocery, grocery.index)
    console.log(groceries)
    return sum
  }
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
    <td><input v-model.number="amount" id="index" value=item.amount class="amount" type="number"></td>
    <td>{{ item.price }}</td>
    <td>{{ subtotal(item, item.index) }}</td>
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
    <td class="bold"> {{total}}</td>
  </tr>
 </table>
</template>
