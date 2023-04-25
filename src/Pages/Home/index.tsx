import React from 'react'
import {NavLink } from 'react-router-dom'
import HomeBar from '@/components/Home/HomeBar/HomeBar'
import HomeWrapper from '@/components/Home/HomeWrapper/HomeWrapper'
import HomeTabs from '@/components/Home/HomeTabs/HomeTabs'
import mine from '@/assets/profile.svg'
import types from '@/assets/type.svg'
import home from '@/assets/home_active.svg'
import shopcars from '@/assets/shopcar.svg'
const Home: React.FC = () => {
  return (
    <div>
      <HomeBar></HomeBar>
      <HomeWrapper></HomeWrapper>
      <HomeTabs></HomeTabs>
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

export default Home