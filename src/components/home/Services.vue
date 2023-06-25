<template>
  <section class="services">
    <div class="section-title text-center">
      <span class="sub-title">Flynext Package</span>
      <h2 class="title">Your Great Destination</h2>
    </div>
    <div class="container-xl">
      <div class="row">
        <div
          class="col-sm-6 col-lg-3"
          v-for="service in services"
          :key="service"
        >
          <service-card
            :imgSrc="service.imgSrc"
            :title="service.title"
            :serviceLink="service.serviceLink"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '../ui/ServiceCard.vue'
export default {
  components: { ServiceCard },
  data() {
    return {
      services: [
        {
          imgSrc: require('@/assets/images/visa.jpeg'),
          title: 'applyingForVisa',
          serviceLink: 'visa?step=1',
        },
        {
          imgSrc: require('@/assets/images/passport.png'),
          title: 'Passport renewals',
          serviceLink: 'passport',
        },
        {
          imgSrc: require('@/assets/images/school.jpg'),
          title: 'footballMatchesPackages',
          serviceLink: 'football-matches',
        },
        {
          imgSrc: require('@/assets/images/matches.webp'),
          title: 'applying for a school',
          serviceLink: 'school',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
.services {
  padding-block: 50px;
}
</style>
