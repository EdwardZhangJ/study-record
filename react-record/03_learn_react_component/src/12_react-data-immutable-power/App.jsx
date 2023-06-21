import React, { PureComponent } from 'react'

export class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      books: [
        {id: 1, name: '《React进阶实践指南》', price: 59.00, count: 1},
        {id: 2, name: '《React全栈》', price: 69.00, count: 1},
        {id: 3, name: '《React Native》', price: 79.00, count: 1},
        {id: 4, name: '《你不知道的JavaScript》', price: 79.00, count: 1},
      ],
      friend: {

      }
    }
  }
  addNewBook() {
    const newBook = {id: Math.random() * 100, name: '《React Native》', price: 79.00, count: 1}
    // 1. 直接修改原有的state，重新设置一边
    // 在PureComponent中，不能引入重新渲染('re-render')
    // this.state.books.push(newBook)
    // this.setState({ books: this.state.books })
    const books = [...this.state.books, newBook]
    this.setState({ books })
    
  }

  addBookCount(index) {
    const books = [...this.state.books]
    books[index].count++
    this.setState({ books })
  }
  render() {
    const {books} = this.state
    return (
      <div>
        <h2>书籍列表</h2>
        <ul>
          {
            books.map((item, index) => {
              return (
                <li key={item.id}>
                  <span>name: {item.name}-price: {item.price}-count: {item.count}</span>
                  <button onClick={e=> this.addBookCount(index)}>+1</button>
                </li>
              )
            })
          }
        </ul>
        <button onClick={e=> this.addNewBook()}>添加新书籍</button>
      </div>
    )
  }
}

export default App
