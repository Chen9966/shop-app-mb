import React ,{useState}from 'react'
import styles from './setPassword.module.css'
import {UserOutlined,LockFilled} from '@ant-design/icons'
import {changePassword} from '../../api/getLogin'
import loginBg from '../../assets/login/loginBg.jpg'
import { useNavigate } from 'react-router-dom';
import ToNav from '../MyOrder/children/toNavs/ToNavs'


const index:React.FC = () =>{
const [changeName,setChangeName] = useState('')
const [changePas,setChangePas] = useState('')
const push = useNavigate()

const onChange = async ()=>{
    let res = await changePassword({
        username:changeName,
        password:changePas
    })
    console.log(res);
    push('/login')
}
  return (
    <div className={styles.ChangeP}>
        <div className={styles.zujian}>
          <ToNav title="修改密码" />
        </div>
        <div className={styles.bgi}>
      <img
        src={loginBg}
        alt=""
      />
    </div>
        <main>
            <div className={styles.user}>
            <UserOutlined />
            <input type="text" placeholder='请输入要修改密码的账号'
            value={changeName}
            onChange={e=>{
                setChangeName(e.target.value)
            }}
            />
            </div>
            <div className={styles.password}>
            <LockFilled />
            <input type="text" placeholder='请输入修改后的密码'
            value={changePas}
            onChange={e=>{
                setChangePas(e.target.value)
            }}
            />
            </div>
            <button onClick={()=>onChange()} className={styles.btn}>
                修改密码
            </button>
        </main>
    </div>
  )
}

export default index