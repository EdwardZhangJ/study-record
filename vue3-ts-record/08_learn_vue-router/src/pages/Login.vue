<template>
  <div>
    <button @click="loginClick">登陆</button>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup() {
    const router = useRoute();

    const loginClick = () => {
      window.localStorage.setItem('token', 'why');
      router.push('/home');
    };
    return {
      loginClick,
    };
  },
};
</script>

<style scoped></style>
