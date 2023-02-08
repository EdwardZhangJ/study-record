<template>
  <div id="app">
    <show-message class="no_props_attribute" title="哈哈哈" content="我是哈哈哈"></show-message>
    <show-message title="呵呵呵" content="我是呵呵呵"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <show-message :title="message.title" :content="message.content"></show-message>
  </div>
</template>

<script>
import ShowMessage from './ShowMessage.vue'

export default {
  components: { ShowMessage },
  data() {
    return {
      title: '嘻嘻嘻',
      content: '我是嘻嘻嘻',
      message: {
        title: '嘻嘻嘻',
        content: '我是嘻嘻嘻',
      },
    }
  },
}
</script>

<style scoped>

</style>
