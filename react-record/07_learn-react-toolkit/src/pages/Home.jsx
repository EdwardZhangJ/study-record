import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumber } from '../store/features/counter'
import { fetchHomeMultiDataAction } from '../store/features/home'

export class Home extends PureComponent {
  componentDidMount() {
    this.props.fetchHomeMultiDataAction()
  }
  addNumber(num) { 
    this.props.addNumber(num)
  }
  render() {
    const { counter} = this.props
    return (
      <div>
        <h2>Home Counter: {counter}</h2>
        <button onClick={e => this.addNumber(5)}>+5</button>
        <button onClick={e => this.addNumber(8)}>+8</button>
        <button onClick={e => this.addNumber(100)}>+100</button>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  counter: state.counter.counter,
})

const mapDispatchToProps = (dispatch) => ({
  addNumber: (number) => dispatch(addNumber(number)),
  fetchHomeMultiDataAction: () => dispatch(fetchHomeMultiDataAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
