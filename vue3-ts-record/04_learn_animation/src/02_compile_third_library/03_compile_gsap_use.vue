<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>
    <transition @enter="enter" @leave="leave">
      <h2 class="title" v-if="isShow" :css="false">Hello World</h2>
    </transition>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  data() {
    return {
      isShow: true,
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    },
    enter(el, done) {
      console.log('enter');
      gsap.from(el, {
        scale: 0,
        x: 200,
        onComplete: done,
      });
    },
    leave(el, done) {
      console.log('leave');
      gsap.to(el, {
        scale: 0,
        x: 200,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
.app {
  width: 200px;
  margin: 0 auto;
}

.title {
  display: inline-block;
}
</style>
