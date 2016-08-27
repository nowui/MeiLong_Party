import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Helper from '../../common/Helper'
import styles from './index.less'

let self
let object

class Index extends Component {

  constructor(props) {
    super(props)

    self = this

    this.state = {
      isLoad: false,
      object: {
        subdir: []
      }
    }
  }

  componentDidMount() {
    if(typeof(object) == 'undefined') {
      self.load()
    } else {
      self.setState({
        object: object
      })
    }
  }

  load = function() {
    self.setState({
      isLoad: true
    })

    Helper.ajax({
      url: '/services/ddbYJML/3',
      data: {

      },
      success: function(data) {
        object = data[1]

        self.setState({
          object: object
        })
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

    let url = '/2/detail/' + index

    if(index == 2) {
      url = '/2/content'
    }

    self.props.router.push({
      pathname: url,
      query: {

      }
    })
  }

  onClickContent(contentid) {
    event.preventDefault()
    self.props.router.push({
      pathname: '/2/content/' + contentid,
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
      <Spin size="large" spinning={this.state.isLoad}>
        <div className={styles.bg}>
          <div className={styles.menu_0} onClick={this.onClickMenu.bind(this, 1)}></div>
          <div className={styles.menu}>
            {
              this.state.object.subdir.map(function (item, index) {
                return (
                  <div key={item.contentid} className={styles.menu_bg} onClick={this.onClickContent.bind(this, item.contentid)}>{item.title}</div>
                )
              }.bind(this))
            }
          </div>
          <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
        </div>
      </Spin>
    )
  }
}

export default withRouter(Index)