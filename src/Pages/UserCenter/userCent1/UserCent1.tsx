import React from 'react'
import styles from './userCent1.module.css';
import coupon from '../../../assets/usercard/coupon-o.png';
import next from '../../../assets/usercard/next.png';
import aftersale from '../../../assets/usercard/after-sale.png';
import chat from '../../../assets/usercard/chat-o.png';
import service from '../../../assets/usercard/service-o.png';
import {useNavigate} from 'react-router-dom'
import {getVoucher} from '@/api/voucher'

const UserCent1:React.FC = ()=> {
    const push = useNavigate()
    const getVoucherList = async ()=>{
        let res = await getVoucher({store_id:1})
        console.log(res,'优惠券');
    }

    const goFuwu =()=>{
        push('/serve')
    }
  return (
    <div className={styles.box}>
        <ul id={styles.boxul1}>
           <li onClick={()=>getVoucherList()}>
            <div>
                <img className={styles.imgs} src={coupon} alt="" />
            </div>
            <div className={styles.texts} >
                <span>优惠券</span>
            </div>
            <div className={styles.nexts1}>
                <img className={styles.nexts} src={next} alt="" />
            </div>
           </li>
           <li>
            <div>
                <img className={styles.imgs} src={aftersale} alt="" />
            </div>
            <div className={styles.texts2}>
                <span>有货币</span>
            </div>
            <div className={styles.nexts2}>
                <img className={styles.nexts} src={next} alt="" />
            </div>
           </li>
        </ul>
        <ul id={styles.boxul1}>
           <li>
            <div >
                <img className={styles.imgs} src={chat} alt="" />
            </div>
            <div className={styles.texts}>
                <span>消息</span>
            </div>
            <div className={styles.nexts1}>
                <img className={styles.nexts} src={next} alt="" />
            </div>
           </li>
           <li onClick={()=>goFuwu()}>
            <div>
                <img className={styles.imgs} src={service} alt="" />
            </div>
            <div className={styles.texts2}>
                <span>服务与支持</span>
            </div>
            <div className={styles.nexts2}>
                <img className={styles.nexts}  src={next} alt="" />
            </div>
           </li>
        </ul>
    </div>
  )
}

export default UserCent1