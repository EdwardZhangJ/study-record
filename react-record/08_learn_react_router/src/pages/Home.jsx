import React, { PureComponent } from 'react'
import { Link, Outlet } from 'react-router-dom'
import {withRouter} from '../hoc/index'
export class Home extends PureComponent {

  navigateTo(path) {
    const { navigateTo } = this.props.router
    navigateTo(path)
  }
  
  render() {
    return (
      <div>
        <h1>Home</h1>
        <div className='home-nav'>
          <Link to='/home/recommend'>推荐</Link>
          <Link to='/home/ranking'>排行榜</Link>
          <button onClick={e => this.navigateTo('/home/songmenu')}>歌单</button>
        </div>
        {/* 占位组件 */}
        <Outlet />
      </div>
    )
  }
}

// 高阶组件： 函数
// function withRouter(WrapperComponent) {
//   return function (props) {
//     const navigate = useNavigate()
//     const router = {navigateTo: navigate}
//     return <WrapperComponent {...props} router={router} />
//   }
// }

export default withRouter(Home)
