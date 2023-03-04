import {createApp} from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import './style.css'
/* import the fontawesome core */
import {library} from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'

/* import specific icons */
import {faArrowUpRightFromSquare, faBook, faMoon} from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
const icons = [
    faArrowUpRightFromSquare,
    faBook,
    faMoon
]
library.add(icons)


const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')