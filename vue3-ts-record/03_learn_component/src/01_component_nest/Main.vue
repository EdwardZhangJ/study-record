<template>
  <div class="main">
    <main-banner></main-banner>
    <main-product></main-product>
  </div>
</template>

<script>
import MainBanner from './MainBanner.vue'
import MainProduct from './MainProduct.vue'
export default {
  components: { MainBanner, MainProduct },
  data() {
    return {}
  },
}
</script>

<style scoped></style>
