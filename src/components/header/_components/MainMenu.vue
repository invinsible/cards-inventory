<script setup>
import { routes } from '@/const/mainMenu';
</script>

<template>
  <ul class="flex items-center gap-6">
    <li v-for="route in routes" :key="route.id">
      <a :href="route.route" class="flex items-center gap-2 text-slate-500">
        <img :src="`/images/${route.icon}.svg`" :alt="route.title" />
        {{ route.title }}
      </a>
    </li>
  </ul>
</template>
