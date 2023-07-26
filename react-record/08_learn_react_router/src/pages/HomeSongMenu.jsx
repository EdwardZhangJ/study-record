import React, { PureComponent } from 'react'
import { withRouter } from '../hoc/index'
export class HomeSongMenu extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      songMenus: [
        {id: 111, name: '华语流行'},
        {id: 222, name: '流行'},
        {id: 333, name: '摇滚'},
      ]
    }
  }

  navigateDetail(song) {
    const { navigate } = this.props.router
    navigate(`/detail/${song.id}`)
  }
  render() {
    const { songMenus } = this.state
    return (
      <div>
        <h2>HomeSongMenu Page</h2>
        <ul>
          {
            songMenus.map(item => {
              return <li key={item.id} onClick={e => this.navigateDetail(item)}>{item.name}</li>
            })
          }
        </ul>
      </div>
    )
  }
}

export default withRouter(HomeSongMenu)
