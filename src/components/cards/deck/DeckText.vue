<script setup>
defineProps({
  title: {
    type: String,
    default: 'Без названия'
  },
  amount: Number
});
</script>

<template>
  <div class="px-2 py-2">
    <h3 class="font-bold text-sm">{{ title }}</h3>
    <p>Количество: {{ amount }}</p>
  </div>
</template>
