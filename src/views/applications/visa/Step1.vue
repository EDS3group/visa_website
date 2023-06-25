<template>
  <form @submit.prevent="submit">
    <div class="row">
      <div class="col-12 mt-3">
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
            class="col-3 mb-3 text-start"
          >
            <RadioButton
              :inputId="center.key"
              name="center"
              :value="center.name"
              v-model="form.center"
            />
            <label :for="center.key" class="mb-0 ms-1">{{ center.name }}</label>
          </div>
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
            (v$.center.$invalid && submitted) || v$.center.$pending.$response
          "
          class="p-error"
        >
          {{ v$.center.required.$message.replace('Value', 'Center') }}
        </small>
      </div>
      <div class="col-sm-6 mt-3">
        <label
          class="form-label"
          for="example-datepicker"
          :class="{
            'p-error': v$.travel_date.$invalid && submitted,
          }"
        >
          {{ $t('Choose a date') }}
        </label>
        <Calendar inputId="icon" v-model="form.travel_date" :showIcon="true" />
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
          {{ v$.travel_date.required.$message.replace('Value', 'travel_date') }}
        </small>
      </div>
      <div class="col-sm-6 mt-3">
        <div class="field">
          <label
            class="form-label"
            :class="{
              'p-error': v$.numbers.$invalid && submitted,
            }"
          >
            {{ $t('number of travelers') }}*
          </label>
          <InputNumber
            :useGrouping="false"
            :class="{
              'p-invalid': v$.numbers.$invalid && submitted,
            }"
            class="w-100"
            v-model="form.numbers"
            :placeholder="$t('number of travelers')"
          />
        </div>
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
            (v$.numbers.$invalid && submitted) || v$.numbers.$pending.$response
          "
          class="p-error"
        >
          {{ v$.numbers.required.$message.replace('Value', 'numbers') }}
        </small>
      </div>
      <div class="col-sm-6 mt-3">
        <div class="field">
          <label
            for="country"
            class="form-label"
            :class="{
              'p-error': v$.country.$invalid && submitted,
            }"
          >
            {{ $t('country') }}
          </label>

          <Dropdown
            id="country"
            :placeholder="$t('select country')"
            v-model="form.country"
            :options="countries"
            optionLabel="name"
            :class="{
              'p-invalid': v$.country.$invalid && submitted,
            }"
          />
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
            (v$.country.$invalid && submitted) || v$.country.$pending.$response
          "
          class="p-error"
        >
          {{ v$.country.required.$message.replace('Value', 'country') }}
        </small>
      </div>
      <div class="col-sm-6 mt-3">
        <div class="field">
          <label for="relation" class="form-label">{{ $t('relation') }}</label>

          <Dropdown
            id="relation"
            :disabled="(form.numbers <= 1)"
            :placeholder="$t('select relation')"
            v-model="form.relation"
            :options="relations"
            optionLabel="name"
          />
        </div>
      </div>

      <div class="col-sm-6 mt-3">
        <label class="form-label" for="Coupon">
          {{ $t('Coupon') }}
        </label>
        <InputNumber
          :useGrouping="false"
          class="w-100"
          v-model="form.coupon"
          :placeholder="$t('Coupon')"
        />
      </div>
      <div class="col-sm-6 mt-3">
        <label class="form-label">{{ $t('total price') }}</label>
        <InputNumber
          :useGrouping="false"
          class="w-100"
          v-model="form.price"
          :disabled="true"
          :placeholder="$t('total price')"
        />
      </div>
    </div>
    <div class="steps-action">
      <Button
        :loading="loading"
        type="submit"
        :label="$t('Submit')"
        class="mt-4 mainButton w-100 d-block"
      ></Button>
      <!-- <a-button :loading="loading" type="primary" @click="submit">
      Next
    </a-button> -->
      <!-- <a-button v-if="current == steps.length - 1" type="primary"> -->
      <!-- @click="message.success('Processing complete!')" -->
      <!-- Done
    </a-button> -->
      <!-- <a-button v-if="current > 0" style="margin-left: 8px;">
      Previous
    </a-button> -->
    </div>
  </form>
  <Teleport to="body">
    <Toast />
  </Teleport>
</template>

<script setup>
// import { useToast } from 'primevue/usetoast'
// import { defineProps } from 'vue'

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
  router.push({ query: { step: 2 } })
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

const firstStep = computed(()=> store.getters.visa_first_step)


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

  if (firstStep.value) {
    form.country = firstStep.value.country
    form.travel_date= firstStep.value.travel_date
    form.numbers= firstStep.value.numbers
    form.relation= firstStep.value.relation
    form.center= firstStep.value.center
    form.coupon= firstStep.value.coupon
  }
})
</script>

<style lang="scss" scoped>
.input_wrapper {
  border-radius: 10px !important;
}
</style>
