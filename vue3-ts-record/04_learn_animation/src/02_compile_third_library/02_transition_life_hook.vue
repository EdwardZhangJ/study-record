<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave">
      <h2 class="title" v-if="isShow">Hello World</h2>
    </transition>
  </div>
</template>

<script>
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
    beforeEnter() {
      console.log('beforeEnter');
    },
    enter() {
      console.log('enter');
    },
    afterEnter() {
      console.log('afterEnter');
    },
    beforeEnter() {
      console.log('beforeEnter');
    },
    beforeLeave() {
      console.log('beforeLeave');
    },
    leave() {
      console.log('leave');
    },
    afterLeave() {
      console.log('afterLeave');
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
