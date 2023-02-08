<template>
  <div>
    <my-slot>
      <button>我是按钮</button>
    </my-slot>
    <my-slot> 我是普通文本 </my-slot>
    <!-- 插入组件 -->
    <my-slot>
      <my-button></my-button>
    </my-slot>

    <!-- 默认值 -->
    <my-slot></my-slot>
    <!-- 插入多个内容 -->
    <my-slot>
      <h2>哈哈哈</h2>
      <button>我是按钮</button>
      <strong>我是strong 标签
        
      </strong>
    </my-slot>
  </div>
</template>

<script>
import MyButton from './MyButton.vue'
import MySlot from './MySlot.vue'
export default {
  components: { MySlot, MyButton },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
