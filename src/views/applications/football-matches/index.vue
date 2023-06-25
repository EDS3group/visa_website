<template>
  <div class="container-xl">
    <div class="filter-section" v-if="!$route.params.id">
      <Calendar v-model="date" :showIcon="true" icon="pi pi-calendar" />
    </div>
    <div class="row justify-content-center" v-if="!$route.params.id">
      <div
        class="col-sm-6 col-lg-4 mb-4"
        v-for="match in matchs"
        :key="match.id"
      >
        <match-card-details :item="match" />
      </div>
    </div>
    <router-view :matchs="matchs" v-if="matchs" />
    <!-- <div class="action mt-5">
      <Button
      :loading="loading"
        type="button"
        :label="$t('buttons.see more')"
        class="mt-1 mainButton center d-block"
      />
    </div> -->
  </div>
</template>

<script setup>
import axios from 'axios'
import MatchCardDetails from '@/components/ui/MatchCardDetails.vue'

import { ref, onMounted } from 'vue'

const date = ref(new Date())

const matchs = ref('')
function getMatchs() {
  axios.get('all-matches').then((res) => (matchs.value = res.data.data))
}

onMounted(() => getMatchs())
</script>

<style lang="scss">
.filter-section {
  width: 200px;
  margin-inline-start: auto;
  margin-bottom: 30px;
  .p-button {
    background: $main-color !important;
    border-color: $main-color !important ;
  }
}
</style>
