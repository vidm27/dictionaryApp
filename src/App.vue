<script setup>
import SearchWord from "./components/SearchWord.vue";
import ResultWord from "./components/ResultWord.vue";
import Setting from "./components/Setting.vue";
import 'purecss/build/pure.css';
</script>

<template>
  <div class="container">
    <Setting></Setting>
    <SearchWord></SearchWord>
    <ResultWord></ResultWord>
  </div>
</template>

<style scoped>
.container{
  max-width: 737px;
  margin: 0 auto;
  padding: 0 1em;
}
</style>
