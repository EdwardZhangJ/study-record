import { computed } from 'vue'
import { useStore } from 'vuex'
export function useMapper(mapper, mapFn) {
  // 拿到 store 对象
  const store = useStore()
  // 获取到对应的对象的 functions： {name： function, age: function}
  const storeFuncMap = mapFn(mapper)

  // 对数据进行转换
  const storeState = {}
  Object.keys(storeFuncMap).forEach((fnKey) => {
    const fun = storeFuncMap[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fun)
  })

  return storeState
}
