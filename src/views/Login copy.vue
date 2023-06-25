<template>
  <div class="auth">
    <div class="header text-center my-4">
      <h2>
        {{ $t('welcome to') }}
        <span>Visa</span>
      </h2>
      <p>
        {{ $t('dont have an account?') }}
        <router-link to="/sign-up">{{ $t('sign up') }}</router-link>
      </p>
    </div>
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      :wrapper-col="{ span: 16 }"
      autocomplete="off"
      @finish="onSubmit"
      @finishFailed="onSubmit"
    >
      <a-form-item
        label="Username"
        name="username"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.username" />
      </a-form-item>

      <a-form-item
        label="Password"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
        <a-checkbox v-model:checked="formState.remember">
          Remember me
        </a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
        <a-button type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        :label="$t('Email address')"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          :placeholder="$t('enter your email address')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        id="input-group-2"
        :label="$t('password')"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.password"
          :placeholder="$t('your password')"
          required
        ></b-form-input>
      </b-form-group>
      <div class="d-flex justify-content-between">
        <b-form-group id="input-group-4">
          <b-form-checkbox value="me">{{ $t('remember me') }}</b-form-checkbox>
        </b-form-group>
        <router-link to="/reset-password">
          {{ $t('forget password') }}
        </router-link>
      </div>

      <b-button type="submit" class="mainButton w-100">
        {{ $t('login') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      },

      show: true,
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      alert(JSON.stringify(this.form))
    },
  },
}
</script>

<style lang="scss"></style>
