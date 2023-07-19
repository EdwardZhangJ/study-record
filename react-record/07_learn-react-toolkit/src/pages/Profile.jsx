import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { subNumber } from '../store/features/counter'
export class Profile extends PureComponent {
  subNumber(num) {
    this.props.subNumber(num)
  }
  render() {
    const { counter } = this.props
    return (
      <div>
        <h2>Profile Counter: {counter}</h2>
        <button onClick={e => this.subNumber(5)}>-5</button>
        <button onClick={e => this.subNumber(8)}>-8</button>
        <button onClick={e => this.subNumber(100)}>-100</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter
})

const mapDispatchToProps = (dispatch) => ({
  subNumber: (number) => dispatch(subNumber(number))
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
