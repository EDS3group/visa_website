<template>
  <!-- <h2 class="my-2 fs-3 page-title">{{ $t('Order Summary') }}</h2> -->
  <div class="order-details mt-0" v-if="item">
    <div class="row">
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('number of traveller') }}:</span>
          <span>{{ item.travelers_number }}</span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('country') }}:</span>
          <span>{{ item.country }}</span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('date') }}:</span>
          <span>
            {{ new Date(item.date).toLocaleDateString() }}
          </span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('relation') }}:</span>
          <span>{{ item.relation }}</span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('center') }}:</span>
          <span>{{ item.center_apply }}</span>
        </h3>
      </div>
    </div>

    <div v-for="traveler in item.visa_information" :key="traveler.id">
      <hr class="line" />
      <div class="row">
        <!-- <h2 class="title">
              {{ traveler.first_name }} {{ traveler.last_name }}
            </h2> -->
        <div class="state col-md-4">
          <h3>
            <span class="title">{{ $t('name') }}:</span>
            <span>{{ traveler.first_name }} {{ traveler.last_name }}</span>
          </h3>
        </div>
        <div class="state col-md-4">
          <h3>
            <span class="title">{{ $t('passport') }}:</span>
            <a
              role="button"
              v-if="traveler.passport_image"
              class="fal fa-eye"
              @click="show_model_1(traveler.passport_image)"
            ></a>
          </h3>
        </div>
        <div class="state col-md-4">
          <h3>
            <span class="title">{{ $t('national_id') }}:</span>

            <a
              role="button"
              v-if="traveler.national_image"
              class="fal fa-eye"
              @click="show_model_1(traveler.national_image)"
            ></a>
          </h3>
        </div>
        <div class="state col-md-4">
          <h3>
            <span class="title">{{ $t('Schengen Status') }}:</span>
            <span></span>
            <a
              role="button"
              v-if="traveler.shengen_visa_image"
              class="fal fa-eye"
              @click="show_model_1(traveler.shengen_visa_image)"
            ></a>
          </h3>
        </div>
        <div class="state col-md-4">
          <h3>
            <span class="title">{{ $t('socialStatus') }}:</span>
            <span>{{ traveler.social_status }}</span>

            <span
              v-if="false"
              class="fal fa-eye"
              @click="show_model_1(traveler.socialStatus.image)"
            ></span>
          </h3>
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
  </div>
</template>

<script>
export default {
  props: ['item'],
  data() {
    return {
      model_1: {
        show_model: false,
        model_img_src: '',
      },
    }
  },
  methods: {
    show_model_1(e) {
      this.model_1.model_img_src = e
      this.model_1.show_model = true
    },
  },
}
</script>

<style></style>
