<template>
  <div class="orders-list">
    <div v-if="!id">
      <DataTable
        :loading="!allData"
        :value="allData?.visa_requests"
        responsiveLayout="stack"
      >
        <template #empty>
          {{ $t('no requests found') }}
        </template>
        <template #loading>
          {{ $t('Loading please wait') }}
        </template>
        <Column field="date" :header="$t('date')"></Column>
        <Column field="country" :header="$t('country')"></Column>
        <Column
          field="travelers_number"
          :header="$t('travelers_number')"
        ></Column>
        <Column field="total_price" :header="$t('total_price')"></Column>
        <Column field="status" :header="$t('status')">
          <template #body="slotProps">
            <span class="status" :class="slotProps.data.status">
              {{ $t(slotProps.data.status) }}
            </span>
          </template>
        </Column>

        <Column field="id" :header="$t('actions')">
          <!-- <template #body="{data}">
            {{ data.id }}
          </template> -->
          <template #body="{data}">
            <router-link :to="`/client-area/visa/${data.id}`">
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
        this.item = this.allData?.visa_requests.filter(
          (el) => el.id == this.id,
        )[0]
      }
    },
    '$route.params.id'() {
      this.item = this.allData.visa_requests.filter(
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
