import React, {Component} from 'react'
import FixedContent from '../../components/common/FixedContent'
import {connect} from 'react-redux'

let Home = React.createClass({
  render() {
    return (
      <FixedContent>
        <p>asddddddddddd</p>
      </FixedContent>
    )
  }
})

const mapStateToProps = (state) => {
  return {
  }
}
/**
 * 跳转到查询成功需要的参数
 * 形式：setinfo/:tab/:flag
 * tab = {elec,normal,special}
 * flag = {set,wait,finish}
 * eg: setinfo/elec/wait
 * 发票信息存储字段名：invoiceInfo
 */
const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
