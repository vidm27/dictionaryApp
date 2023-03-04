<template>
  <div v-if="word === 'empty'">
    <span class="empty__text">Whoops, can’t be empty…</span>
  </div>
  <div v-else-if="word.length === 0" id="definition__not__found">
    <span class="sad__icon">😕</span>
    <h3 class="not__found">No Definitions Found</h3>
    <p>Sorry pal, we couldn't find definitions for the word you were looking for. You can try the search again at later
      time or head to the web instead.</p>
  </div>
  <div v-else id="definition__found">
    <div class="word__container">
      <div class="word">
        <h1>{{ textWord }}</h1>
        <h5>{{ phonetic }}</h5>
      </div>
      <button @click="playSound" type="button" class="btn__play__sound">
        <img src="../assets/icon-play.svg" alt="play">
      </button>
    </div>
    <div class="content__info">
      <div class="section__divider">
        <span>
          noun
        </span>
        <hr>
      </div>
      <div class="meanings">
        <p class="label">Meaning:</p>
        <ul class="list__meaning" v-for="noun in nouns.definitions">
          <li class="option__meaning">{{ noun['definition'] }}</li>
        </ul>
      </div>
      <div id="synonyms">
        <span class="label">
          Synonyms
        </span>
        <div class="result__synonyms" v-for="synonym in nouns.synonyms">
          <span>{{ synonym }} </span>
        </div>
      </div>
    </div>
    <div class="content__info">
      <div class="section__divider">
        <span>
          verb
        </span>
        <hr>
      </div>
      <p class="label">Meaning</p>
      <ul class="list__meaning" v-for="verb in verbs.definitions">
        <li class="option__meaning">{{ verb['definition'] }}</li>
      </ul>
    </div>
    <hr>
    <div class="link__source"><span>
      Source
    </span>
      <a :href="sourcerUrl" target="_blank">{{ sourcerUrl }}
        <font-awesome-icon icon="fa-solid fa-arrow-up-right-from-square"/>
      </a></div>
  </div>
</template>
<script>
export default {
  name: "ResultWord",
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
          if (phonetic['audio'].trim() !== "") {
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
    },
    playSound: function () {
      let audio = new Audio(this.phoneticSound);
      audio.play();
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
</script>
<style scoped>
#definition__found, #definition__not__found {
//font-family: 'Inter';
}

.label {
  font-weight: 400;
  color: #757575;
  font-size: 1.05em;
}

.list__meaning {
  color: #2D2D2D;
  line-height: 1.5;
}

.list__meaning li::marker {
  color: #8F19E8;
}
#definition__found h1 {
  font-size: 4rem;
  margin-bottom: 0;
  color: #2D2D2D;
}

#definition__found h5 {
  font-size: 1.2em;
  margin: 0;
  color: #A445ED;
  font-weight: 400;
}
.empty__text{
  color: #ff5252;
}
#definition__found div.word__container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  justify-items: center;
  margin-bottom: 3rem;
}

.content__info {
  margin-bottom: 1.5rem;
}

.content__info .meanings {
  margin-bottom: 2.5rem;
}

#synonyms {
  display: flex;
}

#synonyms .result__synonyms {
  margin-right: .6rem;
  margin-left: .6rem;
  font-weight: bold;
  color: #A445ED;
}

.link__source {
  color: #757575;
  font-weight: 400;
  font-size: 14px;
}

.link__source span {
  text-decoration: underline;
  margin-right: 1.2rem;
}

.link__source a {
  color: #757575;
}

.section__divider {
  display: flex;
  margin-bottom: 2rem;
}

.section__divider span {
  margin-right: 1.1rem;
  font-weight: bold;
  font-style: italic;
  font-size: 1.5rem;

}

hr {
  height: 1px;
  background: #e9e9e9;
  width: 100%;
  border: none;
  margin-top: .8rem;
}

.section__divider div {

}

#definition__not__found {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#definition__not__found .sad__icon {
  font-size: 5rem;
}

#definition__not__found .not__found {
  font-weight: bold;
  font-size: 1.6em;
}

#definition__not__found p {
  color: #757575;
  text-align: center;
  font-size: 1.2rem;
}

.btn__play__sound {
  border: none;
  background: none;
}
</style>