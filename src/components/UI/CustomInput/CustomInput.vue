<script setup>
import { ref } from 'vue';


const inputValue = ref('');

</script>

<template>
  <input class="border" :value="inputValue" @input="(event) => inputValue = event.target.value"/>
  <p>{{ inputValue }}</p>
</template>