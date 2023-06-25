<template>
  <div class="orders-list">
    <div>
      <DataTable
        v-if="allData"
        :value="allData.tickets"
        responsiveLayout="scroll"
      >
        <template #empty>
          {{ $t('no tickets found') }}
        </template>
        <template #loading>
          {{ $t('Loading please wait') }}
        </template>
        <Column field="topic" :header="$t('topic')"></Column>
        <Column field="subject" :header="$t('subject')"></Column>
        <Column field="message" :header="$t('message')"></Column>
        <Column field="reply" :header="$t('reply')"></Column>

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
</style>
