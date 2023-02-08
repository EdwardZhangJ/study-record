export default function (app) {
  app.directive('focus', {
    mounted(el, bindings, vnode, preVnode) {
      console.log('focus mounted');
      el.focus();
    },
  });
}
