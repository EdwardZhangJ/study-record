# 前端模块化相关问题

- 什么是前端模块化？
  - 模块化的开发可以提供代码复用率，方便进行代码的管理。通常一个文件就是一个模块，有自己的作用域，只向外暴露特定的变量和函数

- 模块化的规范有哪些？
  - 目前流行的JS模块化规范有 CommonJS、AMD、CMD以及ES6 Module

- ESModule和CommonJS的区别？
  - 使用语法层面：CommonJS是通过module.exports, exports导出，require导入；ESModule是通过export导出，import导入
  - CommonJS是运行时加载模块，ESModule是在静态编译期间就确定模块的依赖
  - ESModule在编译期间回将所有import提升到顶部,CommonJS不会提升require
  - CommonJS导出的是一个值拷贝，会对加载结果进行缓存，一旦内部不在修改这个值，则不会同步到外部。ESModule是导出的一个引用，内部修改可以同步到外部
  - CommonJS中顶层的this指向这个模块本身，而ESModule中顶层this指向undefined
  - CommonJS加载的是整个模块，将所有的接口全部加载进来，ESModule可以单独加载其中的某个接口
