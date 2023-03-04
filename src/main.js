import {createApp} from 'vue'
import mitt from 'mitt'
import App from './App.vue'
import {library} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {faArrowUpRightFromSquare, faBook, faMoon, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './style.css'
const icons = [
    faArrowUpRightFromSquare,
    faBook,
    faMoon,
    faMagnifyingGlass
]
library.add(icons)


const emitter = mitt()
const app = createApp(App)

app.config.globalProperties.emitter = emitter
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')