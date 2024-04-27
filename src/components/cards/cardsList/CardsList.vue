<script setup>
import Deck from '../deck/Deck.vue';
import { mockupCards } from '@/const/mockupCards';
</script>

<template>
  <div class="flex items-top gap-4 flex-wrap">
    <Deck v-for="deck in mockupCards" :key="deck.id" :deck="deck" />
  </div>
</template>
