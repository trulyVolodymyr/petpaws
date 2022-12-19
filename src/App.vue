<template>
  <div class="max-w-[1440px] mx-auto flex relative">
    <Nav class="fixed" />
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import Nav from './views/nav/Nav.vue'
</script>
