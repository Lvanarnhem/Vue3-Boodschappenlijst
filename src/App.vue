<script setup>
import { ref } from 'vue'
const groceries = ref(["Apples", "Bananas", "Grapes"])

</script>

<template>
 <table>
  <th>Boodschappen</th>
  <th>Aantal</th>
  <th>Prijs</th>
  <th>Subtotaal</th>
  <tr v-for="item in groceries">
    <td >{{ item }}</td>
    <input class="amount" type="text">
    <input class="price" type="text">
    <td> 
      <!-- Functie totalprice die alles bij elkaar optelt -->
    </td>
  </tr>
  <tr>
    <td>
      Totaalprijs
    </td>
    <td></td>
    <td></td>
    <td> <!-- totaal --> </td>
  </tr>
 </table>
</template>
