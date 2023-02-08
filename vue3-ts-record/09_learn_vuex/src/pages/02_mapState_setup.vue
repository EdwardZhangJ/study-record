<template>
  <div>
    <h2>Home: {{ $store.state.counter }}</h2>
    <h2>Home: {{ sCounter }}</h2>
    <h2>Home: {{ name }}</h2>
    <h2>Home: {{ age }}</h2>
    <h2>Home: {{ height }}</h2>
  </div>
</template>

<script>
import { mapState, useStore } from 'vuex'
import { computed } from 'vue'
export default {
  setup() {
    const store = useStore()
    const sCounter = computed(() => store.counter)

    const storeMap = mapState(['counter', 'name', 'age', 'height'])
    // {name: function, age: function, height: function}
    const storeObj = {}
    Object.keys(storeMap).forEach((fnKey) => {
      const fun = storeMap[fnKey].bind({ $store: store })
      storeObj[fnKey] = computed(fun)
    })

    return {
      sCounter,
      ...storeObj,
    }
  },
}
</script>

<style scoped></style>
