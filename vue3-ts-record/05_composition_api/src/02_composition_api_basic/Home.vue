<template>
  <button @click="updateSate">修改状态</button>
</template>

<script>
import { reactive, ref, readonly } from 'vue';
export default {
  setup() {
    // 1. 普通对象
    const info1 = { name: 'why' };
    const readonlyInfo1 = readonly(info1);

    // 2. 响应式对象 reactive
    const info2 = reactive({
      name: 'why',
    });
    const readonlyInfo2 = readonly(info2);

    // 3. 响应式对象 ref
    const info3 = ref('why');
    const readonlyInfo3 = readonly(info3);

    // 局部函数
    const updateSate = () => {
      // readonlyInfo1.name = 'coderWhy';
      // readonlyInfo2.name = 'coderWhy';
      readonlyInfo3.name = 'coderWhy';
    };
    return {
      updateSate,
    };
  },
};
</script>

<style scoped></style>
