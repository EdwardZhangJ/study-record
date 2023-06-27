import {PureComponent} from 'react'

// 定义组件：给一些需要特殊数据的组件，注入props
const useInfo = {
  name: 'EdwardWest',
  level: 99,
}
export function enhancedUseInfo(OriginComponent) {
  class NewComponent extends PureComponent {
    constructor() {
      super()
      this.state = {
        useInfo,
      }
    }

    render() {
      return <OriginComponent {...this.props} {...this.state.useInfo} />
    }
  }

  return NewComponent
}
