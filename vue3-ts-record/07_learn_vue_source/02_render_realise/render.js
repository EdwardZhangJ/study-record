const h = (tag, props, children) => {
  // vnode -> javascript 对象 -> {}
  return {
    tag,
    props,
    children,
  };
};

const mount = (vNode, container) => {
  // vNode -> element
  // 1. 创建出真实的dom，并且在 vNode上保留 el
  const el = (vNode.el = document.createElement(vNode.tag));

  // 2. 处理 props
  if (vNode.props) {
    for (const key in vNode.props) {
      const value = vNode.props[key];
      if (key.startsWith('on')) {
        // 对事件监听的判断
        el.addEventListener(key.slice(2).toLowerCase(), value);
      } else {
        el.setAttribute(key, value);
      }
    }
  }

  // 3. 处理 children
  if (vNode.children) {
    if (typeof vNode.children === 'string') {
      el.textContent = vNode.children;
    } else {
      vNode.children.forEach((item) => {
        mount(item, el);
      });
    }
  }

  // 4. 将 el 挂载到 container 上
  container.appendChild(el);
};

/**
 * 节点对比算法
 * @param {*} n1
 * @param {*} n2
 */
const patch = (n1, n2) => {
  // 判断 标签名是否相同
  if (n1.tag !== n2.tag) {
    // 不同，则直接替换
    const n1ElParent = n1.el.parentElement;
    n1ElParent.removeChild(n1.el);
    mount(n2, n1ElParent);
  } else {
    debugger;
    // 相同，
    // 1. 取出 element 对象，并且在 n2 中进行报错
    const el = (n2.el = n1.el);

    // 2. 处理 props
    const oldProps = n1.props || {};
    const newProps = n2.props || {};
    // 2.1 获取所有的 newProps 添加到 el 上
    for (const key in newProps) {
      const oldValue = oldProps[key];
      const newValue = newProps[key];
      if (oldValue !== newValue) {
        if (key.startsWith('on')) {
          // 对事件监听的判断
          el.addEventListener(key.slice(2).toLowerCase(), newValue);
        } else {
          el.setAttribute(key, newValue);
        }
      }
    }

    // 2.2 删除旧的 props
    for (const key in oldProps) {
      if (!(key in newProps)) {
        if (key.startsWith('on')) {
          const value = oldProps[key];
          el.removeEventListener(key.slice(2).toLowerCase, value);
        } else {
          el.removeAttribute(key);
        }
      }
    }
    // 3. 处理 children
    const oldChildren = n1.children || [];
    const newChildren = n2.children || [];

    // 情况一： newChildren 本身是一个 string
    if (typeof newChildren === 'String') {
      // 边界情况 edge case
      if (typeof oldChildren === 'String') {
        if (newChildren !== oldChildren) {
          el.textContent = newChildren;
        }
      } else {
        el.innerHTML = newChildren;
      }
    } else {
      // 情况二： newChildren 本身是一个 数组
      if (typeof oldChildren === 'String') {
        el.innerHTML = '';
        newChildren.forEach((item) => {
          mount(item, el);
        });
      } else {
        // oldChildren: [v1, v2, v3]
        // newChildren: [v1, v5, v6, v8, v9]
        // 1. 前面有相同节点的元素进行 patch 操作
        const commonLength = Math.min(oldChildren.length, newChildren.length);
        for (let i = 0; i < commonLength; i++) {
          patch(oldChildren[i], newChildren[i]);
        }
        // 2. newChildren.length > oldChildren.length
        if (newChildren.length > oldChildren.length) {
          newChildren.slice(oldChildren.length).forEach((item) => {
            mount(item, el);
          });
        }

        // 3. newChildren.length < oldChildren.length
        if (newChildren.length < oldChildren.length) {
          oldChildren.slice(newChildren.length).forEach((item) => {
            el.removeChild(item.el)
          });
        }
        
      }
    }
  }
};
