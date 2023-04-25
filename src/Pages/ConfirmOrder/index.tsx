import React from 'react'
import styles from './confirmOrder.module.css'
import ToNav from '@/Pages/MyOrder/children/toNavs/ToNavs';
import OrderAddress from './children/orderAddress/index'
import OrderPay from './children/orderPay/index'
import OrderMoney from './children/orderMoney/index'
import OrderDetail from './children/orderDetail/index'
import OrderFixBot from './children/orderFixBot/index'
import OrderDiscount from './children/orderDiscount/index'


const index:React.FC = ()=> {

  return (
    <div className={styles.confirmOrder}>
     <ToNav title='确认订单' />
     <OrderAddress />
     <OrderPay />
     <OrderDetail />
     <OrderDiscount />
     <OrderMoney />
     <OrderFixBot />
    </div>
  )
}

export default index