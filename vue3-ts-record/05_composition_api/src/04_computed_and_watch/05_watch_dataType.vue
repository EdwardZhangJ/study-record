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
    const title = ref(null);
    const info = reactive({ name: 'why', age: 18 });
    // 1. 侦听watch 时, 传入 getter 函数
    watch(
      () => info.name,
      (newValue, oldValue) => {
        console.log('1,', 'newValue', newValue, 'oldValue', oldValue);
      }
    );
    // 2. 传入一个可响应式对象： reactive对象/ref 对象
    // 2.1 reactive 对象获取到的 newValue 和 oldValue 本身都是 reactive
    watch(info, (newValue, oldValue) => {
      console.log('newValue', newValue, 'oldValue', oldValue);
    });

    // 如果希望 newValue 和 oldValue 是一个普通对象
    watch(
      () => {
        return { ...info };
      },
      (newValue, oldValue) => {
        console.log('newValue', newValue, 'oldValue', oldValue);
      }
    );
    // 2.2 ref 对象获取到的 newValue 和 oldValue 是值的本身
    let name = ref('why');
    watch(name, (newValue, oldValue) => {
      console.log('newValue', newValue, 'oldValue', oldValue);
    });

    const changeData = () => {
      info.name = 'edward';
      name.value = 'edward';
    };
    return {
      name,
      title,
      info,
      changeData,
    };
  },
};
</script>

<style scoped></style>
