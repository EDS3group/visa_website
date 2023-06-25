<template>
  <main-loader v-if="isLoading" />
  <Header />
  <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
  <FooterVue />

  <auth-dialog />
</template>
<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import MainLoader from '@/components/loader/MainLoader.vue'
import AuthDialog from '@/components/ui/AuthDialog.vue'
import Header from '@/components/header/Header.vue'
import FooterVue from '@/components/Footer.vue'

// const toastBus = inject('toastBus')
// const toast = useToast()

// toastBus.on('*', (type, args) => {
//   if (type === 'add') {
//     toast.add(args)
//   } else if (type === 'remove') {
//     toast.remove(args)
//   }
// })

const store = useStore()

const isLoading = computed(() => store.getters.isLoading)
</script>

<style lang="scss"></style>
