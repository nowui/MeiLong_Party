import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Helper from '../../../common/Helper'
import styles from './Content.less'

let self

class Content extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false,
      object: {
        title: '',
        content: ''
      },
      list: []
    }
  }

  componentDidMount() {
    self.load()
  }

  load = function() {
    self.setState({
      isLoad: true
    })

    Helper.ajax({
      url: '/services/ddbMLNR/1-4-1-8',
      data: {

      },
      success: function(data) {
        self.setState({
          list: data
        })

        if(data.length > 0) {
          self.setState({
            object: {
              title: data[0].title,
              content: data[0].content
            }
          })
        }
      },
      complete: function() {
        self.setState({
          isLoad: false
        })
      }
    })
  }

  onClickMenu(index) {
    event.preventDefault()


  }

  onClickBack() {
    event.preventDefault()

    self.props.router.goBack()
  }

  render() {
    return (
      <Spin size="large" spinning={this.state.isLoad}>
        <div className={styles.bg}>
          <div className={styles.title}>{this.state.object.title}</div>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: this.state.object.content}}></div>
          <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 7)}></div>
          <div className={styles.menu_1} onClick={this.onClickMenu.bind(this, 27)}></div>
          <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
        </div>
      </Spin>
    )
  }
}

export default withRouter(Content)