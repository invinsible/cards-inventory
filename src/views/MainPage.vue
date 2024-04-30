<script setup>
import { ref, onMounted } from 'vue';
import { mockupCards } from '@/const/mockupCards';

import CardsList from '@/components/cards/cardsList/CardsList.vue';
import Sorting from '@/components/sorting/Sorting.vue';
import SystemMessage from '@/components/UI/SystemMessage/SystemMessage.vue';

const isLoading = ref(true);
const isError = ref(false);
const decks = ref([]);

const getData = async (params) => {
  console.log('параметры', params);
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
};

onMounted(getData);
</script>

<template>
  <main class="px-8 py-6">
    <h1 class="font-bold text-xl mb-5">Все карты</h1>
    <p v-if="isLoading">Загружаем данные...</p>
    <Sorting v-if="decks.length > 0" @emitSort="(value) => console.log(value)"/>
    <CardsList :decks="decks" v-if="decks.length > 0" />
    <SystemMessage v-if="isError" text="Что-то пошло не так" isError/>
    <SystemMessage v-if="decks.length == 0 && !isLoading && !isError" text="Ничего не найдно" isDefault />
  </main>
</template>
