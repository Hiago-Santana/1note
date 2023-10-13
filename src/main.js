import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import viewNoteTeste from './components/viewNoteTeste.vue'
import LogInSignUp from './components/LogInSignUp.vue'

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
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

//<font-awesome-icon icon="fa-solid fa-x" /> />
//<font-awesome-icon icon="fa-solid fa-plus" />


/* add icons to the library */
library.add(faUserSecret, faXmark, faTrash, faCirclePlus, faArrowLeft, faListCheck, faX, faPlus)


const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);
app.component('teste',viewNoteTeste);

app.component('login-signup',LogInSignUp);
//app.use(LogInSignUp)
app.mount('#app');


