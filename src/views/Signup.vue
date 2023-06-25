<template>
  <div class="auth">
    <div class="header text-center my-4">
      <h2>
        {{ $t('welcome to') }}
        <span>Visa</span>
      </h2>
      <p>
        {{ $t('you have an account?') }}
        <router-link to="/login">{{ $t('login') }}</router-link>
      </p>
    </div>

    <div class="flex justify-content-center">
      <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
        <div class="field">
          <div class="p-float-label p-input-icon-right">
            <i class="pi pi-user"></i>
            <InputText
              id="first_name"
              v-model="v$.first_name.$model"
              :class="{ 'p-invalid': v$.first_name.$invalid && submitted }"
            />
            <label
              for="first_name"
              :class="{ 'p-error': v$.first_name.$invalid && submitted }"
            >
              {{ $t('enter your first name') }}
            </label>
          </div>
          <small
            v-if="
              (v$.first_name.$invalid && submitted) ||
              v$.first_name.$pending.$response
            "
            class="p-error"
          >
            {{ v$.first_name.required.$message.replace('Value', 'First name') }}
          </small>
        </div>
        <div class="field">
          <div class="p-float-label p-input-icon-right">
            <i class="pi pi-user"></i>
            <InputText
              id="last_name"
              v-model="v$.last_name.$model"
              :class="{ 'p-invalid': v$.last_name.$invalid && submitted }"
            />
            <label
              for="last_name"
              :class="{ 'p-error': v$.last_name.$invalid && submitted }"
            >
              {{ $t('enter your last name') }}
            </label>
          </div>
          <small
            v-if="
              (v$.last_name.$invalid && submitted) ||
              v$.last_name.$pending.$response
            "
            class="p-error"
          >
            {{ v$.last_name.required.$message.replace('Value', 'Last name') }}
          </small>
        </div>
        <div class="field">
          <div class="p-float-label p-input-icon-right">
            <i class="pi pi-envelope" />
            <InputText
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
          <div class="p-float-label p-input-icon-right">
            <i class="pi pi-phone" />
            <InputNumber
              :useGrouping="false"
              id="phone"
              v-model="v$.phone.$model"
              :class="{ 'p-invalid': v$.phone.$invalid && submitted }"
              aria-describedby="email-error"
            />
            <label
              for="email"
              :class="{ 'p-error': v$.phone.$invalid && submitted }"
            >
              {{ $t('enter your phone number') }}
            </label>
          </div>
          <span v-if="v$.phone.$error && submitted">
            <span
              id="phone-error"
              v-for="(error, index) of v$.phone.$errors"
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
            {{ v$.phone.required.$message.replace('Value', 'Email') }}
          </small>
        </div>
        <div class="field">
          <div class="p-float-label">
            <Password
              id="password"
              v-model="v$.password.$model"
              :class="{ 'p-invalid': v$.password.$invalid && submitted }"
              toggleMask
            >
              <template #header>
                <h6>Pick a password</h6>
              </template>
              <template #footer="sp">
                {{ sp.level }}
                <Divider />
                <p class="mt-2">Suggestions</p>
                <ul class="pl-2 ml-2 mt-0" style="line-height: 1.5;">
                  <li>At least one lowercase</li>
                  <li>At least one uppercase</li>
                  <li>At least one numeric</li>
                  <li>Minimum 8 characters</li>
                </ul>
              </template>
            </Password>
            <label
              for="password"
              :class="{ 'p-error': v$.password.$invalid && submitted }"
            >
              {{ $t('enter password') }}
            </label>
          </div>
          <small
            v-if="
              (v$.password.$invalid && submitted) ||
              v$.password.$pending.$response
            "
            class="p-error"
          >
            {{ v$.password.required.$message.replace('Value', 'Password') }}
          </small>
        </div>
        <div class="field">
          <div class="p-float-label">
            <Password
              id="password"
              v-model="v$.cPassword.$model"
              :class="{ 'p-invalid': v$.cPassword.$invalid && submitted }"
              toggleMask
              :feedback="false"
            ></Password>
            <label
              for="password"
              :class="{ 'p-error': v$.cPassword.$invalid && submitted }"
            >
              {{ $t('enter confirm password') }}
            </label>
          </div>

          <div
            v-if="
              (v$.cPassword.$invalid && submitted) ||
              v$.cPassword.$pending.$response
            "
          >
            <small v-if="v$.password.required" class="p-error">
              {{ v$.password.required.$message.replace('Value', 'Password') }}
            </small>
            <br />
            <small v-if="v$.cPassword.sameAsPassword?.$message" class="p-error">
              {{
                v$.cPassword.sameAsPassword.$message.replace(
                  'value',
                  'cPassword',
                )
              }}
            </small>
          </div>
        </div>
        <div class="field">
          <textarea
            id="textarea-plaintext"
            :value="tearm"
            rows="4"
            cols="30"
            disabled
          ></textarea>
        </div>
        <div class="field-checkbox">
          <Checkbox
            id="accept"
            name="accept"
            value="Accept"
            v-model="v$.tearm.$model"
            :class="{ 'p-invalid': v$.tearm.$invalid && submitted }"
          />
          <label
            for="accept"
            class="ms-1 mb-0"
            :class="{ 'p-error': v$.tearm.$invalid && submitted }"
          >
            {{ $t('I agree to the terms and conditions') }}*
          </label>
        </div>
        <Button type="submit" label="Submit" class="mt-4 mainButton" />
      </form>
    </div>
  </div>
</template>

<script setup>
import { email, required, sameAs } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { ref, reactive, computed } from 'vue'
import store from '@/store'
const form = reactive({
  first_name: '',
  last_name: '',
  email: '',
  phone: null,
  password: '',
  cPassword: '',
  tearm: null,
})
const tearm =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quibusdam veritatis veniam! Accusantium vel, sunt architecto totam ducimus minima? Facere pariatur aut nesciunt similique earum, officiis dolor animi perspiciatis sint.'

const rules = computed(() => {
  return {
    first_name: { required },
    last_name: { required },
    phone: { required },
    email: { required, email },
    tearm: { required },
    password: { required },
    cPassword: {
      required,
      sameAsPassword: sameAs(form.password),
    },
  }
})

const submitted = ref(false)
// const showMessage = ref(false)

const v$ = useVuelidate(rules, form)

const handleSubmit = (isFormValid) => {
  submitted.value = true

  if (!isFormValid) {
    return
  }

  store.dispatch('register', form)
}
// const toggleDialog = () => {
//   showMessage.value = !showMessage.value

//   if (!showMessage.value) {
//     resetForm()
//   }
// }
// const resetForm = () => {
//   form.email = ''
//   form.password = ''

//   submitted.value = false
// }
</script>

<style lang="scss"></style>
