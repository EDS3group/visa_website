<template>
  <div class="banner">
    <div class="swiper">
      <swiper
        :slides-per-view="1"
        :modules="[Navigation, Pagination, Scrollbar, A11y, Lazy, EffectFade]"
        effect="fade"
        :scrollbar="{ draggable: true }"
        navigation
        lazy
        :pagination="{ clickable: true, dynamicBullets: true }"
        grab-cursor
      >
        <swiper-slide v-for="n in 3" :key="n">
          <img
            src="@/assets/images/3.jpg"
            alt="banner"
            class="swiper-lazy img-fluid"
          />
          <div class="swiper-lazy-preloader"></div>
        </swiper-slide>
      </swiper>

      <!-- <img
        :src="require('@/assets/images/shape-pat.png')"
        alt="shape"
        class="img-fluid shap-pat"
      /> -->
    </div>
    <div class="container-xl">
      <div class="form">
        <form @submit.prevent="submit">
          <div class="row">
            <div class="col-lg-3">
              <h2 class="title">
                <span>01</span>
                {{ $t('what?') }}
              </h2>
              <div class="content">
                <label
                  class="form-label"
                  :class="{
                    'p-error': v$.center.$invalid && submitted,
                  }"
                >
                  {{ $t('which center you want to apply?') }}
                </label>
                <div class="row">
                  <div
                    v-for="center of centers"
                    :key="center.key"
                    class="col-6 mb-3 text-start"
                  >
                    <RadioButton
                      :inputId="center.key"
                      name="center"
                      :value="center.name"
                      v-model="form.center"
                    />
                    <label :for="center.key" class="mb-0 ms-1">
                      {{ center.name }}
                    </label>
                  </div>
                  <span v-if="v$.center.$error && submitted">
                    <span
                      id="center-error"
                      v-for="(error, index) of v$.center.$errors"
                      :key="index"
                    >
                      <small class="p-error">{{ error.$message }}</small>
                    </span>
                  </span>
                  <small
                    v-else-if="
                      (v$.center.$invalid && submitted) ||
                      v$.center.$pending.$response
                    "
                    class="p-error"
                  >
                    {{ v$.center.required.$message.replace('Value', 'Center') }}
                  </small>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <h2 class="title">
                <span>02</span>
                {{ $t('where') }}
              </h2>
              <div class="content">
                <div class="">
                  <label
                    class="form-label"
                    :class="{
                      'p-error': v$.travel_date.$invalid && submitted,
                    }"
                    for="example-datepicker"
                  >
                    {{ $t('Choose a date') }}
                  </label>
                  <Calendar
                    v-model="form.travel_date"
                    :showIcon="true"
                    :placeholder="$t('select date')"
                  ></Calendar>
                </div>
                <span v-if="v$.travel_date.$error && submitted">
                  <span
                    id="travel_date-error"
                    v-for="(error, index) of v$.travel_date.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small
                  v-else-if="
                    (v$.travel_date.$invalid && submitted) ||
                    v$.travel_date.$pending.$response
                  "
                  class="p-error"
                >
                  {{
                    v$.travel_date.required.$message.replace(
                      'Value',
                      'travel_date',
                    )
                  }}
                </small>
                <div class="relation">
                  <label
                    class="form-label"
                    :class="{
                      'p-error': v$.country.$invalid && submitted,
                    }"
                    for="country"
                  >
                    {{ $t('select country') }}
                  </label>
                  <Dropdown
                    v-model="form.country"
                    :loading="loading"
                    :options="countries"
                    :class="{
                      'p-invalid': v$.country.$invalid && submitted,
                    }"
                    :placeholder="$t('select country')"
                    optionLabel="name"
                  ></Dropdown>
                </div>
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
            </div>

            <div class="col-lg-3">
              <h2 class="title">
                <span>03</span>
                {{ $t('who?') }}
              </h2>
              <div class="content">
                <label
                  class="form-label"
                  :class="{
                    'p-error': v$.numbers.$invalid && submitted,
                  }"
                  for="number of travelers"
                >
                  {{ $t('number of travelers') }}
                </label>
                <InputNumber
                  :useGrouping="false"
                  v-model="form.numbers"
                  :class="{
                    'p-invalid': v$.numbers.$invalid && submitted,
                  }"
                  :placeholder="$t('number of travelers')"
                ></InputNumber>
                <span v-if="v$.numbers.$error && submitted">
                  <span
                    id="numbers-error"
                    v-for="(error, index) of v$.numbers.$errors"
                    :key="index"
                  >
                    <small class="p-error">{{ error.$message }}</small>
                  </span>
                </span>
                <small
                  v-else-if="
                    (v$.numbers.$invalid && submitted) ||
                    v$.numbers.$pending.$response
                  "
                  class="p-error"
                >
                  {{ v$.numbers.required.$message.replace('Value', 'numbers') }}
                </small>

                <div class="relation">
                  <label class="form-label" for="relation">
                    {{ $t('relation') }}
                  </label>
                  <Dropdown
                    :disabled="(form.numbers <= 1)"
                    v-model="form.relation"
                    :options="relations"
                    :placeholder="$t('select relation')"
                    optionLabel="name"
                  ></Dropdown>
                </div>
              </div>
            </div>
            <div class="col-lg-3">
              <h2 class="title">
                <span>04</span>
                {{ $t('copoun and total price') }}
              </h2>
              <div class="content">
                <label class="form-label" for="Coupon">
                  {{ $t('Coupon') }}
                </label>
                <InputNumber
                  :useGrouping="false"
                  class="w-100"
                  v-model="form.coupon"
                  :placeholder="$t('Coupon')"
                />
                <div class="relation">
                  <label class="form-label">{{ $t('total price') }}</label>
                  <!-- <div class="input_wrapper">
                  </div> -->
                  <InputNumber
                    :useGrouping="false"
                    class="w-100"
                    v-model="form.price"
                    :disabled="true"
                    :placeholder="$t('total price')"
                  />
                </div>
              </div>
            </div>
          </div>
          <Button
            :loading="loading"
            type="submit"
            :label="$t('apply now')"
            class="mt-1 mainButton center d-block"
          />
          <!-- <b-btn class="mainButton center">{{ $t('apply now') }}</b-btn> -->
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Lazy,
} from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/bundle'

