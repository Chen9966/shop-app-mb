import React from 'react'
import styles from './OrdersList.module.css'
import {  DeleteFilled,AlipayCircleOutlined ,GiftOutlined} from "@ant-design/icons";
import {getOrder} from '@/api/getOrder'



const OrdersList:React.FC = () =>{

  getOrder({customer_id:7}).then((res)=>{
    console.log(res);
  })
    const Orders = [
        {
           id:30,
           goodsName: "小白鞋",
           price: "189",
           flag: true,
           isShow:false
        },
        {
            id:32,
            goodsName: "球鞋",
            price: "239",
            flag: false,
            isShow:false
         }, 
         {
            id:33,
            goodsName: "女鞋",
            price: "39",
            flag: true,
            isShow:true
         },
    ]
    const toOrder = (id:any)=>{

    }
    const delBtn = (item:any)=>{
        console.log(item);
        
    }

  return (
    <div>
        <div>
          <ul className={styles.Info}>
            {Orders.map((item,index) => (
              <li key={index} onClick={()=>toOrder(index)}>
                <p className={styles.pp1}>
                  <span className={styles.sp1}>{item.goodsName}</span>
                  <span className={styles.sp2}>￥{item.price}</span>
                </p>
                <span className={styles.sp3}>
                 <AlipayCircleOutlined />&ensp;
                 {item.flag ? '付款完毕':'未付款'}
                </span>
                <span className={styles.sp4}>
                <GiftOutlined /> &ensp;
                 {item.isShow ? '已收货':'未收货'}
                </span>
                <div className={styles.icon}>
                删除订单   <DeleteFilled onClick={()=>delBtn(item.id)} />
                </div>
              </li>
            ))}
          </ul>
        </div>
    </div>
  )
}

export default OrdersList