<script setup>
const colorsMap = {
  red: 'bg-red-400',
  blue: 'bg-blue-400',
  green: 'bg-green-400',
  pink: 'bg-pink-400'
};
import { computed } from 'vue';

const props = defineProps({
  color: String
});

const deckColor = computed(() => colorsMap[props.color]);
</script>

<template>
  <div :class="`w-40 h-60 ${deckColor}`"></div>
</template>