import i18n from '@/i18n'
import CountryService from '@/service/CountryService'
import { required } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { reactive, ref, onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const store = useStore()
const router = useRouter()
const form = reactive({
  country: null,
  travel_date: null,
  numbers: null,
  relation: null,
  center: '',
  coupon: null,
  price: 0,
})

// const toast = useToast()
const loading = ref(false)
const submitted = ref(false)

const rules = {
  country: { required },
  travel_date: { required },
  numbers: { required },
  center: { required },
}

const v$ = useVuelidate(rules, form)

const submit = async () => {
  submitted.value = true
  const result = await v$.value.$validate()

  if (!result) {
    return
  }

  store.commit('setFirstStep', form)
  router.push({ path: '/services/visa', query: { step: 2 } })
}

form.price = computed(() =>
  form.country ? form.country.value * form.numbers : 0,
)

const relations = [
  {
    id: 'family',
    name: 'Family',
  },
  {
    id: 'friends',
    name: 'Friends',
  },
]

const countries = ref()
const centers = [
  {
    key: 'month',
    name: 'Month',
  },
  {
    key: '3month',
    name: '3 Month',
  },
  {
    key: '6month',
    name: '6 Month',
  },
  {
    key: '9month',
    name: '9 Month',
  },
]
onMounted(() => {
  loading.value = true
  const { getCountries } = new CountryService()
  getCountries().then((data) => {
    countries.value = data.map((el) => {
      loading.value = false
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

<style lang="scss">
.banner {
  position: relative;
  .swiper {
    position: relative;
    max-height: 580px;
  }
  .swiper-pagination {
    // position: relative;
    z-index: 122;
  }
  .shap-pat {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    // height: 60px;
  }
  .container-xl {
    position: relative;
    .form {
      // padding: 10px;
      background: #fdfdfd;
      @media (min-width: 1200px) {
        position: absolute;
      }

      bottom: 90px;

      left: 0;
      z-index: 99;
      width: 100%;
      display: inline-block;
      padding: 15px 15px 0;
      border: 1px solid #fff;
      h2.title {
        padding: 0 10px;
        span {
          color: $main_color;
        }
        text-transform: capitalize;
        margin-bottom: 10px;
        font-size: 18px;
      }
      form {
        > div > div {
          display: flex;
          flex-direction: column;
          padding: 0;
          @media (max-width: 992px) {
            &:not(:first-child) {
              .content {
                padding-bottom: 10px;
                margin-bottom: 10px;
                border-bottom: 1px solid #ccc;
              }
            }
          }
          @media (min-width: 768px) {
            &:not(:first-child) {
              .content {
                border-left: 1px solid #ccc;
              }
            }
          }

          .content {
            flex: 1;
            padding: 0 10px;
            min-height: 90px;
            display: flex;
            flex-direction: column;
            .custom-control-inline {
              margin-right: 0;
              flex: 1;
              margin-inline-end: 1rem;
              margin-bottom: 10px;
            }
            .relation {
              margin-top: auto;
            }
          }
        }
      }
    }
  }
}
</style>
