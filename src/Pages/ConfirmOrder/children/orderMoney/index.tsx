import React ,{useState,useEffect} from 'react'
import styles from './orderMoney.module.css'
import { useLocation } from "react-router-dom";


const index:React.FC = () =>{
  let location = useLocation();
  let [goodsPrice,setGoodsPrice] = useState(255.00)
  let [yunfei,setYunfei] = useState(200)
  let [count,setCount] = useState(0)

  useEffect(() => {
    let price = location.state.type[0].price
    setGoodsPrice(price)
 
  }, [])
  

  return (
    <div className={styles.money}>
    <ul>
        <li>  
        <span>商品金额</span>
        <span>￥{goodsPrice}</span>
      </li>
      <li>  
        <span>运费</span>
        <span>{yunfei}⚡</span>
      </li>
      <li>  
        <span>优惠券</span>
        <span>￥{count}</span>
      </li>
      <li>  
        <span>实付金额</span>
        <span className={styles.fact}>￥{goodsPrice - count }</span>
        </li>
        </ul>
    </div>
  )
}

export default index