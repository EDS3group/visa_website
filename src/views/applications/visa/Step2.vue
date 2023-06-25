<template>
  <h2 class="my-5 fs-3 page-title">Please enter traveller Details</h2>
  <div class="row">
    <div class="col-lg-3">
      <div class="order-details step2 mt-0">
        <div class="row" v-if="first_step">
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('number of traveller') }}:</span>
              <span>{{ first_step.numbers }}</span>
            </h3>
          </div>
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('country') }}:</span>
              <span>{{ first_step.country.name }}</span>
            </h3>
          </div>
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('date') }}:</span>
              <span>
                {{ new Date(first_step.travel_date).toLocaleDateString() }}
              </span>
            </h3>
          </div>
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('relation') }}:</span>
              <span>{{ first_step.relation.name }}</span>
            </h3>
          </div>
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('center') }}:</span>
              <span>{{ first_step.center }}</span>
            </h3>
          </div>
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('coupon') }}:</span>
              <span>{{ first_step.coupon ? first_step.coupon : 0 }}</span>
            </h3>
          </div>
          <div class="state col-md-12">
            <h3>
              <span class="title">{{ $t('total_price') }}:</span>
              <span>{{ first_step.price }}</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
    <div class="col-lg-9">
      <Accordion :activeIndex="0">
        <AccordionTab
          v-for="(traveler, index) in data.travelesRow"
          :key="traveler.id"
        >
          <template #header>
            <i class="pi pi-user"></i>
            <span>{{ $t('traveller') }} {{ index + 1 }}</span>
          </template>
          <div class="row">
            <div class="mb-4 col-sm-6">
              <div class="field">
                <label class="form-label" for="first_name">
                  {{ $t('first name') }}*
                </label>
                <InputText
                  @input="setSponsorsName"
                  inputId="first_name"
                  class="w-100"
                  v-model="traveler.first_name"
                  :placeholder="$t('enter your first name')"
                />
              </div>
            </div>
            <div class="mb-4 col-sm-6">
              <div class="field">
                <label class="form-label" for="last name">
                  {{ $t('first name') }}*
                </label>
                <InputText
                  inputId="last name"
                  class="w-100"
                  v-model="traveler.last_name"
                  :placeholder="$t('enter your last name')"
                />
              </div>
            </div>

            <div class="mb-4 col-sm-6">
              <label for="passport">{{ $t('upload passport') }}</label>
              <UploadImage
                id="passport"
                @inputChanged="uplodePassprotImg($event, index)"
                placeHolder="passport image"
              ></UploadImage>
            </div>
            <div class="mb-4 col-sm-6">
              <label>{{ $t('upload national id') }}</label>
              <UploadImage
                id="passport"
                @inputChanged="uplodeNationalImg($event, index)"
                placeHolder="national id image"
              ></UploadImage>
            </div>
            <div class="mb-4 col-12">
              <label class="form-label">
                {{
                  $t(
                    'Have you ever been issued a Schengen Visa in past 3 years?',
                  )
                }}
              </label>
              <div class="row">
                <div
                  v-for="center of SchengenStatus"
                  :key="center.key"
                  class="col-3 mb-3 text-start"
                >
                  <RadioButton
                    :inputId="center.key"
                    name="SchengenStatus"
                    :value="center.name"
                    v-model="traveler.Schengen.status"
                  />
                  <label class="mb-0 ms-1" :for="center.key">
                    {{ center.name }}
                  </label>
                </div>
              </div>

              <transition name="fadeInUp">
                <div
                  v-if="traveler.Schengen.status == 'Yes'"
                  class="text-start"
                >
                  <Checkbox
                    id="available"
                    value="not available"
                    v-model="traveler.Schengen.data"
                  />
                  <label for="available">
                    {{ $t('Not available') }}
                  </label>

                  <UploadImage
                    v-if="traveler.Schengen.data != 'not available'"
                    id="passport"
                    @inputChanged="uplodeSchengenImg($event, index)"
                    placeHolder="Schengen image"
                  ></UploadImage>
                </div>
              </transition>
            </div>
            <div class="mb-4 col-sm-6">
              <label class="form-label">{{ $t('social status') }}</label>
              <div class="row">
                <div
                  v-for="center of socialStatus"
                  :key="center.key"
                  class="col-6 mb-3 text-start"
                >
                  <RadioButton
                    :inputId="center.key"
                    name="socialStatus"
                    :value="center.key"
                    v-model="traveler.socialStatus.status"
                  />
                  <label :for="center.key" class="mb-0 ms-1">
                    {{ center.name }}
                  </label>
                </div>
              </div>

              <transition name="fadeInUp">
                <UploadImage
                  v-if="traveler.socialStatus.status == 'married'"
                  @inputChanged="uplodeSocialStatusImg($event, index)"
                  placeHolder="family id image"
                ></UploadImage>
              </transition>
            </div>
          </div>
        </AccordionTab>
      </Accordion>

      <div>
        <div class="row">
          <div class="mb-4 col-sm-6" v-if="numberOfTravelers > 1">
            <div class="field">
              <label class="form-label" for="sponsor name">
                {{ $t('sponsor name') }}
              </label>
              <Dropdown
                id="sponsor name"
                :placeholder="$t('select sponsor')"
                v-model="data.sponsor_name"
                :options="sponsors"
                optionLabel="name"
              />
            </div>
          </div>
          <div class="col-12"></div>
          <div class="mb-4 col-sm-6">
            <label>{{ $t('Attachment (Bank statement) if available') }}</label>
            <FileUpload :showUploadButton="false" :chooseLabel="$t('choose bank statement image')" :showCancelButton="false"  :customUpload="true" @select="uplodeBankstatement($event)" :multiple="false" accept="image/*" :maxFileSize="2048000">
              <template #empty>
                  <p>{{$t("Attachment (Bank statement) if available")}}</p>
              </template>
            </FileUpload>
            <!-- <UploadImage
              id="passport"
              @inputChanged="uplodeBankstatement($event)"
              placeHolder="Bank statement"
            ></UploadImage> -->
          </div>
          <div class="mb-4 col-sm-6">
            <label for="passport">
              {{ $t('Attachment (Job Letter) if available') }}
            </label>
            <UploadImage
              id="passport"
              @inputChanged="uplodeJobLetter($event)"
              placeHolder="Job Letter"
            ></UploadImage>
          </div>
        </div>
      </div>
      <div class="steps-action">
        <Button
          :loading="loading"
          @click="validateCreateForm"
          :label="$t('Submit')"
          class="mt-4 mainButton w-100 d-block"
        ></Button>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <Toast position="bottom-right" />
  </Teleport>
