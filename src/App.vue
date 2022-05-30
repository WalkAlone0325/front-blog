<script setup lang="ts">
useHead({
  meta: [{ property: 'og:title', content: 'Nebula Jing' }]
})
</script>

<template>
  <NavBar />
  <main class="px-7 py-10">
    <router-view />
  </main>
</template>
