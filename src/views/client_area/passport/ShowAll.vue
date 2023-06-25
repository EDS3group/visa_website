<template>
  <div class="orders-list">
    <div v-if="!id">
      <DataTable
        :loading="!allData"
        :value="allData?.passport_requests"
        responsiveLayout="stack"
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
        <Column
          field="passport_quantity"
          :header="$t('passport_quantity')"
        ></Column>
        <Column field="country" :header="$t('country')"></Column>
        <Column field="status" :header="$t('status')">
          <template #body="slotProps">
            <span class="status" :class="slotProps.data.status">
              {{ $t(slotProps.data.status) }}
            </span>
          </template>
        </Column>
        <!-- <Column field="" :header="$t('actions')">
          <template #body>
            <i class="pi pi-eye"></i>
          </template>
        </Column> -->
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
        this.item = this.allData?.passport_requests.find(
          (el) => el.id == this.id,
        )
      }
    },
    '$route.params.id'() {
      this.item = this.allData.passport_requests.find(
        (el) => el.id == this.$route.params.id,
      )
    },
  },
}
</script>

<style lang="scss">
.orders-list {
  background: #fff;
  // padding: 0 10px;
}
.p-datatable-thead {
  tr {
    th {
      background: $main-color !important;
      color: #fff !important;
      text-transform: capitalize;
    }
  }
}
</style>
