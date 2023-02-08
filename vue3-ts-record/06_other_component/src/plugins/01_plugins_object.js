export default {
  install(app) {
    console.log(app);
    // 全局命名规范 + $
    app.config.globalProperties.$name = 'coderWhy';
  },
};
