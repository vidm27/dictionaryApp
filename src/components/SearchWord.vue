<template>
  <form class="pure-form">
    <input
        type="text"
        @input="loadWord"
        v-model="inputValue"
        :name="inputSearch.name"
        :placeholder="inputSearch.placeholder"
        :id="inputSearch.id"
        class="pure-input-1">
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: "SearchWord",
  data() {
    return {
      api_dictionary: 'https://api.dictionaryapi.dev/api/v2/entries/en/',
      inputSearch: {
        id: "search__word",
        name: "search__word",
        placeholder: "Enter a word"
      },
      inputValue: "",
      word: [],
      // restWord: null,
    }
  },
  methods: {
    async loadWord() {
      try {
        this.inputValue = this.inputValue.trim();
        let endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${this.inputValue}`;
        const res = await axios.get(endpoint);
        console.log(res.data);
        this.word = [...res.data];
      } catch (error) {
        // console.error(error);
        console.error("La palabra es incorrecta");
        this.word = [];
      }
      this.emitter.emit('fetch-word', {restWord: this.word});
    }
  },
  computed: {},
  async mounted() {

  }
}
</script>

<style scoped>

</style>