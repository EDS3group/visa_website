<template>
  <div class="container-xl">
    <transition name="fadeInUp">
      <div class="applicant">
        <form @submit.prevent="submit">
          <div class="">
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
                        'applicant_name',
                      )
                    }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="email"
                    :class="{
                      'p-error': v$.email.$invalid && submitted,
                    }"
                  >
                    {{ $t('email') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fal fa-envelope" />
                    <InputText
                      v-model="form.email"
                      :class="{
                        'p-invalid': v$.email.$invalid && submitted,
                      }"
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
                    {{ v$.email.required.$message.replace('Value', 'email') }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="phone"
                    :class="{
                      'p-error': v$.phone.$invalid && submitted,
                    }"
                  >
                    {{ $t('phone number') }}
                  </label>
                  <div class="p-input-icon-left w-100">
                    <i class="fal fa-phone" />
                    <InputNumber
                      :useGrouping="false"
                      :class="{
                        'p-invalid': v$.phone.$invalid && submitted,
                      }"
                      v-model="form.phone"
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
                    for="country"
                    :class="{
                      'p-error': v$.country.$invalid && submitted,
                    }"
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
                    {{
                      v$.country.required.$message.replace('Value', 'country')
                    }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="nationality"
                    :class="{
                      'p-error': v$.nationality.$invalid && submitted,
                    }"
                  >
                    {{ $t('nationality') }}
                  </label>
                  <InputText
                    :class="{
                      'p-invalid': v$.nationality.$invalid && submitted,
                    }"
                    inputId="nationality"
                    class="w-100"
                    v-model="form.nationality"
                    :placeholder="$t('nationality')"
                  ></InputText>
                  <span v-if="v$.nationality.$error && submitted">
                    <span
                      id="nationality-error"
                      v-for="(error, index) of v$.nationality.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.nationality.$invalid && submitted) ||
                      v$.nationality.$pending.$response
                    "
                    class="p-error"
                  >
                    {{
                      v$.nationality.required.$message.replace(
                        'Value',
                        'nationality',
                      )
                    }}
                  </small>
                </div>
              </div>
              <div class="col-md-6">
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="finance"
                    :class="{
                      'p-error': v$.finance.$invalid && submitted,
                    }"
                  >
                    {{ $t('Mode of finance') }}
                  </label>
                  <InputText
                    :class="{
                      'p-invalid': v$.finance.$invalid && submitted,
                    }"
                    inputId="finance"
                    class="w-100"
                    v-model="form.finance"
                    :placeholder="$t('Mode of finance')"
                  ></InputText>
                  <span v-if="v$.finance.$error && submitted">
                    <span
                      id="finance-error"
                      v-for="(error, index) of v$.finance.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.finance.$invalid && submitted) ||
                      v$.finance.$pending.$response
                    "
                    class="p-error"
                  >
                    {{
                      v$.finance.required.$message.replace('Value', 'finance')
                    }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="study"
                    :class="{
                      'p-error': v$.study.$invalid && submitted,
                    }"
                  >
                    {{ $t('Major of study') }}
                  </label>
                  <InputText
                    :class="{
                      'p-invalid': v$.study.$invalid && submitted,
                    }"
                    inputId="study"
                    class="w-100"
                    v-model="form.study"
                    :placeholder="$t('Major of study')"
                  ></InputText>
                  <span v-if="v$.study.$error && submitted">
                    <span
                      id="study-error"
                      v-for="(error, index) of v$.study.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.study.$invalid && submitted) ||
                      v$.study.$pending.$response
                    "
                    class="p-error"
                  >
                    {{ v$.study.required.$message.replace('Value', 'study') }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="qualification"
                    :class="{
                      'p-error': v$.qualification.$invalid && submitted,
                    }"
                  >
                    {{ $t('qualification') }}
                  </label>
                  <InputText
                    :class="{
                      'p-invalid': v$.qualification.$invalid && submitted,
                    }"
                    inputId="qualification"
                    class="w-100"
                    v-model="form.qualification"
                    :placeholder="$t('qualification')"
                  ></InputText>
                  <span v-if="v$.qualification.$error && submitted">
                    <span
                      id="qualification-error"
                      v-for="(error, index) of v$.qualification.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.qualification.$invalid && submitted) ||
                      v$.qualification.$pending.$response
                    "
                    class="p-error"
                  >
                    {{
                      v$.qualification.required.$message.replace(
                        'Value',
                        'qualification',
                      )
                    }}
                  </small>
                </div>
                <div class="mb-2">
                  <label
                    class="form-label"
                    for="grade"
                    :class="{
                      'p-error': v$.grade.$invalid && submitted,
                    }"
                  >
                    {{ $t('grade') }}
                  </label>
                  <InputText
                    :class="{
                      'p-invalid': v$.grade.$invalid && submitted,
                    }"
                    class="w-100"
                    inputId="grade"
                    v-model="form.grade"
                    :placeholder="$t('grade')"
                  ></InputText>
                  <span v-if="v$.grade.$error && submitted">
                    <span
                      id="grade-error"
                      v-for="(error, index) of v$.grade.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.grade.$invalid && submitted) ||
                      v$.grade.$pending.$response
                    "
                    class="p-error"
                  >
                    {{ v$.grade.required.$message.replace('Value', 'grade') }}
                  </small>
                </div>
                <div class="mb-2">
                  <label class="form-label" for="callTime">
                    {{ $t('Best time to call') }}
                  </label>
                  <div class="row">
                    <Calendar
                      class="w-50"
                      :class="{
                        'p-invalid': v$.callTimeFrom.$invalid && submitted,
                      }"
                      inputId="range"
                      :timeOnly="true"
                      hourFormat="12"
                      :placeholder="$t('from')"
                      v-model="form.callTimeFrom"
                    />
                    <Calendar
                      :class="{
                        'p-invalid': v$.callTimeTo.$invalid && submitted,
                      }"
                      class="w-50"
                      inputId="range"
                      :timeOnly="true"
                      hourFormat="12"
                      :placeholder="$t('to')"
                      v-model="form.callTimeTo"
                    />
                  </div>
                </div>
              </div>

              <div>
                <Button
                  :loading="loading"
                  type="submit"
                  :label="$t('Submit')"
                  class="mt-4 mainButton w-100 d-block"
                ></Button>
              </div>
            </div>
            <!-- <div class="col-md-5 d-none d-md-block">
              <img src="@/assets/images/school.jpg" alt="" class="img-fluid" />
            </div> -->
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
import { reactive, ref, onMounted } from 'vue'
import { email, required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useRouter } from 'vue-router'
const router = useRouter()
const toast = useToast()
const loading = ref(false)

