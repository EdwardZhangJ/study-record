<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
import emitter from './utils/eventBus'
import { WHY_EVENT, KOBE_EVENT } from './utils/constant'

export default {
  data() {
    return {}
  },
  methods: {
    btnClick() {
      console.log('about按钮点击')
      emitter.emit(WHY_EVENT, { name: 'why', age: 16 })
      emitter.emit(KOBE_EVENT, { name: 'kobe', age: 30 })
    },
  },
}
</script>

<style scoped></style>
