var _ = require('lodash')
import React from 'react'
import styles from './Loading.scss'

const Loading = React.createClass({
  propTypes: {
    options: React.PropTypes.object
  },
  getDefaultProps () {
    return {
      options: {}
    }
  },

  componentDidMount () {
  },
  componentDidUpdate (preProps) {
  },
  render () {
    let {isShow, loadingText} = this.props.options
    return isShow && (
    <div>
      <div className={styles.this}>
        <div className={styles.mintIndicatorWrapper}>
          <div className={styles.spinner}>
            <div className={`${styles.spinnerContainer} ${styles.container1}`}>
              <div className={`${styles.container1} ${styles.circle1}`}></div>
              <div className={`${styles.container1} ${styles.circle2}`}></div>
              <div className={`${styles.container1} ${styles.circle3}`}></div>
              <div className={`${styles.container1} ${styles.circle4}`}></div>
            </div>
            <div className={`${styles.spinnerContainer} ${styles.container2}`}>
              <div className={`${styles.container2} ${styles.circle1}`}></div>
              <div className={`${styles.container2} ${styles.circle2}`}></div>
              <div className={`${styles.container2} ${styles.circle3}`}></div>
              <div className={`${styles.container2} ${styles.circle4}`}></div>
            </div>
            <div className={`${styles.spinnerContainer} ${styles.container3}`}>
              <div className={`${styles.container3} ${styles.circle1}`}></div>
              <div className={`${styles.container3} ${styles.circle2}`}></div>
              <div className={`${styles.container3} ${styles.circle3}`}></div>
              <div className={`${styles.container3} ${styles.circle4}`}></div>
            </div>
          </div>
          {/*{loadingText && <span className={styles.mintIndicatorText}>
            {loadingText}
          </span>}*/}
          数据加载中
        </div>
        <div className={styles.shade} />
      </div>
    </div>
      )
  }
})

export default Loading
