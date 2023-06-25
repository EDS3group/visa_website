<template>
  <div class="container-xl">
    <transition name="fadeInUp">
      <div class="applicant" v-if="!details">
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-md-6">
              <div class="mb-2">
                <label
                  class="form-label"
                  for="applicant_name"
                  :class="{
                    'p-error': v$.applicant_name.$invalid && submitted,
                  }"
                >
                  {{ $t('applicant name') }}
                </label>
                <div class="p-input-icon-left w-100">
                  <i class="pi pi-user" />
                  <InputText
                    :class="{
                      'p-invalid': v$.applicant_name.$invalid && submitted,
                    }"
                    v-model="form.applicant_name"
                    :placeholder="$t('applicant name')"
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
                  {{ $t('phone number') }}
                </label>
                <div class="p-input-icon-left w-100">
                  <i class="fal fa-phone" />
                  <InputNumber
                    :useGrouping="false"
                    v-model="form.phone"
                    :class="{
                      'p-invalid': v$.phone.$invalid && submitted,
                    }"
                    :placeholder="$t('phone')"
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
                  :class="{ 'p-error': v$.country.$invalid && submitted }"
                  for="country"
                >
                  {{ $t('select country') }}
                </label>
                <Dropdown
                  v-model="form.country"
                  :class="{
                    'p-invalid': v$.country.$invalid && submitted,
                  }"
                  :options="countries"
                  :placeholder="$t('select country')"
                  optionLabel="name"
                ></Dropdown>
                <span v-if="v$.country.$error && submitted">
                  <span
                    id="country-error"
                    v-for="(error, index) of v$.country.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small
                  v-else-if="
                    (v$.country.$invalid && submitted) ||
                    v$.country.$pending.$response
                  "
                  class="p-error"
                >
                  {{ v$.country.required.$message.replace('Value', 'country') }}
                </small>
              </div>
              <div class="mb-2">
                <label
                  class="form-label"
                  :class="{
                    'p-error': v$.passport_quantity.$invalid && submitted,
                  }"
                  for="passport passport_quantity"
                >
                  {{ $t('passport passport_quantity') }}
                </label>
                <InputNumber
                  class="w-100"
                  :class="{
                    'p-invalid': v$.passport_quantity.$invalid && submitted,
                  }"
                  :useGrouping="false"
                  v-model="form.passport_quantity"
                  :placeholder="$t('passport_quantity')"
                ></InputNumber>
              </div>
              <span v-if="v$.passport_quantity.$error && submitted">
                <span
                  id="passport_quantity-error"
                  v-for="(error, index) of v$.passport_quantity.$errors"
                  :key="index"
                >
                  <small class="p-error">{{ error.$message }}</small>
                </span>
              </span>
              <small
                v-else-if="
                  (v$.passport_quantity.$invalid && submitted) ||
                  v$.passport_quantity.$pending.$response
                "
                class="p-error"
              >
                {{
                  v$.passport_quantity.required.$message.replace(
                    'Value',
                    'passport_quantity',
                  )
                }}
              </small>
              <div>
                <Button
                  :loading="loading"
                  type="submit"
                  :label="$t('Submit')"
                  class="mt-4 mainButton w-100 d-block"
                ></Button>
              </div>
            </div>
            <div class="col-md-6 mt-3">
              <div class="section-image">
                <img
                  src="@/assets/images/passport.png"
                  alt=""
                  class="img-fluid"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div class="order-details" v-else>
        <div class="row">
          <div class="col-md-7">
            <div class="mb-2">
              <label class="form-label" for="card holder name">
                {{ $t('card holder name') }}
              </label>
              <div class="p-input-icon-left w-100">
                <i class="fal fa-envelope" />
                <InputText
                  v-model="payment.name"
                  :placeholder="$t('card holder name')"
                ></InputText>
              </div>
            </div>
            <div class="mb-2">
              <label class="form-label" for="card_number">
                {{ $t('card number') }}
              </label>
              <div class="p-input-icon-left w-100">
                <i class="fab fa-cc-visa" />
                <InputNumber
                  class="w-100"
                  v-model="payment.card_number"
                  :placeholder="$t('card number')"
                  :useGrouping="false"
                />
              </div>
            </div>
            <div class="d-flex align-items-end">
              <div class="mb-2 p-0 col-md-6">
                <label class="form-label" for="exp_date">
                  {{ $t('expire date') }}
                </label>
                <div class="p-input-icon-left w-100">
                  <i class="fal fa-calendar" />

                  <Calendar
                    inputId="monthpicker"
                    v-model="payment.exp_date"
                    :placeholder="$t('expire date')"
                    view="month"
                    dateFormat="mm/yy"
                  />
                </div>
              </div>
              &nbsp;
              <div class="mb-2 p-0 mr-1 col-md-6">
                <label class="form-label" for="cvv">
                  {{ $t('CVC/CVV') }}
                </label>
                <div class="p-input-icon-left w-100">
                  <i class="fab fa-cc-visa" />
                  <InputNumber
                    class="w-100"
                    v-model="payment.cvc"
                    :placeholder="$t('CVC/CVV')"
                    :useGrouping="false"
                  />
                </div>
              </div>
            </div>
            <div>
              <Button
                :loading="loading"
                type="button"
                :label="$t('Confirm')"
                class="mainButton w-100 mt-5"
              ></Button>
            </div>
          </div>
          <div class="col-md-5">
            <div class="details">
              <div class="d-flex justify-content-between">
                <h3 class="title">
                  Your passport details
                </h3>
                <Button
                  type="button"
                  @click="details = !details"
                  icon="fas fa-edit"
                  class="p-button-text"
                ></Button>
              </div>
              <div class="user">
                <div class="name">
                  <h5>applicant name</h5>
                  <p>{{ form.applicant_name }}</p>
                  <h5>email</h5>
                  <p>{{ form.email }}</p>
                  <h5>phone</h5>
                  <p>{{ form.phone }}</p>
                </div>
                <div class="caption">
                  <h5 v-if="form.country">
                    Country
                    <span>{{ form.country.name }}</span>
                  </h5>
                  <h5>
                    passport_quantity
                    <span>{{ form.passport_quantity }}</span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
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
import { reactive, ref, onMounted } from 'vue'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const toast = useToast()
const loading = ref(false)
const details = ref(false)
const form = reactive({
  country: null,
  passport_quantity: null,
  applicant_name: null,
  phone: null,
  email: null,
})

const submitted = ref(false)

const rules = {
  email: { required, email },
  country: { required },
  applicant_name: { required },
  passport_quantity: { required },
  phone: { required },
}

const v$ = useVuelidate(rules, form)

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
  frmData.append('country', form.country.id)
  frmData.append('passport_quantity', form.passport_quantity)
  frmData.append('phone', form.phone)
  axios
    .post('auth/add-passport', frmData)
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

const payment = reactive({
  name: null,
  card_number: null,
  exp_date: null,
  cvc: null,
})
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
