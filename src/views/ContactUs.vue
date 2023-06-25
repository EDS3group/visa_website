<template>
  <div class="auth">
    <Teleport to="body">
      <Dialog
        v-model:visible="showMessage"
        :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
        :style="{ width: '50vw' }"
        position="top"
      >
        <div class="d-flex align-items-center flex-column pt-6 px-3">
          <i
            class="pi pi-check-circle"
            :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
          ></i>
          <h5>{{ $t('message send Successful') }}!</h5>
          <p :style="{ lineHeight: 1.5, textIndent: '1rem' }"></p>
        </div>
        <template #footer>
          <div class="flex justify-content-center">
            <Button label="OK" @click="toggleDialog" class="p-button-text" />
          </div>
        </template>
      </Dialog>
    </Teleport>
    <div class="header text-center my-4">
      <h2>
        {{ $t('welcome to') }}
        <span>Visa</span>
      </h2>
      <p>
        {{ $t('contact with us') }}
      </p>
    </div>

    <div class="flex justify-content-center">
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div class="field">
          <div class="p-float-label p-input-icon-left">
            <i class="fal fa-user" />
            <InputText
              id="name"
              v-model="v$.name.$model"
              :class="{ 'p-invalid': v$.name.$invalid && submitted }"
            />

            <label
              for="name"
              :class="{ 'p-error': v$.name.$invalid && submitted }"
            >
              {{ $t('enter your  name') }}
            </label>
          </div>
          <small
            v-if="(v$.name.$invalid && submitted) || v$.name.$pending.$response"
            class="p-error"
          >
            {{ v$.name.required.$message.replace('Value', 'Name') }}
          </small>
        </div>

        <div class="field">
          <div class="p-float-label p-input-icon-left">
            <i class="pi pi-envelope" />
            <InputText
              type="email"
              id="email"
              v-model="v$.email.$model"
              :class="{ 'p-invalid': v$.email.$invalid && submitted }"
              aria-describedby="email-error"
            />
            <label
              for="email"
              :class="{ 'p-error': v$.email.$invalid && submitted }"
            >
              {{ $t('enter your email address') }}
            </label>
          </div>
          <span v-if="v$.email.$error && submitted">
            <span
              id="email-error"
              v-for="(error, index) of v$.email.$errors"
              :key="index"
            >
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
          <small
            v-else-if="
              (v$.email.$invalid && submitted) || v$.email.$pending.$response
            "
            class="p-error"
          >
            {{ v$.email.required.$message.replace('Value', 'Email') }}
          </small>
        </div>
        <div class="field">
          <div class="p-float-label p-input-icon-left">
            <i class="fal fa-phone" />
            <InputNumber
              :useGrouping="false"
              v-model="v$.phone.$model"
              :class="{ 'p-invalid': v$.phone.$invalid && submitted }"
              aria-describedby="email-error"
            />
            <label
              for="email"
              :class="{ 'p-error': v$.phone.$invalid && submitted }"
            >
              {{ $t('enter your phone ') }}
            </label>
          </div>
          <span v-if="v$.phone.$error && submitted">
            <span
              id="email-error"
              v-for="(error, index) of v$.email.$errors"
              :key="index"
            >
              <small class="p-error">{{ error.$message }}</small>
            </span>
          </span>
          <small
            v-else-if="
              (v$.phone.$invalid && submitted) || v$.phone.$pending.$response
            "
            class="p-error"
          >
            {{ v$.phone.required.$message.replace('Value', 'Phone') }}
          </small>
        </div>
        <div class="field">
          <div class="p-float-label p-input-icon-left">
            <i class="pi pi-verified" />
            <InputText v-model="form.company" />
            <label for="email">
              {{ $t('company name') }}
            </label>
          </div>
        </div>

        <div class="field">
          <label
            for="name"
            :class="{ 'p-error': v$.message.$invalid && submitted }"
          >
            {{ $t('enter your message') }}
          </label>
          <textarea
            id="textarea-plaintext"
            rows="4"
            cols="30"
            v-model="v$.message.$model"
            :class="{ 'p-invalid': v$.message.$invalid && submitted }"
          ></textarea>
          <small
            v-if="
              (v$.message.$invalid && submitted) ||
              v$.message.$pending.$response
            "
            class="p-error"
          >
            {{ v$.message.required.$message.replace('Value', 'Message') }}
          </small>
        </div>

        <Button
          type="submit"
          label="Submit"
          class="mt-4 mainButton"
          :loading="loading"
        />
      </form>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import axios from 'axios'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { ref, reactive, computed } from 'vue'

const router = useRouter()
const form = reactive({
  name: null,
  phone: null,
  email: null,
  company: null,
  message: null,
})

const loading = ref(false)
const rules = computed(() => {
  return {
    name: { required },
    phone: { required },

    email: { required, email },
    message: { required },
  }
})

const submitted = ref(false)
const showMessage = ref(false)

const v$ = useVuelidate(rules, form)

const handleSubmit = (isFormValid) => {
  submitted.value = true

  if (!isFormValid) {
    return
  }
  loading.value = true
  const frmData = new FormData()
  frmData.append('name', form.name)
  frmData.append('email', form.email)
  frmData.append('phone', form.phone)
  frmData.append('company_name', form.company)
  frmData.append('message', form.message)
  axios
    .post('auth/contact-us', frmData)
    .then((data) => {
      loading.value = false
      // toast.add({
      //   severity: 'success',
      //   summary: 'Info Message',
      //   detail: data.data.msg,
      //   life: 3000,
      // })
      if (data.data.status == true) {
        toggleDialog()
      }
      // setTimeout(() => {
      //   router.push('/client-area/orders')
      // }, 3000)
    })
    .catch((err) => {
      console.log(err)
      loading.value = false
    })
}
const toggleDialog = () => {
  showMessage.value = !showMessage.value

  if (!showMessage.value) {
    router.push('/')
    resetForm()
  }
}
const resetForm = () => {
  form.name = null
  form.phone = null
  form.email = null
  form.company = null
  form.message = null
  submitted.value = false
}
</script>

<style lang="scss"></style>
