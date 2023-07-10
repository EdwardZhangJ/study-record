import React, { PureComponent } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './style.css'

export class App extends PureComponent {
  constructor() {
    super()
    this.state = {
      books: [
        {name: 'Javascript高级程序设计', price: 100, count: 1, id: 1},
        {name: 'Javascript权威指南', price: 80, count: 1, id: 2},
        {name: 'ES6标准入门', price: 60, count: 1, id: 3},
        {name: 'React全栈', price: 50, count: 1, id: 4},
      ]
    }
  }
  addNewBooks() {
    const bookList = [...this.state.books]
    bookList.push({name: 'React全栈', price: 50, count: 1, id: Math.floor(Math.random()*100)})
    this.setState({books: bookList})
  }
  removeBook(index) { 
    const bookList = [...this.state.books]
    bookList.splice(index, 1)
    this.setState({books: bookList})
  }
  render() {
    const { books } = this.state
    return (
      <div>
        <h2>书籍列表</h2>
        <TransitionGroup  component="ul">
          {
            books.map((item, index) => {
              return (
                <CSSTransition key={item.id} classNames="book" timeout={1000}>
                  <li>
                    <span>{item.name } - {item.price}</span>
                    <button onClick={e => this.removeBook(index)}>删除</button>
                  </li>
                </CSSTransition>
              )
            }) 
          }
        </TransitionGroup>
        <button onClick={e => this.addNewBooks()}>添加</button>
      </div>
    )
  }
}

export default App
