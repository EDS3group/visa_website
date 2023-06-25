<template>
  <!-- <h2 class="my-2 fs-3 page-title">{{ $t('Order Summary') }}</h2> -->
  <div class="order-details mt-0" v-if="item">
    <div class="row">
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('applicant_name') }}:</span>
          <span>{{ item.applicant_name }}</span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('labels.phone') }}:</span>
          <span>{{ item.phone }}</span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('labels.Email address') }}:</span>
          <span>{{ item.email }}</span>
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
          <span class="title">{{ $t('labels.nationality') }}:</span>
          <span>{{ item.nationality }}</span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('call_from') }}:</span>
          <span>
            {{ item.call_from }}
          </span>
        </h3>
      </div>
      <div class="state col-md-6">
        <h3>
          <span class="title">{{ $t('call_to') }}:</span>
          <span>
            {{ item.call_to }}
          </span>
        </h3>
      </div>
    </div>

    <div>
      <hr class="line" />
      <div class="row">
        <div class="state col-md-6">
          <h3>
            <span class="title">{{ $t('labels.qualification') }}:</span>
            <span>{{ item.qualification }}</span>
          </h3>
        </div>
        <div class="state col-md-6">
          <h3>
            <span class="title">{{ $t('labels.major_of_study') }}:</span>
            <span>{{ item.major_of_study }}</span>
          </h3>
        </div>
        <div class="state col-md-6">
          <h3>
            <span class="title">{{ $t('labels.grade') }}:</span>
            <span>{{ item.grade }}</span>
          </h3>
        </div>
        <div class="state col-md-6">
          <h3>
            <span class="title">{{ $t('labels.mode_of_finance') }}:</span>
            <span>{{ item.mode_of_finance }}</span>
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
