<script setup>
import DummyDeck from '../dummyDeck/DummyDeck.vue';
import ItemText from './DeckText.vue';

defineProps({
  deck: {
    type: Object,
    default() {
      return {};
    }
  }
});
</script>

<template>
  <div
    class="w-40 relative border border-slate-200 rounded-md cursor-pointer drop-shadow-lg overflow-hidden"
  >
    <!-- <img src="/images/like-2.svg" class="asolute top-8 left-0" /> -->
    <DummyDeck :color="deck.color" />
    <ItemText :title="deck.title" :amount="deck.amount" />
  </div>
</template>
