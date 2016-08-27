import React, { Component } from 'react'
import { withRouter } from 'react-router'
import styles from './index.less'

let self

class Index extends Component {

  constructor(props) {
    super(props)

    self = this
  }

  componentDidMount() {

  }

  onClickMenu(index) {
    event.preventDefault()

    let url = '/0/3/detail/' + index

    if(index == -1) {
      url = '/0/3/content'
    }

    self.props.router.push({
      pathname: url,
      query: {

      }
    })
  }

  onClickBack() {
    event.preventDefault()

    self.props.router.goBack()
  }

  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 7)}></div>
        <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 27)}></div>
        <div className={styles.menu_2} onClick={this.onClickMenu.bind(this, 28)}></div>
        <div className={styles.menu_3} onClick={this.onClickMenu.bind(this, 29)}></div>
        <div className={styles.menu_4} onClick={this.onClickMenu.bind(this, 25)}></div>
        <div className={styles.menu_5} onClick={this.onClickMenu.bind(this, 24)}></div>
        <div className={styles.menu_6} onClick={this.onClickMenu.bind(this, 26)}></div>
        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
      </div>
    )
  }
}

export default withRouter(Index)