<template>
  <div>
    <!-- props: href 跳转的链接 -->
    <!-- props: route 路由对象 -->
    <!-- props: navigate 导航函数 -->
    <!-- props: isActive 是否当前处于活跃状态 -->
    <!-- props： isExactActive 是否当前处于精确的活跃状态 -->
    <router-link to="/home" active-class v-slot="props" custom>
      <nav-bar-vue title="首页" @click="props.navigate" />
      <button @click="props.navigate">{{ props.href }}</button>
      <span>{{ props.isActive }}</span>
      <span>{{ props.isExactActive }}</span>
      <!-- <p>{{ props.route }}</p> -->
    </router-link>
    <router-link to="/about" active-class>关于</router-link>
    <router-link to="/user/sig" active-class>用户</router-link>
    <router-link to="/category" active-class>分类</router-link>

    <button @click="jumpToHome">首页</button>
    <button @click="forwardOneStep">前进一步</button>

    <router-view v-slot="props">
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import NavBarVue from './components/NavBar.vue';
export default {
  // methods: {
  //   jumpToHome() {
  //     this.$router.push('/home');
  //   },
  // },
  components: {
    NavBarVue,
  },
  setup() {
    const router = useRouter();
    const jumpToHome = () => {
      router.push({
        path: '/home',
        query: {
          name: 'why',
          age: 16,
        },
      });
      // router.replace('/home')
    };

    const forwardOneStep = () => {
      router.go(1);
    };
    return {
      jumpToHome,
      forwardOneStep,
    };
  },
};
</script>

<style scoped>
.router-link-exact-active {
  color: red;
}

.why-enter-from,
.why-leave-to {
  opacity: 0;
}
.why-enter-active,
.why-leave-active {
  transition: opacity 1s ease;
}
</style>
