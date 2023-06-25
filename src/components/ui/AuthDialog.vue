<template>
  <Teleport to="body">
    <Dialog
      v-model:visible="showMessage"
      :breakpoints="{ '960px': '75vw', '640px': '100vw' }"
      :style="{ width: '50vw' }"
      position="top"
    >
      <div class="d-flex align-items-center flex-column pt-6 px-3">
        <i
          v-if="type == 'fail'"
          class="pi pi-info-circle"
          :style="{ fontSize: '5rem', color: 'var(--red-500)' }"
        ></i>
        <i
          v-else
          class="pi pi-check-circle"
          :style="{ fontSize: '5rem', color: 'var(--green-500)' }"
        ></i>
        <h5 class="mt-4">{{ $t(title) }}</h5>
        <p :style="{ lineHeight: 1.5, textIndent: '1rem' }">
          {{ $t(message) }}

          <!-- <b>{{ name }}</b> -->
        </p>
      </div>
      <template #footer>
        <div class="d-flex justify-content-center">
          <Button label="OK" @click="toggleDialog" class="p-button-text" />
        </div>
      </template>
    </Dialog>
  </Teleport>
</template>

<script>
export default {
  computed: {
    showMessage() {
      return this.$store.getters.authDialog.status
    },
    title() {
      return this.$store.getters.authDialog.title
    },
    type() {
      return this.$store.getters.authDialog.type
    },
    message() {
      return this.$store.getters.authDialog.message
    },
  },
  methods: {
    toggleDialog() {
      this.$store.commit('authDialog', { status: false })
    },
  },
}
</script>

<style></style>
