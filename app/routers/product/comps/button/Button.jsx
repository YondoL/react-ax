import React from 'react'
import {connect} from 'react-redux'
import styles from './Button.scss'

/**
 * 按钮组件
 * 目前三种形式
 * 小、大、底部固定
 * default、block、fixed
 */

class Button extends React.Component{
    render () {
        const {type,onClick,children} = this.props
        return(
            <a className={type ? `${styles.btn} ${styles[`btn-${type}`]}` : `${styles.btn} ${styles[`btn-default`]}`}
                onClick={onClick}>{children} </a>
        )
    }
}

export default connect()(Button)