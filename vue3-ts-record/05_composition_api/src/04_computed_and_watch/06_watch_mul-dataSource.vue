<template>
  <div>
    <h2 ref="title">{{ name }}</h2>
    <h2>{{ info.name }} - {{ info.age }}</h2>
    <button @click="changeData">修改数据</button>
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

export default {
  setup() {
    // 1. 定义可响应式对象
    const name = ref('why');
    const info = reactive({ name: 'why', age: 18 });

    // 2. 侦听器 watch
    // watch([info, name], (newValue, oldValue) => {
    //   console.log('newValue', newValue, 'oldValue', oldValue);
    // });
    // watch([info, name], ([newInfo, newName], [oldInfo, oldName]) => {
    //   console.log(newInfo, newName, oldInfo, oldName);
    // });
    watch([() => ({ ...info }), name], ([newInfo, newName], [oldInfo, oldName]) => {
      console.log(newInfo, newName, oldInfo, oldName);
    });

    const changeData = () => {
      info.name = 'edward';
      name.value = 'edward';
    };
    return {
      name,
      info,
      changeData,
    };
  },
};
</script>

<style scoped></style>
