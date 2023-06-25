<template>
  <div class="box">
    <img src="@/assets/images/loader.gif" alt="" />
  </div>
</template>

<script>
export default {
  name: 'MainLoader',
  props: ['ChartType'],
  data() {
    return {}
  },
  created() {},
}
</script>
<style lang="scss" scoped>
.box {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1002;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
