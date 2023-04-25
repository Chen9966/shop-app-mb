import React from 'react'
import styles from './Qr.module.css'
import ToNav from '../MyOrder/children/toNavs/ToNavs'
import touxiang from '../../assets/usercard/touxiang.png';
import qr from '../../assets/login/qrcode_stride.fun.png'

const index: React.FC = () => {
const datas = {
    imgs:'',
    username:'',
    email:'',
    qr:''
}

  return (
    <div className={styles.mycode}>
        <ToNav title="我的二维码" />
        <div className={styles.mai}>
            <div className={styles.sec}>
            <div className={styles.msg}>
                <div>
                    <img src={datas.imgs ? datas.imgs : touxiang} alt="" />
                </div>
                <div className={styles.text}>
                    <span>{datas.username ? datas.username : 'qqq'}</span>
                    <br />
                    <span>#{datas.email ? datas.email :'###' }#</span>
                </div>
             </div>
             <div className={styles.qr}>
                <img src={datas.qr ? datas.qr : qr} alt="" />
             </div> 
            </div>
            
        </div>
    </div>
  )
}

export default index