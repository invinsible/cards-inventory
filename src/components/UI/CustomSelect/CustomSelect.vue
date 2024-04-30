<script setup>
  defineProps({
    name: String,
    errorText: String,
    options: Array,
  });
  const model = defineModel();

</script>

<template>
  <select
    class="border"
    v-model="model"
    :name="name"
  >
    <option disabled value="">Не выбрано</option>
    <option v-for="element in options" :key="element.id" :value="element.value">
      {{ element.name }}
    </option>
  </select>
  <p
    v-if="errorText !== undefined"
    class="text-xs text-red-600"
  >
    {{ errorText }}
  </p>
</template>
