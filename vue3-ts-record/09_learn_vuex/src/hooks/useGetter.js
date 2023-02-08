import { mapGetters, createNamespacedHelpers } from 'vuex'
import { useMapper } from './useMapper'

export function useGetter(moduleName, mapper) {
  let mapperFn = mapGetters
  if (typeof moduleName === 'string' && moduleName.length > 0) {
    mapperFn = createNamespacedHelpers(moduleName).mapGetters // 如果有则创建映射函数
  }
  useMapper(mapper, mapperFn)
}
