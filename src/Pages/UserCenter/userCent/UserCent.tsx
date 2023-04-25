import React from 'react'
import styles from './userCent.module.css';
import nexts from '@/assets/usercard/next.png';
import ecard from '@/assets/usercard/ecard-pay.png';
import chato from '@/assets/usercard/chat-o.png';
import logistics from '@/assets/usercard/logistics.png';
import { useNavigate } from 'react-router-dom'

const UserCent: React.FC = (props: any) => {
    const push = useNavigate()
    const goOrder = () => {
        push('/myorder')

    }

    let { num1, num2, num3 } = props
    return (
        <div className={styles.box} onClick={() => goOrder()}>
            <div className={styles.topbot}>
                <div>
                    <span>我的订单</span>
                </div>
                <div >
                    <span>全部订单</span>
                    <img src={nexts} alt="" />
                </div>
            </div>
            <div>
                <ul className={styles.menus}>
                    <li>
                        <img src={ecard} alt="" />
                        <p>待付款</p>
                    </li>
                    <li>
                        <img src={chato} alt="" />
                        <p>待发货</p>
                    </li>
                    <li>
                        <img src={logistics} alt="" />
                        <p>待收货</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul className={styles.menus}>
                    <li>
                        <p>{num1 ? num1 : 0}</p>
                        <p>待付款</p>
                    </li>
                    <li>
                        <p>{num2 ? num2 : 0}</p>
                        <p>待发货</p>
                    </li>
                    <li>
                        <p>{num3 ? num3 : 0}</p>
                        <p>待收货</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default UserCent