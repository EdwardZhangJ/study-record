<template>
  <div>
    <input :value="modelValue" @input="inputChange" />
    <!-- <button @click="btnClick">edInput按钮</button>
    <h2>EDInput的message: {{ modelValue }}</h2> -->

    <input type="text" v-model="inputValue" />
    <input type="text" v-model="inputTitle" />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
  },
  computed: {
    inputValue: {
      set(value) {
        this.$emit('update:modelValue', value)
      },
      get() {
        return this.modelValue
      },
    },
    inputTitle: {
      set(value) {
        this.$emit('update:title', value)
      },
      get() {
        return this.title
      },
    },
  },
  data() {
    return {}
  },
  emits: ['update:modelValue', 'update:title'],
  methods: {
    btnClick() {
      this.$emit('update:modelValue', '123')
    },
    inputChange(event) {
      this.$emit('update:modelValue', event.target.value)
    },
  },
}
</script>
