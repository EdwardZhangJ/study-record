<template>
  <div>
    <h2>{{ name }} - {{ age }}</h2>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue';
export default {
  setup() {
    const info = reactive({ name: 'why', age: 15 });
    // 1. toRefs: 将 reactive 对象中的所有属性都转成 ref 建立链接
    // let { name, age } = toRefs(info);
    // 2. toRef: 对其中一个属性进行转换 ref,建立链接
    let { name } = info;
    let age = toRef(info, 'age');

    const changeAge = () => {
      age.value++;
    };
    return {
      name,
      age,
      changeAge,
    };
  },
};
</script>

<style scoped></style>
