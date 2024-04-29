<script setup>
  defineProps({
    name: String,
    placeholder: String,
    label: String,
    errorText: String,
  });
  const model = defineModel('customInputValue');
</script>

<template>
  <div>
    <label :for="name" class="block">{{ label }}</label>
    <input 
      :id="name"
      v-model="model"
      :placeholder="placeholder"
      class="border"
    />
    <p
      v-if="errorText !== ''"
      class="text-xs text-red-600"
      >{{ errorText }}</p>
  </div>  
</template>