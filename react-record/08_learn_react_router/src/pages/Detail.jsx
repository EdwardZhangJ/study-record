import React, { PureComponent } from 'react'
import { withRouter } from '../hoc/index'
export class Detail extends PureComponent {
  render() {
    const {router} = this.props
    return (
      <div>
        <h2>Detail Page</h2>
        <h2>id: {router.params.id}</h2>
      </div>
    )
  }
}

export default withRouter(Detail)
