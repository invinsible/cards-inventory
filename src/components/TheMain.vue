<script setup>
import CardsList from './cards/cardsList/CardsList.vue';
import Sorting from './sorting/Sorting.vue';
import { mockupCards } from '@/const/mockupCards';
</script>

<template>
  <main class="px-8 py-6">
    <h1 class="font-bold text-xl mb-5">Все карты</h1>
    <Sorting />
    <CardsList :decks="mockupCards" />
  </main>
</template>
