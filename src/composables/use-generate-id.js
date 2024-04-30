import { computed } from "vue";

export function useGenerateId(name) {
  const randomId = Math.round(Math.random() * 100);
  const fieldId = computed(() => `${randomId}-id-${name}`);

  return {
    fieldId
  };
}