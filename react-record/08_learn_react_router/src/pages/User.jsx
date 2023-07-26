import React, { PureComponent } from 'react'
import { withRouter } from '../hoc'

export class User extends PureComponent {
  render() {
    const {router} = this.props
    const {query} = router
    return (
      <div>
        <h2>User Page</h2>
        <p>User: {query.name} - {query.age}</p>
      </div>
    )
  }
}

export default withRouter(User)
