<template>
  <div id="client_area" class="client_area pt-5 pb-5">
    <div class="container-xl">
      <div class="row">
        <div class="col-lg-3">
          <div class="user-sidebar">
            <div class="profile-sec">
              <div class="info">
                <h3 class="mb-1 text-white text-capitalize">
                  {{ userData.first_name }} {{ userData.last_name }}
                </h3>
                <p class="detail">
                  <i class="fa fa-envelope"></i>
                  {{ userData.email }}
                </p>
                <p class="detail">
                  <i class="fa fa-phone"></i>
                  {{ userData.phone }}
                </p>
              </div>

              <div class="dot-overlay"></div>
            </div>

            <a
              role="button"
              @click="trigger = !trigger"
              class="client-nav-responsive-nav-trigger"
            >
              <i class="fa fa-list"></i>
              {{ $t('Navigation') }}
            </a>
            <div class="client-nav" :class="trigger ? 'active' : ''">
              <div class="dashboard-nav-inner">
                <ul>
                  <li>
                    <router-link to="/client-area/profile">
                      <i class="pi pi-user"></i>
                      {{ $t('navs.profile') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client-area/visa">
                      <i class="fa fa-list-ul"></i>
                      {{ $t('navs.applyingForVisa') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client-area/passport">
                      <i class="fa fa-list-ul"></i>
                      {{ $t('navs.passportRenewals') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client-area/school">
                      <i class="fa fa-list-ul"></i>
                      {{ $t('navs.applying for a school') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client-area/new-ticket">
                      <i class="fal fa-envelope"></i>
                      {{ $t('navs.newTickets') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link to="/client-area/tickets">
                      <i class="fal fa-envelope"></i>
                      {{ $t('navs.tickets') }}
                    </router-link>
                  </li>

                  <li>
                    <a role="button" @click="$store.dispatch('logout')">
                      <i class="pi pi-sign-out"></i>
                      {{ $t('buttons.logout') }}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-9">
          <router-view :allData="allData"></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
const store = useStore()
const userData = computed(() => store.getters.user)
const trigger = ref(false)
const allData = ref(null)
// const allData = null

// const allOrders = ref(null)
async function getAllData() {
  await axios
    .get('auth/user-requests')
    .then((data) => (allData.value = data.data.data))
}
onMounted(() => getAllData())
</script>

<style lang="scss"></style>
