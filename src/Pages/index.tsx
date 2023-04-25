import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import mine from '@/assets/profile.svg'
import types from '@/assets/type.svg'
import home from '@/assets/home_active.svg'
import shopcars from '@/assets/shopcar.svg'
import '../assets/App.scss'
const index: React.FC = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    )
}

export default index