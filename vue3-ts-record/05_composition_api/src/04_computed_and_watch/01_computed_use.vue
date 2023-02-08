<template>
  <div>
    <h2>{{ fullName }}</h2>
    <button @click="changeName">修改 name</button>
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const firstName = ref('Kobe');
    const lastName = ref('Bryant');

    // 1. 用法一: 传入一个 getter 函数
    // computed 返回值是 ref 对象
    // const fullName = computed(() => firstName.value + ' ' + lastName.value);

    // 2. 用法二:传入一个对象,对象包含 getter 和 setter
    const fullName = computed({
      get: () => firstName.value + ' ' + lastName.value,
      set: (newValue) => {
        const names = newValue.split(' ');
        firstName.value = names[0];
        lastName.value = names[1];
      },
    });

    const changeName = () => {
      // firstName.value = 'James';
      fullName.value = 'Edward West';
    };
    return {
      changeName,
      firstName,
      lastName,
      fullName,
    };
  },
};
</script>

<style scoped></style>
