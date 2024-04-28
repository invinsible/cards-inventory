<script setup>
import Deck from '../deck/Deck.vue';
defineProps(['decks']);
</script>

<template>
  <div class="flex items-top gap-4 flex-wrap mb-4">
    <Deck v-for="deck in decks" :key="deck.id" :deck="deck" />
  </div>
</template>
