<template>
  <div>
    <h2>Home: {{ $route.query.name }} - {{ $route.query.age }}</h2>
    <ul>
      <li>Home 内容1</li>
      <li>Home 内容2</li>
      <li>Home 内容3</li>
    </ul>

    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/shops">商品</router-link>
    <router-link to="/home/moment">时刻</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
