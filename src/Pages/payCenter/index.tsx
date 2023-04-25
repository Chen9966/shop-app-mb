import React from 'react';
import styles from './payCenter.module.css'
import ToNav from '@/Pages/MyOrder/children/toNavs/ToNavs'
import Zhifu from '@/assets/zhifubao/zhifubao.png'
import { RightOutlined} from '@ant-design/icons'

const index:React.FC = () =>{


  return (
    <div className={styles.payCenter}>
        <ToNav title='支付中心'  />
        <div className={styles.zhifu}>
        <img src={Zhifu} alt="" />
        <span>支付宝支付</span>
        <p>支付宝钱包支付
        <br />
        推荐支付宝用户使用
        </p>
        <RightOutlined />
        </div>
    </div>
  )
}

export default index