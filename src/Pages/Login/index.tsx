import React, { useState } from 'react'
import styles from './login.module.css'
import { getLogins } from '../../api/getLogin'
import { LeftCircleOutlined, UserOutlined, LockFilled } from '@ant-design/icons'
import loginBg from '../../assets/login/loginBg.jpg'
import { useNavigate } from 'react-router-dom';
import { Modal } from 'antd';
// import { getID } from '@/redux/reduces/UserId'
// import {store} from '@/redux'

const index: React.FC = () => {
  const [usernames, setUsername] = useState('')
  const [passwords, setPassword] = useState('')
  const [isModal, setIsModal] = useState(false)
  const [isModal1, setIsModal1] = useState(false)

  let push = useNavigate()

  const loGin = async () => {

    let name1 = usernames;
    let pass = passwords
    let res: any = await getLogins({
      username: name1,
      password: pass
    })
    //  console.log(res);
    if (res.code === 200) {
      localStorage.setItem("customer_id", res.data.userInfo.id)
      localStorage.setItem("token", res.data.token)
      localStorage.setItem("commitUser", JSON.stringify(res.data.userInfo))

      push('/home')
      setIsModal(true)
      // console.log(isModal);
      // console.log(res.data.userInfo.id)
      // store.dispatch(getID(res.data.userInfo.id))
      
      console.log(res);
    } else {
      setIsModal1(true)
    }


  }
  const balck = () => {
    push('/usercenter')
  }
  const openOk = () => {
    setIsModal(false)
  }
  const openCancel = () => {
    setIsModal(false)
  }

  const onChangePassword = () => {
    push('/setpassword')
  }
  const goToRegister = () => {
    push('/register')
  }

  const handleOk = () => {
    setIsModal1(false)
  }

  return (
    <div>
      <div className={styles.Login}>
        <div className={styles.bgi}>
          <img
            src={loginBg}
            alt=""
          />
        </div>
        <nav className={styles.navs}>
          <div>
            <LeftCircleOutlined onClick={() => balck()} />
          </div>
          <p onClick={() => goToRegister()}>注册</p>
        </nav>
        <main className={styles.mains}>
          <div className="user">
            <UserOutlined />
            <input type="text" placeholder="请输入账号" value={usernames}
              onChange={e => {
                setUsername(e.target.value)
              }} />
          </div>
          <div className="password">
            <LockFilled />
            <input
              type="password"
              placeholder="请输入密码"
              value={passwords}
              onChange={e => {
                setPassword(e.target.value)
              }} />
          </div>

          <button onClick={() => loGin()} className="btn" >登录</button>
          <p className={styles.pp1} onClick={() => onChangePassword()}>忘记密码？</p>
        </main>
      </div>
      <Modal title="test" open={isModal} onOk={openOk} onCancel={openCancel}>
        <p>登陆成功</p>
      </Modal>
      <Modal open={isModal1} onOk={handleOk} onCancel={handleOk}>
        <p>登录失败请重新登录</p >
      </Modal>

    </div>
  )
}

export default index