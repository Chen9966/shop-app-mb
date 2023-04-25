import React, { useEffect, useState } from 'react'
import styles from './userFooter.module.scss';
import { getTypeOneList } from '@/api/getList'
import { EllipsisOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom';

const UserFooter: React.FC = () => {
    const [arrs, setarrs]: any = useState([])

    let push = useNavigate()
    const ondetails = (id: number) => {
        push(`/details/${id}`, { state: { type: '鞋类' } })
    }


    useEffect(() => {
        getTypeOneList('鞋类').then((res: any) => {
            let arr: any[] = []
            for (let i = 0; i < 30; i++) {
                let index: number = Math.floor(Math.random() * 100);
                arr.push(res.res[index])
            }
            setarrs(arr)
        })
    }, [])

    const iconStyle: React.CSSProperties = {
        fontSize: '26px',
        fontWeight: 'bolder',
        color: '#ccc'
    }
    return (
        <div className={styles['footer_box']}>
            <h4>
                <span>|</span> 为你优选
            </h4>
            <div>
                <ul className={styles['footerCent']}>
                    {
                        arrs.map((item: any, index: number) => (
                            <li key={index} onClick={() => { ondetails(item.id) }}>
                                <div className={styles['img_box']}>
                                    <img src={item.img} alt="" />
                                </div>
                                <div className={styles['msg_box']}>
                                    <div className={styles['ul_title']}>
                                        <span>{item.title}</span>
                                    </div>
                                    <div className={styles['ul_price']}>
                                        <p>
                                            <span className={styles['price_original']}>￥{item.special_price}</span>
                                            <span className={styles['price_discount']}>￥{item.price}</span>
                                        </p>
                                        <p className={styles['sandian']}>
                                            <EllipsisOutlined style={iconStyle}></EllipsisOutlined>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    )
}

export default UserFooter