import React from 'react'
import { Link, NavLink, useNavigate, useRoutes} from 'react-router-dom'
// import About from './pages/About'
// import Home from './pages/Home'
// import Login from './pages/Login'
import './index.css'
// import NotFound from './pages/NotFound'
// import HomeRecommend from './pages/HomeRecommend'
// import HomeRanking from './pages/HomeRanking'
// import Category from './pages/Category'
// import Order from './pages/Order'
// import HomeSongMenu from './pages/HomeSongMenu'
// import Detail from './pages/Detail'
// import User from './pages/User'
import routes from './router'

// Link, NavLink, Route, Routes,

// export class App extends PureComponent {

//   render() {
//     return (
//       <div className="App">
//       <div className="header">
//         <span>header</span>
//         <div className="nav">
//         {/* <Link to='/home'>首页</Link>
//         <Link to='/about'>关于</Link> */}
        
//         {/* <NavLink NavLink to='/home'>首页</NavLink>
//         <NavLink to='/about'>关于</NavLink> */}

//         <NavLink to='/home' style={({isActive})=>({color: isActive ? 'red' : ''})}>首页</NavLink>
//         <NavLink to='/about' style={({isActive})=>({color: isActive ? 'red' : ''})}>关于</NavLink>

//         <Link to='/login'>登陆</Link>

//         <button>分类</button>
//         <span>订单</span>
//         </div>
//         <hr />
//       </div>
//       <div className="content">
//         {/* 映射关系： path => Component  */}
//         <Routes>
//           <Route path='/' element={<Navigate to='/home' />}/>
//           <Route path='/home' element={<Home />}>
//             <Route path='/home' element={<Navigate to='/home/recommend' />}/>
//             <Route path='/home/recommend' element={<HomeRecommend />}/>
//             <Route path='/home/ranking' element={<HomeRanking />}/>
//           </Route>
//           <Route path='/about' element={<About />}/>
//           <Route path='/login' element={<Login />}/>
//           <Route path='/category' element={<Category />}/>
//           <Route path='/order' element={<Order />}/>
//           <Route path='*' element={<NotFound />}/>
//         </Routes>
//       </div>

//       <div className="footer">
//         <hr />
//         Footer
//       </div>
//     </div>
//     )
//   }
// }

export function App (props) {
  const navigate = useNavigate()

  function navigateTo(url) {
    navigate(url)
  }

  return (
    <div className="App">
    <div className="header">
      <span>header</span>
      <div className="nav">
        {/* <Link to='/home'>首页</Link>
        <Link to='/about'>关于</Link> */}
        
        {/* <NavLink NavLink to='/home'>首页</NavLink>
        <NavLink to='/about'>关于</NavLink> */}

        <NavLink to='/home' style={({isActive})=>({color: isActive ? 'red' : ''})}>首页</NavLink>
        <NavLink to='/about' style={({isActive})=>({color: isActive ? 'red' : ''})}>关于</NavLink>

        <Link to='/login'>登陆</Link>

        <button onClick={e => navigateTo('/category')}>分类</button>
        <span onClick={e => navigateTo('/order')}>订单</span>

        <Link to='/user?name=why&age=18'>用户</Link>
      </div>
      <hr />
    </div>
    <div className="content">
      {/* 映射关系： path => Component  */}
      {/* <Routes>
        <Route path='/' element={<Navigate to='/home' />}/>
        <Route path='/home' element={<Home />}>
          <Route path='/home' element={<Navigate to='/home/recommend' />}/>
          <Route path='/home/recommend' element={<HomeRecommend />}/>
          <Route path='/home/ranking' element={<HomeRanking />}/>
          <Route path='/home/songmenu' element={<HomeSongMenu />} />
        </Route>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/category' element={<Category />}/>
        <Route path='/order' element={<Order />}/>
        <Route path='/detail/:id' element={<Detail />}/>
        <Route path='/user' element={<User />} />
        <Route path='*' element={<NotFound />}/>
      </Routes> */}
      {useRoutes(routes)}
    </div>

    <div className="footer">
      <hr />
      Footer
    </div>
  </div>
  )
}
