<template>
  <div class="orders-list">
    <div v-if="!id">
      <DataTable
        :loading="!allData"
        responsiveLayout="stack"
        :value="allData?.school_requests"
      >
        <template #empty>
          {{ $t('no requests found') }}
        </template>
        <template #loading>
          {{ $t('Loading please wait') }}
        </template>
        <Column field="applicant_name" :header="$t('applicant_name')"></Column>
        <Column field="phone" :header="$t('phone')"></Column>
        <Column field="email" :header="$t('email')"></Column>
        <Column field="call_from" :header="$t('call_from')"></Column>
        <Column field="call_to" :header="$t('call_to')"></Column>
        <Column field="status" :header="$t('status')">
          <template #body="slotProps">
            <span class="status" :class="slotProps.data.status">
              {{ $t(slotProps.data.status) }}
            </span>
          </template>
        </Column>
        <Column field="" :header="$t('actions')">
          <template #body="{data}">
            <router-link :to="`/client-area/school/${data.id}`">
              <i class="pi pi-eye"></i>
            </router-link>
          </template>
        </Column>
      </DataTable>
    </div>
    <div v-else>
      <Show :item="item" />
    </div>
  </div>
</template>

<script>
import Show from './Show.vue'

export default {
  components: { Show },
  props: ['allData', 'id'],
  data() {
    return {
      item: null,
    }
  },
  watch: {
    allData() {
      if (this.$route.params.id) {
        this.item = this.allData?.school_requests.filter(
          (el) => el.id == this.id,
        )[0]
      }
    },
    '$route.params.id'() {
      this.item = this.allData.school_requests.filter(
        (el) => el.id == this.$route.params.id,
      )[0]
    },
  },
}
</script>

<style lang="scss">
.orders-list {
  background: #fff;
  // padding: 0 10px;
}
</style>
