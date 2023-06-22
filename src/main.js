import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

//createApp(App).mount('#app')

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'


/* add icons to the library */
library.add(faUserSecret, faXmark, faTrash, faCirclePlus, faArrowLeft)


createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
