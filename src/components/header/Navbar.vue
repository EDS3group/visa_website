<template>
  <div class="header_menu" id="header_menu">
    <nav class="navbar navbar-expand-lg navbar-light">
      <div class="container-xl">
        <router-link to="/" class="navbar-brand">
          <img width="100" src="@/assets/images/logo/logo.png" alt="logo" />
        </router-link>
        <div
          class="register-login order-lg-2 d-flex align-items-center position-relative"
        >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div v-if="isLoggedIn">
            <router-link to="/client-area/profile" class="mainButton">
              <i class="pi pi-user"></i>
              <span class="ms-2">
                {{ $t('client area') }}
              </span>
            </router-link>
            <!-- aria-haspopup="true"
              aria-controls="overlay_menu" -->
            <!-- @click="toggle" -->
            <!-- <Teleport to="body">
              <Menu
                id="overlay_menu"
                ref="profileMenu"
                :model="profileMenuItems"
                :popup="true"
              />
            </Teleport> -->
          </div>
          <router-link
            v-else
            to="/login"
            href="#"
            data-toggle="modal"
            data-target="#exampleModal"
            class="me-3"
          >
            <i class="icon-user"></i>
            {{ $t('buttons.Login/Register') }}
          </router-link>
          <!-- <a href="#" class="nir-btn white">Book Now</a> -->
        </div>

        <div
          class="collapse navbar-collapse order-1 justify-content-center"
          id="navbarSupportedContent"
        >
          <ul class="navbar-nav align-items-center">
            <li class="nav-item">
              <router-link to="/" class="nav-link">
                {{ $t('navs.home') }}
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/contact-us" class="nav-link">
                {{ $t('navs.contactUs') }}
              </router-link>
            </li>
            <li class="nav-item dropdown text-center">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data--toggle="dropdown"
                aria-expanded="false"
              >
                {{ $t('services') }}
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link
                    to="/services/visa?step=1"
                    class="dropdown-item"
                    href="#"
                  >
                    {{ $t('applyingForVisa') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/services/passport" class="dropdown-item">
                    {{ $t('Passport renewals') }}
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/services/football-matches"
                    class="dropdown-item"
                  >
                    {{ $t('navs.footballMatchesPackages') }}
                  </router-link>
                </li>
                <li>
                  <router-link to="/services/school" class="dropdown-item">
                    {{ $t('navs.applying for a school') }}
                  </router-link>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <router-link to="/about-us" class="nav-link">
                {{ $t('navs.aboutUs') }}
              </router-link>
            </li>

            <li class="nav-item">
              <a href="#search1" class="nav-link">
                <i class="fa fa-search"></i>
              </a>
            </li>
            <!-- <li>
              <router-link to="/faq">{{ $t('navs.faq') }}</router-link>
            </li>
            <li>
              <router-link to="/terms">
                {{ $t('navs.termsAndConditions') }}
              </router-link>
            </li>
            <li>
              <router-link to="/privacy">
                {{ $t('navs.privacyPolicy') }}
              </router-link>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { ref } from 'vue'
import i18n from '@/i18n'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLoggedIn
    },
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const profileMenu = ref('')
    const profileMenuItems = ref([
      {
        label: i18n.global.t('navs.profile'),
        items: [
          {
            label: i18n.global.t('personal_information'),
            icon: 'pi pi-user',
            command: () => {
              router.push('/client-area/profile')
            },
          },
          {
            label: i18n.global.t('orders'),
            icon: 'pi pi-list',
            command: () => {
              router.push('/client-area/orders')
            },
          },
          {
            label: i18n.global.t('logout'),
            icon: 'pi pi-sign-out',
            command: () => {
              store.dispatch('logout')
            },
          },
        ],
      },
    ])

    const toggle = (event) => {
      profileMenu.value.toggle(event)
    }

    return { profileMenu, profileMenuItems, toggle }
  },
}
</script>

<style lang="scss">
.header_menu {
  .navbar-nav {
    .nav-item {
      .nav-link {
        padding: 0 8px;
        &.router-link-active.router-link-exact-active {
          color: $main_color !important;
        }
      }
    }
  }

  .p-button.p-button-link {
    color: #333 !important;
  }
}
.navbar-toggler {
  box-shadow: none !important;
  border: 0 !important;
}
.p-menu-overlay {
  left: unset !important;
  right: 10px;
}
</style>
