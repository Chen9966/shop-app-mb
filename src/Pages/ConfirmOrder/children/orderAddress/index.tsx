import React,{useEffect,useState} from 'react'
import styles from './orderAddress.module.css'
import {EnvironmentFilled} from "@ant-design/icons";
import {useNavigate,useLocation} from 'react-router-dom'
import { getdefault } from "@/api/address";


const index:React.FC = () =>{
  const location = useLocation()
  const push = useNavigate()
  let [userAddress,setUserAddress] = useState({
    id:30,
    name: "漠视",
    tel: "17760727725",
    address: "天津市 天津市 河东区 幸福花园一号楼",
  })
  let cstid = localStorage.getItem("customer_id")
  const getDefaults = ()=>{
    getdefault({customer_id:cstid}).then((res:any)=>{
      setUserAddress(res.data[0])
    })
  }
  useEffect(()=>{
    setTimeout(()=>{
      getDefaults()
    },100)
  },[])
 
  const goAddress =()=>{
    push('/addaddress',{state:{pathname:location.pathname}})
  }

  return (
    <div className={styles.orderAddress}>
      <div className={styles.contentAdd}>
        <EnvironmentFilled className={styles.icon} />
        <div className={styles.addressBox}>
          <p>
          <span>{userAddress.name}</span>
          <span>{userAddress.tel}</span>
          </p>
          <p>
            {userAddress.address}
          </p>
          <p>
            <span onClick={()=>goAddress()}>其他地址&gt;</span>
          </p>
        </div>
      </div>

    </div>
  )
}

export default index