// const details = ref(false)
const form = reactive({
  country: null,
  nationality: null,
  applicant_name: null,
  phone: null,
  email: null,
  finance: null,
  study: null,
  qualification: null,
  grade: null,
  callTimeFrom: null,
  callTimeTo: null,
})

const submitted = ref(false)

const rules = {
  country: { required },
  nationality: { required },
  applicant_name: { required },
  email: { required, email },
  study: { required },
  qualification: { required },
  grade: { required },
  finance: { required },
  callTimeFrom: { required },
  callTimeTo: { required },
  phone: { required },
}

const v$ = useVuelidate(rules, form)

const submit = async () => {
  submitted.value = true
  const result = await v$.value.$validate()
  if (!result) {
    return
  }
  loading.value = true
  const frmData = new FormData()
  frmData.append('applicant_name', form.applicant_name)
  frmData.append('email', form.email)
  frmData.append('phone', form.phone)
  frmData.append('country', form.country.name)
  frmData.append('nationality', form.nationality)
  frmData.append('mode_of_finance', form.finance)
  frmData.append('major_of_study', form.study)
  frmData.append('qualification', form.qualification)
  frmData.append('grade', form.grade)
  frmData.append('call_from', form.callTimeFrom)
  frmData.append('call_to', form.callTimeTo)
  axios
    .post('auth/add-school', frmData)
    .then((data) => {
      loading.value = false
      toast.add({
        severity: 'success',
        summary: 'Info Message',
        detail: data.data.msg,
        life: 3000,
      })
      if (data.data.status == true) {
        form.applicant_name = ''
        form.email = ''
        form.phone = ''
        form.country = null
        form.nationality = ''
        form.finance = ''
        form.study = ''
        form.qualification = ''
        form.grade = ''
        form.callTimeFrom = ''
        form.callTimeTo = ''
        setTimeout(() => {
          router.push('/client-area/school')
        }, 3000)
      }
    })
    .catch((err) => {
      console.log(err)
      loading.value = false
    })
}

// const payment = reactive({
//   name: null,
//   card_number: null,
//   exp_date: null,
//   cvc: null,
// })
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
