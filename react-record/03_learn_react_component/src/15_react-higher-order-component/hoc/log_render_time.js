import { PureComponent } from "react";

function logRenderTime(OriginComponent) {
  return class extends PureComponent {
    UNSAFE_componentWillMount() {
      this.beginTime = new Date().getTime()
    }
    componentDidMount() {
      this.endTime = new Date().getTime()
      const interval = this.endTime - this.beginTime
      console.log(`当前${OriginComponent.name}页面渲染时间耗时${interval}ms`)
    }
    render() {
      return <OriginComponent />
    }
  }
}

export default logRenderTime
