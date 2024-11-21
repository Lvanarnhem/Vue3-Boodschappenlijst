<script setup>
import { ref } from 'vue'
const groceries = ref(["Appels", "Bananen", "Snoep", "Thee"])

</script>

<template>
 <table>
  <th>Artikel</th>
  <th>Aantal</th>
  <th>Prijs</th>
  <th>Subtotaal</th>
  <tr v-for="item in groceries">
    <td >{{ item }}</td>
    <td><input class="amount" type="text"></td>
    <td><input class="price" type="text"></td>
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
    <td class="bold"> 12,50 </td>
  </tr>
 </table>
</template>
