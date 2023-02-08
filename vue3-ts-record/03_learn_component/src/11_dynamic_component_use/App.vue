<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="btnClick(item)"
      :class="currentTab === item ? 'active' : ''"
    >
      {{ item }}
    </button>
    <!-- 2. 动态组件 -->
    <keep-alive>
      <component
        :is="currentTab"
        name="CoderWhy"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>

    <!-- 1. v-if 判断 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-else-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-else>
      <category></category>
    </template> -->
  </div>
</template>

<script>
import About from './pages/About.vue'
import Category from './pages/Category.vue'
import Home from './pages/Home.vue'
export default {
  components: { Home, About, Category },
  data() {
    return {
      tabs: ['home', 'about', 'category'],
      currentTab: 'home',
    }
  },
  methods: {
    btnClick(item) {
      this.currentTab = item
    },
    pageClick() {
      console.log('page页面发生了点击')
    },
  },
}
</script>

<style scoped>
.active {
  color: red;
}
</style>
