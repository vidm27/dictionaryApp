<script setup>
import SearchWord from "./components/SearchWord.vue";
import ResultWord from "./components/ResultWord.vue";
import 'purecss/build/pure.css';
</script>

<template>
  <div class="container">
    <SearchWord></SearchWord>
    <ResultWord></ResultWord>
  </div>
</template>

<style scoped>
.container{
  max-width: 737px;
  margin: 0 auto;
}
</style>
