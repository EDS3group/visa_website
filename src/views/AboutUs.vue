<template>
  <div class="about-page">
    <section class="breadcrumb-main pb-20 pt-14">
      <div class="dot-overlay"></div>
      <div class="section-shape section-shape1 top-inherit bottom-0"></div>
      <div class="container-xl">
        <h1 class="text-white text-center">{{ $t('headers.aboutUs') }}</h1>

        <Breadcrumb
          class="justify-content-center"
          :home="home"
          :model="items"
        />
      </div>
    </section>
    <div class="container-xl pt-5 pb-5 position-relative">
      <div class="white-overlay"></div>
      <div
        class="row d-flex align-items-center justify-content-between position-relative z-10"
      >
        <div class="col-lg-6">
          <h3 class="title">Get to know more</h3>
          <div class="content">
            <h2 class="border-b pb-1 mb-2">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p class="mb-2 pb-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              molestias a nobis possimus, voluptas ipsa maiores unde
              voluptatibus obcaecati placeat provident beatae sapiente,
              distinctio deserunt libero. Porro at inventore consequuntur!
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              velit ab ad eaque numquam facilis error? Reiciendis beatae
              possimus vitae optio, id consequuntur nostrum itaque dolorem
              consequatur a nihil! Sit.
            </p>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="img-wrapper">
            <img src="@/assets/images/travel2.png" class="img-fluid" alt="bg" />
          </div>
        </div>
      </div>

      <div class="section-title text-center">
        <span class="sub-title">Flynext Package</span>
        <h2 class="title">Your Great Destination</h2>
        <p class="desc col-sm-10 col-lg-6 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          adipisicing elit. Repudiandae
        </p>
      </div>

      <div class="services">
        <div class="row">
          <div class="col-lg-3 col-md-6 col-sm-6 mb-4" v-for="n in 4" :key="n">
            <div class="why-us-item p-5 pt-6 pb-6 border rounded bg-white">
              <div class="why-us-content">
                <div class="why-us-icon mb-1">
                  <i class="icon-location-pin theme"></i>
                </div>
                <h4>
                  <router-link to="/about-us">
                    Share Your Travel Locations
                  </router-link>
                </h4>
                <p class="mb-2">
                  Excepteur sint occaecat cupidatat non proident, sunt in culpa
                  qui officia.
                </p>
                <p class="mb-0 theme">100+ Reviews</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: { icon: 'pi pi-home', to: '/' },
      items: [{ label: 'About us' }],
    }
  },
}
</script>

<style lang="scss">
.breadcrumb-main {
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  background-image: url('@/assets/images/bg1.jpg');
  .container-xl {
    position: relative;
    z-index: 12;
  }
}
.section-shape {
  background-image: url('@/assets/images/shape8.png');
  position: absolute;
  top: calc(100% - 96px);
  left: 0;
  width: 100%;
  height: 96px;
  background-size: contain;
  background-repeat: repeat-x;
  z-index: 10;
}
.section-shape.section-shape1 {
  transform: rotate(180deg);
}
.p-breadcrumb {
  border: 0;
  padding: 0;
  background: transparent;
  .p-breadcrumb-list {
    justify-content: center;
    li {
      &.p-menuitem-separator {
        color: #fff;
      }
      a {
        span {
          font-size: 16px !important;
          color: #fff !important;
          &.p-menuitem-icon.pi.pi-home {
            color: $main-color !important;
          }
        }
      }
      .pi.pi-chevron-right {
        &::before {
          content: '|' !important;
        }
      }
    }
  }
}

.pb-20,
.my-20 {
  padding-bottom: 10rem !important;
}

.pt-14,
.py-14 {
  padding-top: 7rem !important;
}
.dot-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  transition: all ease-in-out 0.5s;
  opacity: 0.5;
}
.about-page {
  background-repeat: no-repeat;
  background-position: bottom left;
  background-size: contain;
  position: relative;
  background-image: url('@/assets/images/shape4.png');
  background-position: center;

  h3.title {
    line-height: 28px;
    text-align: start;
    margin-bottom: 0px;
    font-size: 22px;
    color: $main-color;
    text-transform: capitalize;
  }
  .content {
    h2 {
      border-bottom: 1px dashed #f1f1f1;
    }
    p {
      border-bottom: 1px dashed #f1f1f1;
    }
  }
  .section-title {
    margin-top: 50px;
  }
  .why-us-item {
    position: relative;
    overflow: hidden;
    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 0;
      background: $main_color;
      z-index: 1;
    }

    .why-us-icon i {
      font-size: 58px;
      color: $main_color;
      transition: all ease-in-out 0.5s;
    }
    h4 {
      a {
        color: #17233e !important;
        transition: all ease-in-out 0.5s;
        cursor: pointer;
        text-decoration: none;
      }
    }
    p {
      transition: all ease-in-out 0.5s;
    }
    .why-us-content {
      position: relative;
      z-index: 2;
    }
    &:hover {
      &::before {
        height: 100%;
        transition: all ease-in-out 0.5s;
      }
      .why-us-icon i {
        color: #fff;
      }
      h4 {
        a {
          color: #fff !important;
        }
      }
      p {
        color: #fff !important;
      }
    }
  }
}
.white-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  transition: all ease-in-out 0.5s;
  opacity: 0.5;
}
</style>
