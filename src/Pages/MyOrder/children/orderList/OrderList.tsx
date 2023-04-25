import React from 'react'
import styles from './OrderList.module.css'
import { Empty,Button } from 'antd';
import {useNavigate} from 'react-router-dom'

const OrderList:React.FC = () =>{
    const push = useNavigate()
    const goHome = ()=>{
      push('/home')
    }
  return (
    <div>
        <div>
        <Empty  description="您还没有订单哟">
           <Button className={styles.btn} onClick={()=>goHome()} type="primary">随便逛逛</Button>
        </Empty>;
        </div>
    </div>
  )
}

export default OrderList