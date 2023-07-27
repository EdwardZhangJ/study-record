import React from 'react'
// import About from '../pages/About'
// import Login from '../pages/Login'
import Home from '../pages/Home'
import NotFound from '../pages/NotFound'
import HomeRecommend from '../pages/HomeRecommend'
import HomeRanking from '../pages/HomeRanking'
import Category from '../pages/Category'
import Order from '../pages/Order'
import HomeSongMenu from '../pages/HomeSongMenu'
import Detail from '../pages/Detail'
import User from '../pages/User'
import { Navigate } from 'react-router-dom'

const About = React.lazy(() => import('../pages/About'))
const Login = React.lazy(() => import('../pages/Login'))

const routes = [
  {
    path: '/',
    element: <Navigate to='/home' />
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: '/home',
        element: <Navigate to='/home/recommend' />
      },
      {
        path: '/home/recommend',
        element: <HomeRecommend />
      },
      {
        path: '/home/ranking',
        element: <HomeRanking />
      },
      {
        path: '/home/songmenu',
        element: <HomeSongMenu />
      },
    ]
  },
  {
    path: '/category',
    element: <Category />
  },
  {
    path: '/order',
    element: <Order />
  },
  {
    path: '/detail/:id',
    element: <Detail />
  },
  {
    path: '/user',
    element: <User />
  },
  {
    path: '/about',
    element: <About />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '*',
    element: <NotFound />
  }
]

export default routes
