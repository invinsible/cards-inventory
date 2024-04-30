<script setup>
  import { useGenerateId } from '@/composables/use-generate-id';
  const props = defineProps({
    name: String,
    placeholder: String,
    label: String,
    type: {type: String, default: 'text'},
    errorText: String,
  });
  const model = defineModel();

  const { fieldId } = useGenerateId(props.name);

</script>

<template>
  <div>
    <label :for="fieldId" class="block">{{ label }}</label>
    <input
      v-model="model"
      :type="type"
      :id="fieldId"
      :name="name"
      :placeholder="placeholder"
      class="border"
    />
    <p
      v-if="errorText !== undefined"
      class="text-xs text-red-600"
    >
      {{ errorText }}
    </p>
  </div>
</template>