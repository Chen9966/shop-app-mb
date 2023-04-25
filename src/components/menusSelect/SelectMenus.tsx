import React from 'react'
import type { MenuProps } from "antd";
import styles from './SelectMenus.module.css'
import { NavLink } from "react-router-dom";
import { Dropdown } from "antd";
import home from '../../assets/home.svg';
import types from '../../assets/type.svg';    
import shopcar from '../../assets/shopcar.svg';
import mine from '../../assets/profile.svg';
import navs from '../../assets/usercard/wap-nav.png';
import { AppstoreFilled } from '@ant-design/icons'



const items: MenuProps["items"] = [
    {
        label: <NavLink className={styles.links} to={'/home'}>
            <img src={home} alt="" /> &emsp;<span>首页</span>
        </NavLink>,
        key: "0",
    },
    {
        label: <NavLink className={styles.links} to={'/sort'}>
            <img src={types} alt="" /> &emsp;<span>分类</span>
        </NavLink>,
        key: "1",
    },
    {
        label: <NavLink className={styles.links} to={'/shopcar'}>
            <img src={shopcar} alt="" /> &emsp;<span>购物车</span>
        </NavLink>,
        key: "2",
    },
    {
        label: <NavLink className={styles.links} to={'/usercenter'}>
            <img src={mine} alt="" /> &emsp;<span>我的</span>
        </NavLink>,
        key: '3'
    }
];


interface Fimg{
    imgs:boolean
}
const SelectMenus: React.FC<Fimg> = (props: Fimg) => {
    let { imgs } = props
    return (
        <div>
            <Dropdown className={styles.bg} menu={{ items }} trigger={["click"]}>
                {imgs ?
                    <AppstoreFilled className={styles.tobar1} />
                    :
                    <img className={styles.tobar} src={navs} alt="" />}
            </Dropdown>
        </div>
    )
}

export default SelectMenus