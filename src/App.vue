<script setup>
import { ref, computed } from 'vue'
const groceries = ref([{name:"Appels", price:4.40}, {name:"Bananen", price:1.50}, {name:"Snoep", price:3.50}, {name:"Thee", price:1.90}])
const amount = defineModel({default:0, type: Number })
let x = 0;

const subtotal = (item, index) => {
  const sum = item.price * amount.index.value
  return sum.toFixed(2)
}



</script>

<template>
 <table>
  <th>Artikel</th>
  <th>Aantal</th>
  <th>Prijs</th>
  <th>Subtotaal</th>
  <tr v-for="(item, index) in groceries">
    <td >{{ item.name }}</td>
    <td><input v-model.number="amount[index]" value="1" class="amount" type="number"></td>
    <td>{{ item.price}}</td>
    <td>{{ subtotal(item, index) }}</td>
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
