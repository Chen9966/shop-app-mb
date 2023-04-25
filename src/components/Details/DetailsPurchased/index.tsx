import React, { useEffect, useState } from 'react'
import style from './DetailsPurchased.module.scss'
import { RightOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';


const DetailsPurchased: React.FC = () => {
    // const [userList, setUserList]:any = useState()
    const userList = []
    const data = {
        name: '崔*道',
        size: 42,
        price: '￥9999',
        day: '五天前'
    }
    const arr = []
    const data1 = {
        name: '崔*道',
        size: 42,
        price: '￥9999',
        day: '五天前',
        message:'留言：这鞋子真不错呀'
    }
    const arr1:any = Array(20).fill(data1)
    arr.push(...arr1)

    const dataList: any = Array(4).fill(data)
    userList.push(...dataList)
    // console.log(userList);

    let [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    return (
        <div className={style['Recent']}>
            <div className={style['cell']} onClick={e => showDrawer()}>
                <div className={style['cell_title']}>
                    <span>最近购买({Math.floor(Math.random()*1000)})</span>
                </div>
                <div className={style['cell_value']}>
                    <span>查看更多 <RightOutlined /></span>
                </div>
            </div>
            <ul>
                {
                    userList.map((item: any,index:any) => {
                        return (
                            <li key={index}>
                                <p>{item.name}</p>
                                <p>{item.size}</p>
                                <p>{item.price}</p>
                                <p>{item.day}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Drawer height='660px' closable placement="bottom" onClose={onClose} open={open}>
                <ul className={style['ul_popup']}>
                    {
                        arr.map((item: any,index:any) => {
                            return (
                                <li key={index}>
                                    <div>
                                        <p>{item.name}</p>
                                        <p>{item.size}</p>
                                        <p>{item.price}</p>
                                        <p>{item.day}</p>
                                        <p>{item.message}</p>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </Drawer>
        </div>
    )
}

export default DetailsPurchased