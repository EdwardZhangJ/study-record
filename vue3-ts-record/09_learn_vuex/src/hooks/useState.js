import { createNamespacedHelpers, mapState } from 'vuex'
import { useMapper } from './useMapper'
export function useState(moduleName, mapper) {
  let mapperFn = mapState
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapState // 如果有则创建映射函数
  }
  useMapper(mapper, mapperFn)
}
