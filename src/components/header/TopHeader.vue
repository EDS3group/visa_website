<template>
  <div class="top-header">
    <div
      class="container d-flex align-items-center justify-content-between py-2"
    >
      <div class="links">
        <ul>
          <li>
            <a href="#" class="white">
              <i class="icon-phone white"></i>
              966502323232
            </a>
          </li>
          <!-- <li>
            <a href="#" class="white">
              <i class="icon-location-pin white"></i>
              Hollywood, America
            </a>
          </li>
          <li>
            <a href="#" class="white">
              <i class="icon-clock white"></i>
              Mon-Fri: 10 AM – 5 PM
            </a>
          </li> -->
        </ul>
      </div>
      <div class="links right">
        <ul>
          <li>
            <a href="#" class="white">
              <i class="fab fa-facebook" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" class="white">
              <i class="fab fa-twitter" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" class="white">
              <i class="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a href="#" class="white">
              <i class="fab fa-linkedin" aria-hidden="true"></i>
            </a>
          </li>
          <li>
            <a role="button" @click="changeLocale" class="white">
              <i class="fas fa-globe" aria-hidden="true"></i>
              {{ $t(`locale.${$i18n.locale}`) }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from 'js-cookie'
export default {
  methods: {
    changeLocale() {
      this.$i18n.locale == 'en'
        ? Cookies.set('locale', 'ar')
        : Cookies.set('locale', 'en')
      window.location.reload()
    },
  },
}
</script>

<style lang="scss">
.top-header {
  // @media (max-width: 768px) {
  //   display: none;
  // }
  background: $main_color;
  .links {
    ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      li {
        padding: 0 15px;
        &:not(:first-child) {
          border-left: 1px solid #f1f1f136;
        }
        &:first-child {
          padding-inline-start: 0;
        }
        a {
          color: #fff !important;
          font-size: 14px;
        }
      }
    }
  }
}
</style>
