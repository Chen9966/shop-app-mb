import React from 'react'
import styles from './index.module.css'
import nexts from "../../../assets/usercard/next.png";
import { useNavigate } from "react-router-dom";



const index:React.FC = () =>{
    const push = useNavigate()
    const gologin = ()=>[
        push('/login')
    ]


  return (
    <div>
        <div className={styles.top}>
        <div className={styles.conten} onClick={()=>gologin()}>
            <button className={styles.btn}>登录/注册</button>
        </div>
        </div>
         <div className={styles.topbot}>
        <div>
          <span>默认频道</span>
        </div>
        <div>
          <span>主页</span>
          <img src={nexts} alt="" />
        </div>
      </div>
    </div>
  )
}

export default index