import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import {fetchHomeMultiDataAction} from '../store/actionCreators'

export class Category extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultiData()
  }
  render() {
    return (
      <div>
        <h2>Category New Page</h2>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchHomeMultiData() {
    dispatch(fetchHomeMultiDataAction())
  }
})

export default connect(null, mapDispatchToProps)(Category)
