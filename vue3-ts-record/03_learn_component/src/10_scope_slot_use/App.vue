<template>
  <div>
    <!-- 渲染作用域 -->
    <!-- <child-component>
      <button>哈哈哈</button>
    </child-component> -->
    <show-names :names="names">
      <template v-slot="slotProps">
        <strong>{{ slotProps.item }}-{{ slotProps.index }}</strong>
      </template>
    </show-names>
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'
import ShowNames from './ShowNames.vue'
export default {
  components: { ChildComponent, ShowNames },
  data() {
    return {
      names: ['why', 'kobe', 'james', 'curry'],
    }
  },
  methods: {},
}
</script>

<style scoped></style>
