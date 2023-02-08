<template>
  <div class="tab_control">
    <div
      class="tab_control_item"
      :class="{ active: currentIndex === index }"
      v-for="(title, index) in titles"
      :key="index"
      @click="itemClick(index)"
    >
      <span>{{ title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  emit: ['titleClick'],
  props: {
    titles: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      if (this.currentIndex == index) return
      this.$emit('titleClick', index)
    },
  },
}
</script>

<style scoped>
.tab_control {
  display: flex;
}

.tab_control_item {
  flex: 1;
  text-align: center;
}

.tab_control_item.active {
  color: red;
}

.tab_control_item.active span {
  padding: 5px 10px;
  border-bottom: 3px solid red;
}
</style>
