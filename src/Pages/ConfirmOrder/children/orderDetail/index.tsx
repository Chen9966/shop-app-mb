import React,{useState,useEffect} from "react";
import styles from "./orderDetail.module.css";
import goods1 from "@/assets/goos1.jpg";
import { useLocation } from "react-router-dom";


const index: React.FC = () => {
  const [orders,setOrders] = useState([
    {
      imgs: "",
      name: "THETHING 可脱卸前袋水洗牛仔夹克",
      color: "蓝色",
      size: "S",
      price: 255.0,
      count: 1,
    },
  ]);
  let location = useLocation();
  
  const getDetail = ()=>{
    if(location.state){
      let img = location.state.type[0].imgs;
      let res = JSON.parse(img);
      let colors = JSON.parse(location.state.type[0].param)
        const orders1= [
          {
            imgs:res[0].small,
            name:location.state.type[0].title,
            color:colors[0],
            size:'S',
            price:location.state.type[0].price,
            count:1
          }
        ];
      setOrders(orders1)
    }
  }
  useEffect(()=>{
    getDetail()
  },[])
 

  return (
    <div className={styles.detail}>
      <ul>
        {orders.map((item, index) => (
          <li key={index}>
            <div className={styles.content}>
              <img
                src={item.imgs ? item.imgs : goods1}
                className={styles.imgs}
                alt=""
              />
              <div className={styles.text}>
                <p className={styles.name}>{item.name}</p>
                <p className={styles.row}>
                  <span className={styles.color}>颜色:&ensp;{item.color}</span>{" "}
                  &ensp;
                  <span className={styles.size}>尺码:&ensp;{item.size}</span>
                </p>
                <p className={styles.price_wrap}>
                  <span className={styles.price}>¥{item.price} </span>
                  <span className={styles.count}>x{item.count}</span>
                </p>
              </div>
            </div>
            <p className={styles.both}>
              共{item.count}件商品 合计<span>￥{item.count * item.price}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default index;
