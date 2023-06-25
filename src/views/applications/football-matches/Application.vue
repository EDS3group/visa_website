<template>
  <div class="container-xl">
    <transition name="fadeInUp">
      <div class="applicant">
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-md-6">
              <div class="order-details">
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="applicant_name"
                    :class="{
                      'p-error': v$.applicant_name.$invalid && submitted,
                    }"
                  >
                    {{ $t('applicant_name') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="pi pi-user" />
                    <InputText
                      :class="{
                        'p-invalid': v$.applicant_name.$invalid && submitted,
                      }"
                      v-model="form.applicant_name"
                      :placeholder="$t('applicant_name')"
                    ></InputText>
                  </div>
                  <span v-if="v$.applicant_name.$error && submitted">
                    <span
                      id="applicant_name-error"
                      v-for="(error, index) of v$.applicant_name.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.applicant_name.$invalid && submitted) ||
                      v$.applicant_name.$pending.$response
                    "
                    class="p-error"
                  >
                    {{
                      v$.applicant_name.required.$message.replace(
                        'Value',
                        'applicant name',
                      )
                    }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="email"
                    :class="{ 'p-error': v$.email.$invalid && submitted }"
                  >
                    {{ $t('email') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fal fa-envelope" />
                    <InputText
                      :class="{ 'p-invalid': v$.email.$invalid && submitted }"
                      v-model="form.email"
                      type="email"
                      :placeholder="$t('email')"
                    ></InputText>
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
                      (v$.email.$invalid && submitted) ||
                      v$.email.$pending.$response
                    "
                    class="p-error"
                  >
                    {{ v$.email.required.$message.replace('Value', 'Email') }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="phone"
                    :class="{ 'p-error': v$.phone.$invalid && submitted }"
                  >
                    {{ $t('labels.phone') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fal fa-phone" />
                    <InputNumber
                      :useGrouping="false"
                      v-model="form.phone"
                      :class="{
                        'p-invalid': v$.phone.$invalid && submitted,
                      }"
                      :placeholder="$t('labels.phone')"
                    ></InputNumber>
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
                      (v$.phone.$invalid && submitted) ||
                      v$.phone.$pending.$response
                    "
                    class="p-error"
                  >
                    {{ v$.phone.required.$message.replace('Value', 'phone') }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    :class="{
                      'p-error': v$.match.$invalid && submitted,
                    }"
                    for="match"
                  >
                    {{ $t('labels.select_match') }}
                  </label>
                  <Dropdown
                    v-model="form.match"
                    :class="{
                      'p-invalid': v$.match.$invalid && submitted,
                    }"
                    :options="matchList"
                    :placeholder="$t('labels.select_match')"
                    optionLabel="name"
                  ></Dropdown>
                  <span v-if="v$.match.$error && submitted">
                    <span
                      id="select_match-error"
                      v-for="(error, index) of v$.match.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.match.$invalid && submitted) ||
                      v$.match.$pending.$response
                    "
                    class="p-error"
                  >
                    {{
                      v$.match.required.$message.replace(
                        'Value',
                        'select_match',
                      )
                    }}
                  </small>
                </div>
                <div class="mb-2">
                  <label class="form-label" for="copoun">
                    {{ $t('copoun') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fal fa-wallet" />
                    <InputText
                      inputId="copoun"
                      v-model="form.copoun"
                      type="text"
                      :placeholder="$t('copoun')"
                    ></InputText>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-md-6">
              <!-- <h2 class="my-2 fs-3 page-title">{{ $t('payment') }}</h2> -->
              <div class="order-details" v-if="form.match">
                <div class="row">
                  <div class="state col-md-6">
                    <h3 class="mb-0 justify-content-start">
                      <span class="title">{{ $t('total price') }}:</span>
                      <span>
                        {{ form.match?.ticket_price }} {{ $t('appCurrency') }}
                      </span>
                    </h3>
                  </div>
                </div>
                <hr class="line" />
                <div class="mb-2">
                  <label
                    class="form-label"
                    :class="{ 'p-error': v$.name.$invalid && submitted }"
                    for="card holder name"
                  >
                    {{ $t('card holder name') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fal fa-envelope" />
                    <InputText
                      :class="{
                        'p-invalid': v$.name.$invalid && submitted,
                      }"
                      v-model="payment.name"
                      :placeholder="$t('card holder name')"
                    ></InputText>
                  </div>
                  <span v-if="v$.name.$error && submitted">
                    <span
                      id="name-error"
                      v-for="(error, index) of v$.name.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.name.$invalid && submitted) ||
                      v$.name.$pending.$response
                    "
                    class="p-error"
                  >
                    {{ v$.name.required.$message.replace('Value', 'name') }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    :class="{ 'p-error': v$.card_number.$invalid && submitted }"
                    for="card_number"
                  >
                    {{ $t('card number') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fab fa-cc-visa" />
                    <InputNumber
                      :class="{
                        'p-invalid': v$.card_number.$invalid && submitted,
                      }"
                      class="w-100"
                      v-model="payment.card_number"
                      :placeholder="$t('card number')"
                      :useGrouping="false"
                    />
                  </div>
                  <span v-if="v$.card_number.$error && submitted">
                    <span
                      id="card_number-error"
                      v-for="(error, index) of v$.card_number.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.card_number.$invalid && submitted) ||
                      v$.card_number.$pending.$response
                    "
                    class="p-error"
                  >
                    {{
                      v$.card_number.required.$message.replace(
                        'Value',
                        'card_number',
                      )
                    }}
                  </small>
                </div>
                <div class="d-flex align-items-end">
                  <div class="mb-2 p-0 col-md-6">
                    <label
                      class="form-label"
                      :class="{ 'p-error': v$.exp_date.$invalid && submitted }"
                      for="exp_date"
                    >
                      {{ $t('expire date') }}
                    </label>
                    <div class="p-input-icon-left w-100">
                      <i class="fal fa-calendar" />

                      <Calendar
                        :class="{
                          'p-invalid': v$.exp_date.$invalid && submitted,
                        }"
                        inputId="monthpicker"
                        v-model="payment.exp_date"
                        :placeholder="$t('expire date')"
                        view="month"
                        dateFormat="mm/yy"
                      />
                    </div>
                    <span v-if="v$.exp_date.$error && submitted">
                      <span
                        id="exp_date-error"
                        v-for="(error, index) of v$.exp_date.$errors"
                        :key="index"
                      >
                        <small class="p-error">{{ error.$message }}</small>
                      </span>
                    </span>
                    <small
                      v-else-if="
                        (v$.exp_date.$invalid && submitted) ||
                        v$.exp_date.$pending.$response
                      "
                      class="p-error"
                    >
                      {{
                        v$.exp_date.required.$message.replace(
                          'Value',
                          'exp_date',
                        )
                      }}
                    </small>
                  </div>
                  &nbsp;
                  <div class="mb-2 p-0 mr-1 col-md-6">
                    <label
                      class="form-label"
                      :class="{ 'p-error': v$.cvc.$invalid && submitted }"
                      for="cvv"
                    >
                      {{ $t('CVC/CVV') }}
                    </label>
                    <div class="p-input-icon-left w-100">
                      <i class="fab fa-cc-visa" />
                      <InputNumber
                        :class="{
                          'p-invalid': v$.cvc.$invalid && submitted,
                        }"
                        class="w-100"
                        v-model="payment.cvc"
                        :placeholder="$t('CVC/CVV')"
                        :useGrouping="false"
                      />
                    </div>
                    <span v-if="v$.cvc.$error && submitted">
                      <span
                        id="cvc-error"
                        v-for="(error, index) of v$.cvc.$errors"
                        :key="index"
                      >
                        <small class="p-error">{{ error.$message }}</small>
                      </span>
                    </span>
                    <small
                      v-else-if="
                        (v$.cvc.$invalid && submitted) ||
                        v$.cvc.$pending.$response
                      "
                      class="p-error"
                    >
                      {{ v$.cvc.required.$message.replace('Value', 'cvc') }}
                    </small>
                  </div>
                </div>
                <div>
                  <Button
                    :loading="loading"
                    type="button"
                    @click="submit"
                    :label="$t('Confirm')"
                    class="mainButton w-100 mt-5"
                  ></Button>
                </div>
              </div>
              <!-- <div class="steps-action">
            <Button
              :loading="loading"
              :label="$t('Submit')"
              class="mt-4 mainButton d-block mx-auto"
            ></Button>
          </div> -->
            </div>
          </div>
        </form>
      </div>
    </transition>
    <Teleport to="body">
      <Toast />
    </Teleport>
  </div>
</template>

<script setup>
import i18n from '@/i18n'
import CountryService from '@/service/CountryService'
import { useToast } from 'primevue/usetoast'
import axios from 'axios'
import { reactive, ref, onMounted, defineProps, toRefs } from 'vue'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useRouter } from 'vue-router'
const matchList = ref([])

const props = defineProps(['matchs', 'id'])

const matchs = toRefs(props)

const init = async () => {
  const data = await matchs.matchs.value.map((el) => ({
    id: el.id,
    name: `${el.first_team[`name_${i18n.global.locale}`]} vs ${
      el.second_team[`name_${i18n.global.locale}`]
    }`,
    ticket_price: el.ticket_price,
  }))
  const match = await matchs.matchs.value.find((el) => el.id == matchs.id.value)
  matchList.value = data

  form.match = {
    id: match.id,
    name: `${match.first_team[`name_${i18n.global.locale}`]} vs ${
      match.second_team[`name_${i18n.global.locale}`]
    }`,
    ticket_price: match.ticket_price,
  }
}

init()

const router = useRouter()
const toast = useToast()
const loading = ref(false)
// const details = ref(false)
const form = reactive({
  match: null,
  copoun: null,
  applicant_name: null,
  phone: null,
  email: null,
})
const payment = reactive({
  name: null,
  card_number: null,
  exp_date: null,
  cvc: null,
})

const submitted = ref(false)

const rules = {
  email: { required, email },
  match: { required },
  applicant_name: { required },
  phone: { required },
  name: { required },
  card_number: { required },
  exp_date: { required },
  cvc: { required },
}

const v$ = useVuelidate(rules, form, payment)

const submit = (isFormValid) => {
  submitted.value = true

  if (!isFormValid) {
    submitted.value = false
    return
  }
  loading.value = true
  const frmData = new FormData()
  frmData.append('applicant_name', form.applicant_name)
  frmData.append('email', form.email)
  frmData.append('match_id', form.select_match.id)

  frmData.append('phone', form.phone)
  axios
    .post('auth/add-match', frmData)
    .then((data) => {
      console.log(data)
      loading.value = false
      toast.add({
        severity: 'success',
        summary: 'Info Message',
        detail: data.data.msg,
        life: 3000,
      })
      setTimeout(() => {
        router.push('/client-area/passport')
      }, 3000)
    })
    .catch((err) => {
      console.log(err)
      loading.value = false
    })
}

const countries = ref()
onMounted(() => {
  const { getCountries } = new CountryService()
  getCountries().then((data) => {
    countries.value = data.map((el) => {
      if (i18n.global.locale == 'ar') {
        return {
          id: el.id,
          name: el.name_ar,
          value: el.value_ar,
        }
      } else {
        return {
          id: el.id,
          name: el.name_en,
          value: el.value_en,
        }
      }
    })
  })
})
</script>

<style lang="scss" scoped>
.input_wrapper {
  border-radius: 10px !important;
}
.order-details {
  .details {
    padding: 10px;
    @include mainShadow();
    background: #fff;
    h3.title {
      font-size: 18px;
      margin-bottom: 20px;
      color: $main-color;
      text-transform: capitalize;
    }
    .name {
      h5 {
        font-size: 16px;
        color: $second-color;
        margin-bottom: 5px;
        text-transform: capitalize;
      }
      p {
        font-size: bold;
        color: $main-color;
        &:not(:last-child) {
          margin-bottom: 10px;
        }
      }
    }
    .caption {
      h5 {
        font-size: 16px;
        color: $second-color;
        span {
          color: $main-color;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
