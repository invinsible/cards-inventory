<script setup>
  const props = defineProps({
    text: String,
    isDefault: Boolean,
    isError: Boolean,
    isSuccess: Boolean,
  });

  const colors = {
    'text-red-600 border-red-500': props.isError,
    'text-green-600 border-green-500': props.isSuccess,
    'text-slate-600 border-slate-500': props.isDefault
  };

</script>

<template>
  <p class="text-sm px-4 py-1 border inline-block" :class="colors">
    {{ text }}
  </p>
</template>
