<template>
  <form class="pure-form" id="form__search">
    <input
        type="text"
        @input="loadWord"
        v-model="inputValue"
        :name="inputSearch.name"
        :placeholder="inputSearch.placeholder"
        :id="inputSearch.id"
        class="pure-input-1">
    <div aria-hidden="true">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass"/>
    </div>
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
      word: "empty",
      // restWord: null,
    }
  },
  methods: {
    async loadWord() {
      this.inputValue = this.inputValue.trim();
      const formSearch = document.getElementById("form__search");
      if (this.inputValue !== '') {
        formSearch.classList.remove('empty__input');
        await this.fetchWord(this.inputValue);
      } else {
        this.word = "empty";
        formSearch.classList.add('empty__input');
      }
      this.emitter.emit('fetch-word', {restWord: this.word});
    },
    async fetchWord(word) {
      console.log('Synonym:' ,word);
      try {
        let endpoint = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const res = await axios.get(endpoint);
        this.word = [...res.data];
      } catch (error) {
        console.error("La palabra es incorrecta");
        this.word = [];
      }
      this.emitter.emit('fetch-word', {restWord: this.word});
    }
  },
  computed: {},
  async mounted() {

  },
  created() {
    this.emitter.on('search-synonym', (event) => {
      this.fetchWord(event.synonymWord);
    })
  }
}
</script>

<style scoped>
form.pure-form {
  margin-bottom: 5rem;
  display: flex;
  justify-content: space-between;
  position: relative;
}

form.pure-form.empty__input {
  margin-bottom: 0;
}

form.pure-form.empty__input input {
  border: 1px solid #ff5252;
}

form.pure-form input {
  border-radius: .5rem;
  background: #f4f4f4;
  display: block;
  border: none;
  height: 50px;
  padding: 1rem 3rem 1rem 1rem;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  box-shadow: none;
}

form.pure-form div {
  position: absolute;
  top: 0;
  right: 0;
  width: 50px;
  height: 100%;
  border: none;
  background: none;
  color: #A445ED;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>