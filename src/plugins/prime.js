import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import ToastService from 'primevue/toastservice'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Checkbox from 'primevue/checkbox'
import Password from 'primevue/password'
import Dropdown from 'primevue/dropdown'
import Calendar from 'primevue/calendar'
import Steps from 'primevue/steps'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const prime = createApp(App)

prime.use(PrimeVue)
prime.use(ToastService)
// prime.use(PrimeV)

prime.component('Dialog', Dialog)
prime.component('InputText', InputText)
prime.component('Button', Button)
prime.component('Password', Password)
prime.component('Dropdown', Dropdown)
prime.component('Steps', Steps)
prime.component('Calendar', Calendar)
prime.component('Checkbox', Checkbox)

export default prime
