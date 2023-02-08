import { createApp } from 'vue';
import 'animate.css';

// import App from './01_mixin_and_extends/App.vue';
// import App from './02_composition_api_basic/App.vue';
// import App from './03_Ref_supplement/App.vue'
// import App from './04_computed_and_watch/App.vue'
// import App from './05_lifecycle_hooks/App.vue'
// import App from './06_provide_and_inject/App.vue';
// import App from './07_composition_api_practice/App.vue';
import App from './08_setup_top_code/App.vue';

const app = createApp(App);

// app.mixin({
//   data() {
//     return {};
//   },
//   methods: {},
//   created() {
//     console.log('全局混入 mixin  created');
//   },
// });
app.mount('#app');
