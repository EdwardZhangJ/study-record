import { createApp } from 'vue';
import registerDirectives from './directives';
import 'animate.css';
import usePlugins from './plugins';
// import pluginObject from './plugins/01_plugins_object';
// import pluginFunction from './plugins/02_plugins_function'

// import App from './01_render_function/App.vue';
// import App from './02_jsx_use/App.vue';
// import App from './03_custom_directive/App.vue';
import App from './04_teleport_built-in_component/App.vue';
const app = createApp(App);

// 统一注册指令
registerDirectives(app);

// 使用插件
// app.use(pluginObject);
// app.use(pluginFunction);
app.use(usePlugins);

app.mount('#app');
