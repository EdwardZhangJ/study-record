import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { addNumberAction, subNumberAction } from '../store/actionCreators';
export class About extends PureComponent {
  calculateNum(num) {
     if(num > 0) {
      this.props.addNumber(num)
     }else {
      this.props.subNumber(num)
     }
  }
  render() {
    const { counter,banners,recommends } = this.props
    return (
      <div>
        <h2>About Page: {counter}</h2>
        <div>
          <button onClick={e => this.calculateNum(6)}>+6</button>
          <button onClick={e => this.calculateNum(88)}>+88</button>
          <button onClick={e => this.calculateNum(-6)}>-6</button>
          <button onClick={e => this.calculateNum(-88)}>-88</button>
        </div>

        <div className="banners">
          <h2>轮播图数据：</h2>
          <ul>
            {
              banners.map((item, index)=> {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
        <div className="recommend">
          <h2>推荐数据：</h2>
          <ul>
            {
              recommends.map((item, index)=> {
                return <li key={index}>{item.title}</li>
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}

// function fn1(state) {
//   return {
//     counter: state.counter
//   }
// }

// function fn2(dispatch) {
//   return {
//     addNumber(num) {
//       console.log('addNumber', num);
//       dispatch(addNumberAction(num))
//     },
//     subNumber(num) {
//       console.log('subNumber', num);
//       dispatch(subNumberAction(Math.abs(num)))
//     }
//   }
// }
const mapStateToProps = state => ({
  counter: state.counter,
  banners: state.banners,
  recommends: state.recommends
})

const mapDispatchToProps = dispatch => ({
  addNumber: (num) => dispatch(addNumberAction(num)),
  subNumber: (num) => dispatch(subNumberAction(Math.abs(num)))
})


// connect() 返回值是一个高阶组件
export default connect(mapStateToProps, mapDispatchToProps)(About)
