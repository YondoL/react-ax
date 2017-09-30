import React from 'react'
import {connect} from 'react-redux'
import FixContent from './../../components/common/FixedContent'
import {Link} from 'react-router'
import styles from './Home.scss'
import {formatTel, queryString} from './comps/utils/utils'

const routeConfig = [
    {
        name: 'child1',
        text: '购买保险页'
    }, {
        name: 'child2',
        text: '险种介绍页'
    }, {
        name: 'child3',
        text: '订单页面'
    }, {
        name: 'child4',
        text: '订单详情页'
    }
]
class Home extends React.Component {
    /**
     * orderStatus, mobileNumber, insureCity, startTime
     * @returns {XML}
     */
    render () {
        console.log(formatTel('18510549872'))
        console.log(queryString('tel'))
        return (
            <FixContent>
              <div>
                <ul className={styles.this}>
                    {
                        routeConfig.map((item, index) => {
                            return <li key={index}><Link to={`/product/${item.name}`} activeStyle={{color: 'red'}}>{item.text}</Link></li>
                        })
                    }
                </ul>
              </div>
            </FixContent>
        )
    }
}

export default connect()(Home)
