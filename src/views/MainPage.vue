<script setup>
import { watch, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { mockupCards } from '@/const/mockupCards';

import CardsList from '@/components/cards/cardsList/CardsList.vue';
import Sorting from '@/components/sorting/Sorting.vue';
import SystemMessage from '@/components/UI/SystemMessage/SystemMessage.vue';

const route = useRoute();
const isLoading = ref(true);
const isError = ref(false);
const decks = ref([]);

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

onMounted(async () => {
  try {
    isError.value = false;
    isLoading.value = true;
    // Иммитация получения данных с бэкэнда
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    console.log(data);
    decks.value = mockupCards;
  } catch (error) {
    isError.value = true;
  } finally {
    isLoading.value = false;
  }
});
</script>

<template>
  <main class="px-8 py-6">
    <h1 class="font-bold text-xl mb-5">Все карты</h1>
    <p v-if="isLoading">Загружаем данные...</p>    

    <Sorting v-if="decks.length > 0" />
    <CardsList :decks="decks" v-if="decks.length > 0" />

    <SystemMessage v-if="isError" text="Что-то пошло не так" isError/>
    <SystemMessage v-if="decks.length == 0 && !isLoading && !isError" text="Ничего не найдно" isDefault />
    
  </main>
</template>
