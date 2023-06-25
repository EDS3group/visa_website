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

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="first_name"
        :label="$t('first name')"
        label-for="first_name"
      >
        <b-form-input
          id="first_name"
          v-model="form.first_name"
          type="text"
          :placeholder="$t('enter your first name')"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="last name"
        :label="$t('last name')"
        label-for="last_name"
      >
        <b-form-input
          id="last_name"
          v-model="form.last_name"
          type="text"
          :placeholder="$t('enter your last name')"
          required
        ></b-form-input>
      </b-form-group>
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
          :placeholder="$t('enter password')"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group
        id="input-group-2"
        :label="$t('cPassword')"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="password"
          v-model="form.cPassword"
          :placeholder="$t('enter confirm password')"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4">
        <b-form-textarea
          id="textarea-plaintext"
          :value="form.tearm"
          max-rows="3"
          class="mb-3"
        ></b-form-textarea>
        <b-form-checkbox v-model="tearms">{{ $t('agree') }}</b-form-checkbox>
      </b-form-group>

      <b-button type="submit" class="mainButton w-100">
        {{ $t('sign up') }}
      </b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        cPassword: '',
        tearms: false,
        tearm:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos quibusdam veritatis veniam! Accusantium vel, sunt architecto totam ducimus minima? Facere pariatur aut nesciunt similique earum, officiis dolor animi perspiciatis sint.',
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

<style lang="scss">
.login {
  padding: 20px;
  max-width: 500px;
  margin: auto;
}
</style>
