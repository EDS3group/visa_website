<template>
  <div class="service-card">
    <Card>
      <template #header>
        <img :src="imgSrc" />
      </template>
      <template #title>
        {{ $t(title) }}
      </template>

      <template #footer>
        <router-link class="mainButton center" :to="`/services/${serviceLink}`">
          {{ $t(actionName) }}
        </router-link>
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  props: {
    imgSrc: { required: true },
    title: { required: true },
    serviceLink: { required: true },
    actionName: {
      default: 'apply',
    },
  },
}
</script>

<style lang="scss">
.service-card {
  height: 100%;
  .p-card {
    max-width: 25rem;
    background: #ffffff;
    margin-inline: auto;
    box-shadow: 0 2px 1px -1px rgba(0, 0, 0, 0.2),
      0 1px 1px 0 rgba(0, 0, 0, 0.14), 0 1px 3px 0 rgba(0, 0, 0, 0.12);
    border-radius: 4px;
    margin-bottom: 2rem;
    .p-card-header {
      background: $main-color;
      padding: 0;
      height: 12rem;
      img {
        height: 100%;
        object-fit: cover;
      }
    }
    .p-card-title {
      color: $main-color;
      text-align: center;
      padding-bottom: 5px;
      border-bottom: 1px solid $main-color;
      font-size: 16px;
    }

    .p-card-content {
      display: none;
    }
    .p-card-footer {
      padding-top: 0;
    }
  }
}
</style>
