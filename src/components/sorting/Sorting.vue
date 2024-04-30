<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { sortingList, sortingValues } from '@/const/sorting';
import CustomSelect from '../UI/CustomSelect/CustomSelect.vue';

const emit = defineEmits(['emitSort']);


const route = useRoute();
const router = useRouter();
const currentSort = ref(sortingValues.amountMax);

function setSort(value) {
  currentSort.value = value;
  router.push({ query: { ...route.query, sorting: value } });
}

onMounted(() => {
  if(route.query.sorting) {
    currentSort.value = route.query.sorting;
  }
});

watch(
  () => route.query,
  (value) => emit('emitSort', value.sorting),
  { immediate: true }
);
</script>

<template>
  <div class="flex items-top mb-2">
    <p class="text-sm mr-2">Сортировать:</p>
    <CustomSelect :options="sortingList" @update:modelValue="setSort" :modelValue="currentSort" />
  </div>
</template>
