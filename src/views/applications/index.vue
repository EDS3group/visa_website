<template>
  <div class="container-xl">
    <div class="header text-center my-5">
      <h2>
        {{ $t('Apply for') }}
        <span>{{ $t(`${$route.path}`) }}</span>
      </h2>
      <p>
        {{ $t('Feel free for applying') }}
      </p>
    </div>
  </div>

  <router-view></router-view>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  // margin-bottom: 50px;
  h2 {
    color: $textBlack;
    span {
      color: $second-color;
    }
  }
  p {
    color: $textBlack;
  }
}
</style>
