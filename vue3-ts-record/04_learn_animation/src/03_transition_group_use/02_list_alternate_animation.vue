<template>
  <div>
    <input v-model="keyword" />
    <transition-group tag="ul" name="edward" :css="false" @before-enter="beforeEnter" @enter="enter" @leave="leave">
      <li v-for="(item, index) in showNames" :key="item" :data-index="index">{{ item }}</li>
    </transition-group>
  </div>
</template>

<script>
import gsap from 'gsap';
export default {
  data() {
    return {
      keyword: '',
      names: ['abc', 'cba', 'nba', 'why', 'edward', 'hmm', 'kobe', 'james'],
    };
  },
  computed: {
    showNames() {
      return this.names.filter((item) => item.indexOf(this.keyword) !== -1);
    },
  },
  methods: {
    beforeEnter(el, done) {
      el.style.opacity = 0;
      el.style.height = 0;
    },
    enter(el, done) {
      gsap.to(el, {
        opacity: 1,
        height: '1.5em',
        delay: el.dataset.index * 0.5,
        onComplete: done,
      });
    },
    leave(el, done) {
      gsap.to(el, {
        opacity: 0,
        height: 0,
        onComplete: done,
      });
    },
  },
};
</script>

<style scoped>
/* .edward-enter-from,
.edward-leave-to {
  opacity: 0;
}

.edward-enter-active,
.edward-leave-active {
  transition: all 1s ease;
} */
</style>
