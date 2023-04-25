import React from 'react'
import {NavLink } from 'react-router-dom'
import back from '@/assets/usercard/backs.png';
import huodong1 from '@/assets/usercard/activeone.jpg';
import huodong2 from '@/assets/usercard/activetwo.jpg';
import styles from './index.module.css'
import UserTop from './userToubu/UserTop';
import UserTop1 from './userTobu1/index'
import UserCont from './userCent/UserCent';
import UserCent1 from './userCent1/UserCent1';
import UserFooter from './userfooter/UserFooter';
import SelectMenus from '@/components/menusSelect/SelectMenus'
import mine from '@/assets/profile_active.svg'
import types from '@/assets/type.svg'
import home from '@/assets/home.svg'
import shopcars from '@/assets/shopcar.svg'

const UserCenter: React.FC = () => {
  let data: any = localStorage.getItem("commitUser")
  let data1 = JSON.parse(data)
  // console.log(data1)

  return (
    <div id={styles.box}>
      <div className={styles.topbox}>
        <div>
          < img className={styles.back} src={back} alt="" />
        </div>
        <div className={styles.text}>
          个人中心
        </div>
        <div>
          <SelectMenus imgs={false} />
        </div>
      </div>
      {data1 ? <UserTop datas={data1} /> : <UserTop1 />}

      <UserCont />
      <UserCent1 />
      <div className={styles.huodong}>
        < img src={huodong1} alt="" />
      </div>
      <div className={styles.huodong1}>
        < img src={huodong2} alt="" />
      </div>
      <UserFooter />
      <div className='home'>
                <ul>
                    <li><NavLink to='/home'><div >
                        <img src={home} alt="" />
                        <div>首页</div>
                    </div></NavLink>
                    </li>
                    <li>
                        <NavLink to='/sort'><div>
                            <img src={types} alt="" />
                            <div>分类</div>
                        </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/shopcar'><div >
                            <img src={shopcars} alt="" />
                            <div>购物车</div>
                        </div></NavLink>
                    </li>
                    <li>
                        <NavLink to='/usercenter'><div >
                            <img src={mine} alt="" />
                            <div>我的</div>
                        </div></NavLink>
                    </li>
                </ul>
            </div>
    </div>
  )
}

export default UserCenter