<script setup>
import { useRoute, useRouter } from 'vue-router';
import { sortingList } from '@/const/sorting';
import CustomSelect from '../UI/CustomSelect/CustomSelect.vue';

const route = useRoute();
const router = useRouter();

function setSort(value) {
  router.push({ query: { ...route.query, sorting: value } });
}
</script>

<template>
  <div class="flex items-top mb-2">
    <p class="text-sm mr-2">Сортировать:</p>
    <CustomSelect :options="sortingList" @update:modelValue="setSort" />
  </div>
</template>
