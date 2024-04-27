<script setup>
import { ref } from 'vue';
// import { useRoute } from 'vue-router';
import { sortingList } from '@/const/sorting';
import CustomSelect from '../UI/CustomSelect/CustomSelect.vue';

const currentSort = ref('+amount');
// const route = useRoute();

function setSort(value) {
  console.log(value);
}
</script>

<template>
  <div class="flex items-top mb-2">
    <p class="text-sm mr-2">Сортировать: {{ currentSort }}</p>
    <CustomSelect :options="sortingList" @update:modelValue="setSort" />
    <!-- <input
      @input="(event) => (testModel = event.target.value)"
      :value="testModel"
      class="border"
    /> -->
  </div>
</template>
