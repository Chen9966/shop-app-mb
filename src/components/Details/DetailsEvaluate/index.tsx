import React, { useState } from 'react'
import style from './DetailsEvaluate.module.scss'
import { RightOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';

const DetailsEvaluate: React.FC = () => {
    const data: any = []
    const list =
    {
        name: '偏小',
        sum: 9
    }

    const arr: any = Array(3).fill(list)
    data.push(...arr)
    // console.log(data);

    let [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = ()=>{
        setOpen(false)
    }

    const user = []
    const data1 = {
        name: '崔*道',
        size: 42,
        price: '￥9999',
        day: '五天前',
        message:'留言：这鞋子真不错呀'
    }
    const arr1:any = Array(20).fill(data1)
    user.push(...arr1)
    return (
        <div className={style['Evaluate']}>
            <div className={style['cell']} onClick={e => showDrawer()}>
                <div className={style['cell_title']}>
                    <span>商品评价(99+)</span>
                </div>
                <div className={style['cell_value']}>
                    <span>查看更多 <RightOutlined /></span>
                </div>
            </div>
            <ul className={style['ul_Evaluate']}>
                {
                    data.map((item: any, index: any) => {
                        return (
                            <li key={index}>
                                <p>{item.name}</p>
                                <p>{item.sum}</p>
                            </li>
                        )
                    })
                }
            </ul>
            <Drawer height='660px' closable placement="bottom" onClose={onClose} open={open}>
                <ul className={style['ul_popup']}>
                    {
                        user.map((item: any,index:any) => {
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

export default DetailsEvaluate