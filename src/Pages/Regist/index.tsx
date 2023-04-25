import React,{useState} from 'react'
import styles from './regist.module.css'
import {LeftCircleOutlined,UserOutlined,MessageFilled,LockFilled,MailFilled ,PhoneFilled} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';
import {getMessage} from '@/api/getMessage'
import {getRegister} from '@/api/getRegister'


const index:React.FC = ()=>{
    const [eshow,setEshow] = useState(false)
    const [pshow,setPshow] = useState(false)
    const [mshow,setmshow] = useState(false)
    const [user,setUser] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [phone,setPhone] = useState('')
    const [dowm,setDown] = useState('获取验证码')
    const [message,setMessage] = useState('')
  


    let push = useNavigate()

    const balck = ()=>{
        push('/login')
    }
   
    const onMessage =()=>{
        let phonReg = new RegExp(/^(?:(?:\+|00)86)?1\d{10}$/);
        if(phonReg.test(phone)){
            setPshow(false)
        getMessage({phoneNum:`+86${phone}`}).then((res)=>{
            let count = 10;
            setDown(`${count}"秒后重发"`);
            let timer = setInterval(()=>{
             setDown(`${--count}"秒后重发"`)
             if(count == -1){
                setDown('获取验证码')
                clearInterval(timer)
                return
             }
            },1000)
        })
        }else{
            setPshow(true)
        }
    }
    const onRegister = ()=>{
    let emailReg = new RegExp(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if(emailReg.test(email)){
        setEshow(false);
        getRegister({
            nickname:user,
            username:user,
            password:password,
            email:email,
            // VerificationCode: message
        }).then((res:any)=>{
          
            if(res.code == 401){
                setmshow(true)
                return
            }else{
                setmshow(false)
            }
            if(res.code == 200){
                alert("注册成功")  //移动端不适配后期需要修改
                push("/login")
                return
            }else{
                alert("注册失败")  //移动端不适配后期需要修改
                return
            }
        })
    }else{
        setEshow(true)
    }

    }

  return (
    <div className={styles.register}>
      <nav className={styles.nav}>
        <div className={styles.backlf}>
        <LeftCircleOutlined onClick={()=>balck()}  />
        </div>
        <span className={styles.regi}>注册</span>
    </nav>
    <main className={styles.main}>
      <div className={styles.user}>
      <UserOutlined />
        <input type="text" value={user}
         placeholder="请输入账号" 
         onChange={e =>{
            setUser(e.target.value)
         }}/>
      </div>
      <div className={styles.email}>
      <MailFilled />
        <input type="text" value={email} 
         placeholder="请输入邮箱"
         onChange={e=>{setEmail(e.target.value)}} />
         {eshow ? <p >请输入有效的邮箱</p> : <div></div>}
      </div>
      <div className={styles.password}>
      <LockFilled />
        <input
          type="password"
          value={password}
          placeholder="请输入密码"
         onChange={e=>{
            setPassword(e.target.value)
         }}
        />
      </div>
      <div className={styles.message}>
      <PhoneFilled />
        <input
          type="text"
          value={phone}
          placeholder="请输入手机号获取验证码"
          onChange={e=>{
            setPhone(e.target.value)
          }}
        />
        <button onClick={() =>onMessage()} className={styles.mesbtn} >{dowm}</button>
        {pshow ? <p>请输入有效的手机号</p> : <div></div>}
      </div>
      <div className={styles.phonMessage}>
      <MessageFilled />
        <input
          type="text"
          value={message}
          placeholder="请输入验证码"
          onChange={e=>{
            setMessage(e.target.value)
          }}
        />
        {mshow ? <p >验证码输入错误</p> : <div></div> }
      </div>
      <button onClick={()=>onRegister()} className={styles.btn} >注册</button>
    </main>
    <footer className={styles.footers}>
      <p>注册即表示您已阅读并同意</p>
      <p><a href="#">有货用户服务协议</a><a href="#">有货隐私条款</a></p>
    </footer>
    </div>
  )
}

export default index