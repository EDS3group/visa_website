import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/style/main.scss'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Antd from 'ant-design-vue'
import * as Antdi from '@ant-design/icons-vue'
import 'ant-design-vue/dist/antd.css'

import PrimeVue from 'primevue/config'

import Accordion from 'primevue/accordion'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import AccordionTab from 'primevue/accordiontab'
import Toast from 'primevue/toast'
import ToastService from 'primevue/toastservice'
import Dialog from 'primevue/dialog'
import Button from 'primevue/button'
import Card from 'primevue/card'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Checkbox from 'primevue/checkbox'
import Breadcrumb from 'primevue/breadcrumb'
import Password from 'primevue/password'
import Dropdown from 'primevue/dropdown'
import RadioButton from 'primevue/radiobutton'
import Calendar from 'primevue/calendar'
import Menu from 'primevue/menu'
import FileUpload from 'primevue/fileupload'
import Steps from 'primevue/steps'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'
import i18n from './i18n'
import BaseModel from './components/ui/BaseModel.vue'

// import Multiselect from '@vueform/multiselect'
// import '@vueform/multiselect/themes/default.css'

const app = createApp(App)

// axios.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response.status === 401) {
//       console.log('Not Auth')
//     }
//   },
// )

const TOKEN = localStorage.getItem('token')

axios.defaults.baseURL = 'http://visa.webautobazaar.com/api'
if (TOKEN) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${TOKEN}`
}
axios.defaults.headers.common['lang'] = i18n.global.locale

app.use(PrimeVue)
app.use(ToastService)

app.component('base-model', BaseModel)
app.component('Dialog', Dialog)
app.component('FileUpload', FileUpload)
app.component('InputText', InputText)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Breadcrumb', Breadcrumb)
app.component('Toast', Toast)
app.component('Accordion', Accordion)
app.component('AccordionTab', AccordionTab)
app.component('InputNumber', InputNumber)
app.component('Button', Button)
app.component('Card', Card)
app.component('RadioButton', RadioButton)
app.component('Password', Password)
app.component('Dropdown', Dropdown)
app.component('Steps', Steps)
app.component('Calendar', Calendar)
app.component('Checkbox', Checkbox)
app.component('Menu', Menu)
app.use(i18n)
app.use(Antd)
app.use(Antdi)
app.use(VueAxios, axios)
app.use(store)
app.use(router)
app.mount('#app')
