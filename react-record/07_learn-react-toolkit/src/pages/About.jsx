import React, { PureComponent } from 'react'
import {connect} from '../hoc'
import {addNumber} from '../store/features/counter'

export class About extends PureComponent {
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>About Count: {counter}</h2>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: (number) => dispatch(addNumber(number)),

})

export default connect(mapStateToProps, mapDispatchToProps)(About)
