<script setup>
import TheHeader from './components/header/TheHeader.vue';
</script>

<template>
  <div class="w-3/5 m-auto bg-white rounded-xl shadow-xl mt-14">
    <TheHeader />
    <RouterView />
  </div>
</template>

<style scoped></style>
