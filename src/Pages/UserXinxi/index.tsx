import React from 'react'
import ToNav from '../MyOrder/children/toNavs/ToNavs'
import styles from './UserXinxi.module.css'
import touxiang from '../../assets/usercard/touxiang.png';
import qr from '../../assets/usercard/qr.png';
import { useNavigate ,useLocation} from "react-router-dom";
import {RightOutlined } from '@ant-design/icons';


const index: React.FC = () =>{
  const push = useNavigate()
  let data:any =   localStorage.getItem("commitUser")
  let data1 = JSON.parse(data)
  // console.log(data1);
  const location = useLocation()
  const pathname = location.pathname;
  
  const datas = {
    imgs:'',
    username:'',
    email:''
  }
  datas.email = data1.email;
  datas.username = data1.username;

  const onQr = ()=>{
    push('/mycode')
  }

  const onAddress = ()=>{
    push('/addaddress',{state:{pathname:pathname}})
  }

  const onExit = ()=>{
    localStorage.clear()
    push('/login')
  }

  const onChangePassword = ()=>{
    push('/setpassword')
  }

  return (
    <div className={styles.box}>
    <ToNav title='个人资料' black={true} />
    <main>
      <ul className={styles.info}>
        <li className={styles.bot}>
        <span>头像</span>
        <img src={datas.imgs ? datas.imgs : touxiang} alt="" />
        </li>
        <li className={styles.bot} onClick={()=>onQr()}>
          <span>二维码</span>
          <img className={styles.qr} src={qr} alt="" />
        </li>
        <li className={styles.bot}>
          <span>用户名</span>
          <p className={styles.p1}>
            <span>{datas.username ? datas.username : "qqq"}</span>
          </p>
        </li>
        <li className={styles.bot}>
          <span>邮箱</span>
          <p className={styles.p1}>
            <span>{datas.email ? datas.email : '####'}</span>
          </p>
        </li>
      </ul>
      <ul className={styles.admin}>
        <li className={styles.bot}  onClick={()=>onChangePassword()}>
          <span>修改密码</span>
          <RightOutlined />
        </li>
        <li className={styles.bot}  onClick={()=>onAddress()}>
          <span>地址管理</span>
          <RightOutlined />
        </li>
        <li className={styles.bot}  onClick={()=>onExit()}>
          <span>退出登录</span>
          <RightOutlined />
        </li>
      </ul>
    </main>
    </div>
  )
}

export default index