import React from 'react'
import {connect} from 'react-redux'
import FixContent from './../../../components/common/FixedContent'
import actions from '../../../redux/actions'
import styles from './Children2.scss'
import {browserHistory} from 'react-router'

import Button from '../comps/button/Button'

class Children1 extends React.Component{
    // componentDidMount(){
    //     this.props.init();
    // }
    render(){

        return(
            <FixContent>
                <div className={styles.content}>Children2</div>
                <Button type="fixed" children="返回首页" onClick={() => { browserHistory.replace('product/home') }}/>
            </FixContent>
        )

    }
}

const mapStateToProps = (state) => {
    return{

    }
}

const mapDispatchToProps = (dispatch) => {
    return{

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Children1)
