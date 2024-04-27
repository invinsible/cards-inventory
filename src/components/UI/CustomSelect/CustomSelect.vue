<script setup>
defineProps(['options', 'modelValue']);
const emit = defineEmits(['update:modelValue']);
</script>

<template>
  <select
    class="border"
    :value="modelValue"
    @change="emit('update:modelValue', $event.target.value)"
  >
    <option v-for="element in options" :key="element.id" :value="element.value">
      {{ element.name }}
    </option>
  </select>
</template>
