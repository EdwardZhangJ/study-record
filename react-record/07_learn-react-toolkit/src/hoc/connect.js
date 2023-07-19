import {PureComponent} from 'react'
// import store from '../store' // 不需要导入store，通过context传递的，进行解耦操作
import {StoreContext} from './StoreContext'
// connect 参数
// 参数一： 函数
// 参数二： 函数
// 返回值： 函数
export function connect(mapStateToProps, mapDispatchToProps) {
  // 高阶组件： 函数
  return function (Component) {
    // 返回一个组件
    class NewComponent extends PureComponent {
      constructor(props, context) {
        super(props)
        this.state = mapStateToProps(context.getState())
      }
      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          // this.forceUpdate()
          this.setState(mapStateToProps(this.context.getState()))
        })
      }

      componentWillUnmount() {
        this.unsubscribe()
      }
      render() {
        const state = mapStateToProps(this.context.getState())
        const dispatch = mapDispatchToProps(this.context.dispatch)
        return <Component {...this.props} {...state} {...dispatch} />
      }
    }
    NewComponent.contextType = StoreContext
    return NewComponent
  }
}
