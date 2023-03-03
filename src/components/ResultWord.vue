<template>

</template>

<script>
export default {
  name: "ResultWord"
    data() {
    return {
      word: [],
      textWord: '',
      phonetic: '',
      phoneticSound: '',
      sourcerUrl: '',
      nouns: {
        definitions: [],
        synonyms: []
      },
      verbs: {
        definitions: [],
        synonyms: []
      },
    }
  },
  methods: {
    getTextPhoneticAndWord: function () {
      this.word.forEach((current) => {
        this.textWord = current['word'];
        this.phonetic = current['phonetic'];
      });
    },
    getPhoneticSound: function () {
      this.word.forEach((value) => {
        let phonetics = value['phonetics'];
        let isModify = false;
        phonetics.forEach((phonetic) => {
          if(phonetic['audio'].trim() !== ""){
            this.phoneticSound = phonetic['audio'];
            isModify = true;
          }
        })
        isModify === false ? this.phoneticSound = '' : ''
      });
    },
    getSourceUrl: function () {
      this.word.forEach((currentWord) => {
        let url, rest;
        [url, ...rest] = currentWord['sourceUrls'];
        this.sourcerUrl = url;
      })
    },
    filterNounAndVerbOfWord: function () {
      this.word.forEach((current) => {
        let meanings = [];
        meanings = current['meanings'];
        for (const meaning of meanings) {
          console.log('Part of speech: ', meaning['partOfSpeech']);
          if (meaning['partOfSpeech'] === 'noun') {
            this.nouns.definitions = [...meaning['definitions']];
            this.nouns.synonyms = [...meaning['synonyms']];
          } else if (meaning['partOfSpeech'] === 'verb') {
            this.verbs.definitions = [...meaning['definitions']];
          }
        }
        console.log('Nouns: ', this.nouns, 'Verb: ', this.verb);
      })
    }
  },
  created() {
    this.emitter.on('fetch-word', (evt) => {
      this.word = evt.restWord;
      this.getTextPhoneticAndWord();
      this.getPhoneticSound();
      this.getSourceUrl();
      this.filterNounAndVerbOfWord();
    })
  },
  computed: {}
}
}
</script>

<style scoped>

</style>