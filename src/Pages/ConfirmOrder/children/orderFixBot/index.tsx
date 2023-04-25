import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom'
import styles from './orderFixBot.module.css'
import { useLocation } from "react-router-dom";

const index:React.FC = () =>{
const push = useNavigate()
let location = useLocation();

const [goodsPrice,setGoodsPrice] = useState("225.00")
useEffect(()=>{
  let price = location.state.type[0].price
  setGoodsPrice(price)
},[])
const goPaycenter = ()=>{
    push('/paycenter')
 }

  return (
    <div className={styles.fixbot}>
        <p>您需要支付：<span>￥{goodsPrice}</span></p>
        <button className={styles.btn}  onClick={()=>goPaycenter()}>提交订单</button>
    </div>
  )
}

export default index