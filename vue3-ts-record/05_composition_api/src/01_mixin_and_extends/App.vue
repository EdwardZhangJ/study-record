<template>
  <div>
    <home-vue></home-vue>
  </div>
</template>

<script>
import HomeVue from './pages/Home.vue';
export default {
  components: { HomeVue },
  data() {
    return {
      title: 'Hello World',
      message: 'Hello App',
    };
  },
  methods: {
    foo() {
      console.log('app foo');
    },
  },
  created() {
    console.log('执行了 App 生命周期');
  },
};
</script>

<style scoped></style>
