function loginAuth(OriginComponent) {
  return (props) => {
    // 从localStorage中获取登录信息
    const token = localStorage.getItem('token')
    if (token) {
      return <OriginComponent {...props} />
    } else {
      return <h2>请登录</h2>
    }
  }
}
export default loginAuth
