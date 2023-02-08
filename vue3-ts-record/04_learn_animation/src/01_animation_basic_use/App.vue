<template>
  <div class="app">
    <button @click="toggle">显示/隐藏</button>
    <!-- <transition name="edward" type="transition" :duration="1000"> -->
    <transition name="edward" mode="out-in" appear>
      <component :is="isShow ? 'home' : 'about'"></component>
    </transition>
  </div>
</template>

<script>
import Home from './pages/Home.vue';
import About from './pages/About.vue';
export default {
  components: { About, Home },
  data() {
    return {
      isShow: true
    };
  },
  methods: {
    toggle() {
      this.isShow = !this.isShow;
    }
  }
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
  animation: bounceChange 1s ease;
}

.edward-leave-active {
  animation: bounceChange 1s ease reverse;
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
