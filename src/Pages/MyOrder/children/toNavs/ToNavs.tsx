import React from 'react'
import styles from './ToNavs.module.css'
import { useNavigate} from "react-router-dom";
import SelectMenus from '@/components/menusSelect/SelectMenus'
import {LeftOutlined} from '@ant-design/icons'

interface title {
    title:string,
    black?:boolean
  }


const ToNavs:React.FC<title>= (props:title) =>{
  let {title,black} = props
  const push = useNavigate();

  const baclk = () => {
    if(black){
      push('/usercenter')
    }else{
      push(-1);
    }
  };



  return (
    <div>
        <div className={styles.topbox}>
        <div onClick={() => baclk()}>
          <LeftOutlined className={styles.back} />
        </div>
        <div className={styles.text}>{title}</div>
        <SelectMenus imgs={true} />
      </div>
    </div>
  )
}

export default ToNavs