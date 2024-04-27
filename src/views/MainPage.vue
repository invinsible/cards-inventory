<script setup>
import CardsList from '@/components/cards/cardsList/CardsList.vue';
import Sorting from '@/components/sorting/Sorting.vue';
import { mockupCards } from '@/const/mockupCards';
import { watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const decks = ref(mockupCards);

watch(
  () => route.query,
  (newVal) => {
    if (newVal.sorting === '+amount') {
      console.log('сортируем сначал большие');
    }
    if (newVal.sorting === '-amount') {
      console.log('сортируем сначал маленькие');
    }
  }
);
</script>

<template>
  <main class="px-8 py-6">
    <h1 class="font-bold text-xl mb-5">Все карты</h1>
    <Sorting />
    <CardsList :decks="decks" />
  </main>
</template>
