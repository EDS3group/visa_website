<template>
  <div class="container-xl">
    <div class="section-title text-center">
      <span class="sub-title">{{ $t('Matchs Package') }}</span>
      <h2 class="title">{{ $t('Matchs List') }}</h2>
    </div>

    <swiper
      :slides-per-view="1"
      :breakpoints="breakpoints"
      :modules="[Pagination, Scrollbar, A11y, Lazy]"
      :scrollbar="{ draggable: true }"
      lazy
      :pagination="{ clickable: true, dynamicBullets: true }"
      grab-cursor
    >
      <swiper-slide v-for="match in matchs" :key="match.id">
        <match-card-details :item="match" />
      </swiper-slide>
    </swiper>
    <div class="action">
      <router-link
        class="mt-5 text-center mainButton center d-block"
        to="/services/football-matches"
      >
        {{ $t('buttons.see more') }}
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { Pagination, Scrollbar, A11y, Lazy } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { onMounted, ref } from 'vue'
import MatchCardDetails from '../ui/MatchCardDetails.vue'
import 'swiper/css'
import 'swiper/css/bundle'
import axios from 'axios'

const breakpoints = {
  768: {
    slidesPerView: 3,
    spaceBetween: 30,
  },
}

const matchs = ref('')
function getMatchs() {
  axios.get('all-matches').then((res) => (matchs.value = res.data.data))
}
console.log(matchs.value)

onMounted(() => getMatchs())
</script>

<style>
.swiper-android .swiper-slide,
.swiper-wrapper {
  padding-bottom: 30px;
}
</style>
