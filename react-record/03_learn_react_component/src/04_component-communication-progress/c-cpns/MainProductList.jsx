import React, { Component } from 'react'

export class MainProductList extends Component {
  // 下面super(props)会自动执行
  // constructor(props) {
  //   super(props)
  // }
  render() {
    const { productList } = this.props
    return (
      <div>
        <h2>商品列表</h2>
        <ul>
          {
            productList.map((item, index) => {
              return <li key={item.acm}>{item.title}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default MainProductList
