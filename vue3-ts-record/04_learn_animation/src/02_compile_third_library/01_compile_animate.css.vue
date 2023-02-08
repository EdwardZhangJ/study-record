<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>
    <transition
      enter-active-class="animate__animated animate__fadeInDown"
      leave-active-class="animate__animated animate__fadeIn"
      appear>
      <h2 v-if="isShow">Hello World</h2>
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
  },
};
</script>

<style scoped>
.app {
  width: 200px;
  margin: 0 auto;
}

.edward-enter-from,
.edward-leave-to {
  opacity: 0;
}

.edward-enter-to,
.edward-leave-from {
  opacity: 1;
}

.edward-enter-active,
.edward-leave-active {
  transition: opacity 1s linear;
}
.title {
  display: inline-block;
}
.edward-enter-active {
  /* animation: bounceChange 1s ease; */
  animation: bounceInUp 1s ease-in;
}

.edward-leave-active {
  /* animation: bounceChange 1s ease reverse; */
  animation: bounceInUp 1s ease-in reverse;
}

@keyframes bounceChange {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
