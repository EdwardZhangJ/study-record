<template>
  <div></div>
</template>

<script>
import emitter from './utils/eventBus'
import { WHY_EVENT, KOBE_EVENT } from './utils/constant'

export default {
  created() {
    emitter.on(WHY_EVENT, (info) => {
      console.log('why', info)
    })
    // emitter.on(KOBE_EVENT, (info) => {
    //   console.log('kobe', info)
    // })
    emitter.on('*', (type, info) => {
      console.log('* listener', type, info)
    })
  },
  data() {
    return {}
  },
  methods: {},
}
</script>

<style scoped></style>
