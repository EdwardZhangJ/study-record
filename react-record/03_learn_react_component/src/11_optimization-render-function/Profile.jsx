import {memo} from 'react'
// memo 用于函数组件的性能优化
const Profile = memo(function(props) {
  console.log('Profile render')
  return <h2>Profile: {props.message}</h2>
})
// function Profile(props) {
//   console.log('Profile render')
//   return <h2>Profile: {props.message}</h2>
// }
export default Profile
