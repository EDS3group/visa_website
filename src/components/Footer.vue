<template>
  <footer class="pt-20 pb-4">
    <div class="section-shape top-0"></div>
    <div class="container-xl">
      <div class="row mb-4">
        <div class="col-md-6">
          <div class="footer-about">
            <img
              src="@/assets/images/logo/logo.png"
              width="100"
              alt="footerlogo"
            />
            <p class="mt-3 mb-3 white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Odio
              suspendisse leo neque iaculis molestie sagittis maecenas aenean
              eget molestie sagittis.
            </p>
            <ul class="list-unstyled">
              <li class="white">
                <strong>PO Box:</strong>
                +966502323232
              </li>
              <li class="white">
                <strong>Location:</strong>
                test Street, test, test
              </li>
              <li class="white">
                <strong>Email:</strong>
                info@skyvisa.com
              </li>
              <li class="white">
                <strong>Website:</strong>
                www.skyvisa.com
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="footer-links">
            <h3 class="text-white">Quick link</h3>
            <ul>
              <li>
                <router-link to="/">{{ $t('navs.home') }}</router-link>
              </li>
              <li>
                <router-link to="/about-us">
                  {{ $t('navs.aboutUs') }}
                </router-link>
              </li>
              <li>
                <router-link to="/user/track-order">
                  {{ $t('navs.trackMyRequest') }}
                </router-link>
              </li>
              <li>
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
              </li>

              <li>
                <router-link to="/contact-us">
                  {{ $t('navs.contactUs') }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-3 mb-4">
          <div class="footer-links">
            <h3 class="white">{{ $t('SKY VISA Services') }}</h3>
            <ul>
              <li>
                <router-link to="/services/visa?step=1">
                  {{ $t('navs.applyingForVisa') }}
                </router-link>
              </li>
              <li>
                <router-link to="/services/passport">
                  {{ $t('navs.passportRenewals') }}
                </router-link>
              </li>
              <li>
                <router-link to="/services/football-matches">
                  {{ $t('navs.footballMatchesPackages') }}
                </router-link>
              </li>
              <li>
                <router-link to="/services/school">
                  {{ $t('navs.applying for a school') }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        class="copyright-inner rounded p-3 d-md-flex align-items-center justify-content-between"
      >
        <div class="copyright-text">
          <p class="m-0 text-white">
            Powered by
            <a href="https://thepalmsolutions.com" target="_blank">
              Palm Solutions
            </a>
          </p>
        </div>
        <div class="social-links">
          <ul class="list-unstyled m-0">
            <li>
              <a href="#"><i class="fab fa-facebook" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-twitter" aria-hidden="true"></i></a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-instagram" aria-hidden="true"></i>
              </a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin" aria-hidden="true"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="scss">
footer {
  background-image: url('@/assets/images/background_pattern.png');
  width: 100%;
  overflow: hidden;
  position: relative;
  background-position: bottom right;
  background-repeat: no-repeat;
  background-color: #17233e;
  a {
    color: #fff !important;
    transition: all 0.3s;
    &:hover {
      color: $second-color !important;
    }
  }
  .container-xl {
    padding-top: 100px;
  }
}

.footer-about {
  img {
    filter: brightness(0) invert(1);
  }
  * {
    color: #fff;
  }
}
.footer-links {
  > h3 {
    margin-bottom: 20px;
    position: relative;
    color: #fff !important;
    &::after {
      content: '';
      margin-top: 10px;
      display: block;
      height: 2px;
      width: 50px;

      background: #fff;
    }
  }
  li {
    margin-bottom: 10px;
  }
}
.copyright-inner {
  background: #fbfbfb12 !important;
}
.rounded {
  border-radius: 10px;
}
.social-links ul li {
  display: inline-block;
  &:not(:last-child) {
    margin-inline-end: 5px;
  }
  a {
    background: #ffffff26;
    color: #fff !important;
    width: 40px;
    height: 40px;
    display: inline-block;
    text-align: center;
    font-size: 17px;
    line-height: 2.4;
    border-radius: 50%;
  }
}
.section-shape {
  background-image: url('@/assets/images/shape8.png');
  position: absolute;
  top: -96px;
  left: 0;
  width: 100%;
  height: 96px;
  background-size: contain;
  background-repeat: repeat-x;
  z-index: 1;
}
</style>
