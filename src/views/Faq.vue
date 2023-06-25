<template>
  <div class="faq-page">
    <section class="breadcrumb-main pb-20 pt-14">
      <div class="dot-overlay"></div>
      <div class="section-shape section-shape1 top-inherit bottom-0"></div>
      <div class="container-xl">
        <h1 class="text-white text-center">Faq</h1>

        <Breadcrumb
          class="justify-content-center"
          :home="home"
          :model="items"
        />
      </div>
    </section>
    <div class="container-xl pt-5 pb-5">
      <h3 class="title">{{ $t('Faq') }}</h3>
      <div class="row">
        <div class="col-md">
          <Accordion :activeIndex="0">
            <AccordionTab v-for="n in 3" :key="n">
              <template #header>
                <i class="pi pi-user"></i>
                <span>{{ $t('Question ') }}</span>
              </template>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ab repellendus odio blanditiis! Iusto eligendi consectetur
              laboriosam laborum rem ipsum minima voluptatibus, incidunt tempora
              exercitationem dolorem inventore quae aliquid ullam.
            </AccordionTab>
          </Accordion>
        </div>
        <div class="col-md">
          <Accordion :activeIndex="0">
            <AccordionTab v-for="n in 3" :key="n">
              <template #header>
                <i class="pi pi-user"></i>
                <span>{{ $t('traveller') }}</span>
              </template>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              ab repellendus odio blanditiis! Iusto eligendi consectetur
              laboriosam laborum rem ipsum minima voluptatibus, incidunt tempora
              exercitationem dolorem inventore quae aliquid ullam.
            </AccordionTab>
          </Accordion>
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
      items: [{ label: 'faq' }],
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
  .container {
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
.faq-page {
  .p-accordion-tab {
    .p-accordion-header-link {
      background: $main-color !important;
      color: #fff !important;
      box-shadow: none !important;
    }
  }
  h3.title {
    text-align: center;
    margin-bottom: 30px;
    font-size: 28px;

    color: $main-color;
    text-transform: capitalize;
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
</style>