</template>

<script>
import UploadImage from '@/components/UploadImage.vue'
// import { useToast } from 'primevue/usetoast'
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  components: { UploadImage },
  data() {
    return {
      btnIsLoading: false,
      data: {
        sponsor_name: null,
        sponsor_bank_statment: null,
        sponsor_job_letter: null,
        travelesRow: [
          {
            first_name: null,
            last_name: null,
            passport: null,
            national_id: null,
            Schengen: {
              status: null,
              data: null,
              image: null,
            },
            socialStatus: {
              status: 'single',
              data: null,
              image: null,
            },
          },
        ],
        first_stage: null,
        numberOfTravelers: null,
      },
      SchengenStatus: [
        {
          key: 'yes',
          name: 'Yes',
        },
        {
          key: 'no',
          name: 'No',
        },
      ],
      socialStatus: [
        {
          key: 'single',
          name: 'Single',
        },
        {
          key: 'married',
          name: 'Married',
        },
      ],
      sponsors: [],
    }
  },

  methods: {
    appendTraveler() {
      this.data.travelesRow.push({
        first_name: null,
        last_name: null,
        passport: null,
        national_id: null,
        Schengen: {
          status: false,
          data: null,
        },
        socialStatus: {
          status: null,
          data: null,
        },
      })
    },
    setSponsorsName() {
      this.sponsors = []
      this.data.travelesRow.map((el) => {
        if (el.first_name) {
          this.sponsors.push({ name: el.first_name })
        }
      })
    },
    uplodeSchengenImg(e, index) {
      this.data.travelesRow[index].Schengen.image = e
    },
    uplodeNationalImg(e, index) {
      this.data.travelesRow[index].national_id = e
    },
    uplodePassprotImg(e, index) {
      this.data.travelesRow[index].passport = e
    },
    uplodeSocialStatusImg(e, index) {
      this.data.travelesRow[index].socialStatus.image = e
    },
    uplodeJobLetter(e) {
      this.data.sponsor_job_letter = e
    },
    uplodeBankstatement(e) {
      this.data.sponsor_bank_statment = e.files[0]
   
    },
    validateCreateForm() {
      this.btnIsLoading = true

      if (!this.data.sponsor_name) {
        this.showToast('error', 'FaildRquird', 'sponsor name is required')
        this.btnIsLoading = false
        return
      }
      // for (let i = 0; i < this.data.travelesRow.length; i += 1) {
      //   if (!this.data.travelesRow[i].first_name) {
      //     this.showToast('error', 'FaildRquird', 'firstname is required')
      //     this.btnIsLoading = false
      //     return
      //   } else if (!this.data.travelesRow[i].last_name) {
      //     this.showToast('error', 'FaildRquird', 'lastname is required')
      //     this.btnIsLoading = false
      //     return
      //   } else if (!this.data.travelesRow[i].passport) {
      //     this.showToast('error', 'FaildRquird', 'passport is required')
      //     this.btnIsLoading = false
      //     return
      //   } else if (!this.data.travelesRow[i].national_id) {
      //     this.showToast('error', 'FaildRquird', 'national id is required')
      //     this.btnIsLoading = false
      //     return
      //   } else if (!this.data.travelesRow[i].Schengen.status) {
      //     this.showToast('error', 'FaildRquird', 'schengen is required')
      //     this.btnIsLoading = false
      //     return
      //   } else if (
      //     this.data.travelesRow[i].Schengen.status == 'yes' &&
      //     !this.data.travelesRow[i].Schengen.data?.length
      //   ) {
      //     this.showToast('error', 'FaildRquird', 'schengen image is required')
      //     this.btnIsLoading = false
      //     return
      //   } else if (this.data.travelesRow[i].socialStatus.status != 'single') {
      //     this.showToast('error', 'FaildRquird', 'family id is required')
      //     this.btnIsLoading = false
      //     return
      //   }
      // }
      this.submit()
      return
    },
    submit() {
      this.btnIsLoading = false
      this.$store.commit('visa_second_step', this.data)
      this.$router.push({ query: { step: 3 } })
    },
    showToast(type, title, message) {
      this.$toast.add({
        severity: this.$t(type),
        summary: this.$t(title),
        detail: this.$t(message),
        life: 3000,
      })
    },
    checkData() {
      if (!this.$store.getters.visa_first_step) {
        this.$router.push({ query: { step: 1 } })
        this.$emit('update:modelValue', 1)
      }
    },
    getRowsData() {
      if (this.numberOfTravelers > 1) {
        for (let i = 1; i <= this.numberOfTravelers - 1; i = i + 1) {
          console.log(this.second_step)
          if (this.second_step) {
            console.log(this.second_step)
          }
          this.appendTraveler()
        }
      }
    },
  },
  watch: {
    'data.travelesRow'(newVal) {
      if (newVal) this.setSponsorsName()
    },
    '$route.query.step'(newVal) {
      console.log(newVal)
    },
  },
  computed: {
    numberOfTravelers() {
      return this.$store.getters.visa_first_step?.numbers
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
  mounted() {
    this.$root.$emit('bv::toggle::collapse', 'accordion-0')

    if (!this.isLoggedIn) {
      this.$router.push('/login')
    }
    this.getRowsData()
  },
  created() {
    this.checkData()
  },
}
</script>

<style lang="scss">
.order-details.step2 {
  .state {
    h3 {
      display: flex;
      justify-content: space-between;
    }
    &:not(:last-child) {
      h3 {
        margin-bottom: 20px;
      }
    }
  }
}
h2.page-title {
  font-size: 28px;
  text-transform: capitalize;
  width: fit-content;
  padding-bottom: 10px;
  color: $main-color;
  border-bottom: 1px solid $second-color;
}
.p-accordion-tab {
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid $main-color !important;
  background: #fff;
  .input_wrapper {
    border-radius: 10px !important;
  }
  .p-accordion-header {
    .p-accordion-header-link {
      padding: 15px 20px;
      border-radius: 0;
      text-align: start;
      font-size: 18px;
      font-weight: bold;
      text-transform: capitalize;
      box-shadow: none !important;
      outline: none !important;

      color: #fff !important;
      background: $main-color !important;
      border-color: $main-color;
    }
  }
  .collapse {
    padding: 20px;
  }
}
</style>
