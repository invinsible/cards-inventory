<script setup>
  import { useGenerateId } from '@/composables/use-generate-id';
  const props = defineProps({
    name: String,
    placeholder: String,
    label: String,
    errorText: String,
  });
  const model = defineModel();

  const { fieldId } = useGenerateId(props.name);
</script>

<template>
  <div>
    <label :for="fieldId" class="block">{{ label }}</label>
    <textarea
      v-model="model"
      :id="fieldId"
      :name="name"
      :placeholder="placeholder"
      class="border"
    >
    </textarea>
    <p
      v-if="errorText !== undefined"
      class="text-xs text-red-600"
    >
      {{ errorText }}
    </p>
  </div>  
</template>