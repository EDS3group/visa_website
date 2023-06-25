<template>
  <div class="auth">
    <div class="header text-center my-4">
      <h2>
        {{ $t('welcome to') }}
        <span>Visa</span>
      </h2>
      <p>
        {{ $t('dont have an account?') }}
        <router-link to="/sign-up">{{ $t('buttons.sign up') }}</router-link>
      </p>
    </div>

    <form @submit.prevent="handleSubmit(!v$.$invalid)" class="p-fluid">
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
            {{ $t('labels.Email address') }} *
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
          <Password
            id="password"
            v-model="v$.password.$model"
            :class="{ 'p-invalid': v$.password.$invalid && submitted }"
            :feedback="false"
          ></Password>
          <label
            for="password"
            :class="{ 'p-error': v$.password.$invalid && submitted }"
          >
            {{ $t('labels.password') }} *
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
      <div class="d-flex justify-content-between">
        <div class="field-checkbox d-flex align-items-center">
          <Checkbox
            inputId="remember"
            name="remember"
            value="false"
            v-model="form.remember"
          />

          <label for="remember" class="mx-2">
            {{ $t('labels.remember me') }}
          </label>
        </div>
        <router-link to="/reset-password">
          {{ $t('labels.forget password') }}
        </router-link>
      </div>

      <Button
        type="submit"
        :label="$t('buttons.sign in')"
        class="mt-4 mainButton"
      />
    </form>
  </div>
</template>

<script setup>
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { ref, reactive } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const form = reactive({
  email: '',
  password: '',
  remember: false,
})

const rules = {
  email: { required, email },
  password: { required },
}

const submitted = ref(false)

const v$ = useVuelidate(rules, form)

const handleSubmit = (isFormValid) => {
  submitted.value = true

  if (!isFormValid) {
    return
  }
  store.dispatch('login', form)
}
</script>

<style lang="scss">
.p-checkbox:not(.p-checkbox-disabled) .p-checkbox-box:hover {
  border-color: $main-color;
}
</style>
