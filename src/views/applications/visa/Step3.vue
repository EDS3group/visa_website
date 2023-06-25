<template>
  <div class="row">
    <div class="col-12">
      <div class="row">
        <div class="col-md-6">
          <h2 class="my-2 fs-3 page-title">{{ $t('Order Summary') }}</h2>
          <div class="order-details" v-if="second_step">
            <div class="row" v-if="first_step">
              <div class="state col-md-12">
                <h3>
                  <span class="title">{{ $t('sponsor_name') }}:</span>
                  <span>{{ second_step.sponsor_name.name }}</span>
                </h3>
              </div>
              <div
                class="state col-md-6"
                v-if="second_step.sponsor_bank_statment"
              >
                <h3>
                  <span class="title">{{ $t('sponsor_bank_statment') }}:</span>
                  <span
                    class="fal fa-eye"
                    @click="show_model_1(second_step.sponsor_bank_statment)"
                  ></span>
                </h3>
              </div>
              <div class="state col-md-6" v-if="second_step.sponsor_job_letter">
                <h3>
                  <span class="title">{{ $t('sponsor_job_letter') }}:</span>
                  <span
                    class="fal fa-eye"
                    @click="show_model_1(second_step.sponsor_job_letter)"
                  ></span>
                </h3>
              </div>

              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('number of traveller') }}:</span>
                  <span>{{ first_step.numbers }}</span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('country') }}:</span>
                  <span>{{ first_step.country.name }}</span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('date') }}:</span>
                  <span>
                    {{ new Date(first_step.travel_date).toLocaleDateString() }}
                  </span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('relation') }}:</span>
                  <span>{{ first_step.relation.name }}</span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('center') }}:</span>
                  <span>{{ first_step.center }}</span>
                </h3>
              </div>
            </div>

            <div
              v-for="(traveler, index) in second_step.travelesRow"
              :key="index"
            >
              <hr class="line" />
              <div class="row">
                <!-- <h2 class="title">
              {{ traveler.first_name }} {{ traveler.last_name }}
            </h2> -->
                <div class="state col-md-4">
                  <h3>
                    <span class="title">{{ $t('name') }}:</span>
                    <span>
                      {{ traveler.first_name }} {{ traveler.last_name }}
                    </span>
                  </h3>
                </div>
                <div class="state col-md-4">
                  <h3>
                    <span class="title">{{ $t('passport') }}:</span>
                    <span
                      v-if="traveler.passport"
                      class="fal fa-eye"
                      @click="show_model_1(traveler.passport)"
                    ></span>
                  </h3>
                </div>
                <div class="state col-md-4">
                  <h3>
                    <span class="title">{{ $t('national_id') }}:</span>

                    <span
                      v-if="traveler.national_id"
                      class="fal fa-eye"
                      @click="show_model_1(traveler.national_id)"
                    ></span>
                  </h3>
                </div>
                <div class="state col-md-4">
                  <h3>
                    <span class="title">{{ $t('Schengen Status') }}:</span>
                    <span>{{ traveler.Schengen.status }}</span>
                    <span
                      v-if="traveler.Schengen.image"
                      class="fal fa-eye"
                      @click="show_model_1(traveler.Schengen.image)"
                    ></span>
                  </h3>
                </div>
                <div class="state col-md-4">
                  <h3>
                    <span class="title">{{ $t('socialStatus') }}:</span>
                    <span>{{ traveler.socialStatus.status }}</span>

                    <span
                      v-if="traveler.socialStatus.image"
                      class="fal fa-eye"
                      @click="show_model_1(traveler.socialStatus.image)"
                    ></span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <h2 class="my-2 fs-3 page-title">{{ $t('payment') }}</h2>
          <div class="order-details">
            <div class="row">
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('number of traveller') }}:</span>
                  <span>{{ first_step.numbers }}</span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('country') }}:</span>
                  <span>{{ first_step.country.name }}</span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('date') }}:</span>
                  <span>
                    {{ new Date(first_step.travel_date).toLocaleDateString() }}
                  </span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('coupon') }}:</span>
                  <span>
                    {{ first_step.coupon ? first_step.coupon : 0 }}
                  </span>
                </h3>
              </div>
              <div class="state col-md-6">
                <h3>
                  <span class="title">{{ $t('total_price') }}:</span>
                  <span>
                    {{ first_step.price }}
                  </span>
                </h3>
              </div>
            </div>
            <hr class="line" />
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
    </div>
    <base-model
      @closeModel="model_1.show_model = false"
      :show="model_1.show_model"
    >
      <div class="image">
        <img
          v-if="model_1.model_img_src"
          :src="model_1.model_img_src"
          alt="..."
        />
      </div>
    </base-model>
    <Toast position="bottom-right" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      model_1: {
        show_model: false,
        model_img_src: '',
      },
      payment: {
        name: null,
        card_number: null,
        exp_date: null,
        cvc: null,
      },
    }
  },
  computed: {
    numberOfTravelers() {
      return this.$store.getters.numberOfTravelers
    },
    first_step() {
      return this.$store.getters.visa_first_step
    },
    second_step() {
      return this.$store.getters.visa_second_step
    },
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  methods: {
    show_model_1(e) {
      this.model_1.model_img_src = e.img_src
      this.model_1.show_model = true
    },
    async submit() {
      this.loading = true
      const frmData = new FormData()

      frmData.append('center_apply', this.first_step.center)
      frmData.append('date', this.first_step.travel_date)
      frmData.append('country', this.first_step.country.id)
      frmData.append('travelers_number', this.first_step.numbers)
      frmData.append('relation', this.first_step.relation.name)
      frmData.append('coupon', this.first_step.coupon)
      frmData.append('total_price', this.first_step.numbers)
      this.second_step.travelesRow.map((item, index) => {
        frmData.append(`visa[${index}][first_name]`, item.first_name)
        frmData.append(`visa[${index}][last_name]`, item.last_name)
        frmData.append(`visa[${index}][passport_image]`, item.passport.img_file)
        frmData.append(`visa[${index}][shengen_visa]`, item.Schengen.status)
        if (!item.Schengen.data?.length) {
          frmData.append(
            `visa[${index}][shengen_visa_image]`,
            item.Schengen.image?.img_file,
          )
        }
        frmData.append(
          `visa[${index}][social_status]`,
          item.socialStatus.status,
        )
        if (item.socialStatus.status == 'married') {
          frmData.append(
            `visa[${index}][social_status_image]`,
            item.socialStatus.image.img_file,
          )
        }
      })
      if (this.second_step.bank_statment_image?.img_file) {
        frmData.append(
          'bank_statment_image',
          this.second_step.bank_statment_image.img_file,
        )
      }

      if (this.second_step.job_letter_image?.img_file) {
        frmData.append(
          'job_letter_image',
          this.second_step.job_letter_image.img_file,
        )
      }
      frmData.append('sponsor', this.second_step.sponsor_name.name)
      this.axios
        .post('auth/add-visa_information', frmData)
        .then((data) => {
          this.loading = false
          this.$toast.add({
            severity: this.$t('success'),
            summary: this.$t('Info Message'),
            detail: data.data.msg,
            life: 3000,
          })
          if (data.data.status == true) {
            // form.applicant_name = ''
            // form.email = ''
            // form.phone = ''
            // form.country = null
            // form.nationality = ''
            // form.finance = ''
            // form.study = ''
            // form.qualification = ''
            // form.grade = ''
            // form.callTimeFrom = ''
            // form.callTimeTo = ''
            // setTimeout(() => {
            //   router.push('/client-area/visa')
            // }, 3000)
          }
        })
        .catch((err) => {
          console.log(err)
          this.loading = false
        })
    },
  },
  watch: {},
  mounted() {
    if (!this.isLoggedIn) {
      this.$router.push('/login')
    }
  },
}
</script>

<style lang="scss">
h2.page-title {
  font-size: 28px;
  text-transform: capitalize;
  width: fit-content;
  padding-bottom: 10px;
  color: $main-color;
  border-bottom: 1px solid $second-color;
}
.accordian-items {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $main-color !important;
  background: #fff;
  .input_wrapper {
    border-radius: 10px !important;
  }
  > button {
    padding: 15px 20px;
    border-radius: 0;
    text-align: start;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    box-shadow: none !important;
    outline: none !important;
    display: flex;
    justify-content: space-between;
    i {
      font-size: 28px;
    }
    &:not(.not-collapsed) {
      i::before {
        content: '\f107';
      }
    }
  }
  .collapse {
    padding: 20px;
  }
}
.order-details {
  background: #fff;
  padding: 20px;
  margin-top: 20px;
  @include mainShadow();

  h2.title {
    text-align: start;
    font-size: 18px;
  }

  .state {
    h3 {
      text-align: start;
      margin-bottom: 20px;
      font-size: 16px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      span {
        font-weight: normal;
        &:not(.title) {
          margin-inline-start: 5px;
        }
      }
      .title {
        font-weight: 500;
      }
    }
  }
}
</style>
