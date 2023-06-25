<template>
  <div class="terms-page">
    <section class="breadcrumb-main pb-20 pt-14">
      <div class="dot-overlay"></div>
      <div class="section-shape section-shape1 top-inherit bottom-0"></div>
      <div class="container-xl">
        <h1 class="text-white text-center">{{ $t('term & condition') }}</h1>

        <Breadcrumb
          class="justify-content-center"
          :home="home"
          :model="items"
        />
      </div>
    </section>
    <div class="container-xl pt-5 pb-5">
      <h3 class="title">{{ $t('term & condition') }}</h3>
      <div class="content" v-for="n in 5" :key="n">
        <h4 class="title">
          Lorem ipsum dolor sit amet consectetur
        </h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          molestias a nobis possimus, voluptas ipsa maiores unde voluptatibus
          obcaecati placeat provident beatae sapiente, distinctio deserunt
          libero. Porro at inventore consequuntur! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Debitis velit ab ad eaque numquam
          facilis error? Reiciendis beatae possimus vitae optio, id consequuntur
          nostrum itaque dolorem consequatur a nihil! Sit.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: { icon: 'pi pi-home', to: '/' },
      items: [{ label: 'terms' }],
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
.terms-page {
  h3.title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 28px;

    color: $main-color;
    text-transform: capitalize;
  }
}
</style>
