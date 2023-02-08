<template>
  <div>
    App 组件
    <home></home>

    <suspense>
      <template #default>
        <async-category></async-category>
      </template>
      <template #fallback>
        <loading></loading>
      </template>
    </suspense>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
import Home from './Home.vue'
import Loading from './Loading.vue'
// import AsyncCategory from './AsyncCategory.vue'
// 1. 工厂函数
const AsyncCategory = defineAsyncComponent(() => import('./AsyncCategory.vue'))
// 2. 函数形式
// const AsyncCategory = defineAsyncComponent({
//   loader: () => import('./AsyncCategory.vue'),
//   loadingComponent: Loading,
//   // 在显示 loadingComponent 组件之前，等待时间
//   delay: 2000,
//   /**
//    * err: 错误信息
//    * retry: 函数，调用 retry 尝试重新加载
//    * attempts： 记录尝试次数
//    */
//   onError: function(err, retry, attempts) {

//   }
// })
export default {
  components: { Home, AsyncCategory, Loading },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
