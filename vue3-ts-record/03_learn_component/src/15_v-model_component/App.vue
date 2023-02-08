<template>
  <div>
    <!-- <input type="text" v-model="message" />
    <input
      type="text"
      :value="message"
      @input="message = $event.target.value"
    /> -->
    <!-- 组件上使用 v-model -->
    <!-- <e-d-input v-model="message"></e-d-input> -->
    <!-- 组件上使用 v-model 等价于 -->
    <!-- <e-d-input :modelValue="message" @update:model-value="message = $event"></e-d-input> -->

    <!-- 组件上绑定两个 v-model -->
    <e-d-input v-model="message" v-model:title="title"></e-d-input>

    <h2>{{ message }}</h2>
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
import EDInput from './EDInput.vue'
export default {
  components: { EDInput },
  data() {
    return {
      message: 'Hello world',
      title: '123',
    }
  },
  methods: {},
}
</script>

<style scoped></style>
