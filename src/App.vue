<script setup>
import { ref } from 'vue'

</script>

<template>
  <nav>
    <RouterLink class="routerlink" to="/">Go to Overview</RouterLink>
    <RouterLink class="routerlink" to="/create">Go to Create</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>


