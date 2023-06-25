<template>
  <div class="orders-list">
    <div>
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
        <Column field="" :header="$t('actions')">
          <template #body>
            <i class="pi pi-eye"></i>
          </template>
        </Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  props: ['allData'],
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
