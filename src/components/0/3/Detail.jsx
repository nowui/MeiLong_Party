import React, { Component } from 'react'
import { withRouter } from 'react-router'
import { Spin } from 'antd'
import Helper from '../../../common/Helper'
import './Detail.css'
import styles from './Detail.less'

let self


class Index extends Component {

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

  componentWillUnmount() {

  }

  load = function() {
    self.setState({
      isLoad: true
    })

    Helper.ajax({
      url: '/services/ddbMLNR/1-4-1-' + self.props.params.id,
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

  onClickBack() {
    event.preventDefault()

    self.props.router.goBack()
  }

  render() {
    return (
      <Spin size="large" spinning={this.state.isLoad}>
	      <div className={styles.bg}>
          <div className={styles.content} dangerouslySetInnerHTML={{__html: this.state.object.content}}></div>
	        <div className={styles.back} onClick={this.onClickBack.bind(this)}></div>
	      </div>
      </Spin>
    )
  }
}

export default withRouter(Index)