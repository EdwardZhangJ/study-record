import { useNavigate } from 'react-router-dom'
export default function withRouter(WrapperComponent) {
  return function (props) {
    const navigate = useNavigate()
    const router = { navigateTo: navigate }
    return <WrapperComponent {...props} router={router} />
  }
}
