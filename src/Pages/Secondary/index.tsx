import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { getProductSku } from '@/api/home/http'
import style from './Secondary.module.scss'
const Secondary: React.FC = () => {
    let location = useLocation()
    // console.log(location);
    let [data1, setData1]: any = useState([])
    let { name, series } = location.state.obj
    const list = async () => {
        let { data: res } = await getProductSku({ name: name, series: series })
        // console.log(res);
        let secondaryList = res.data
        secondaryList.forEach((item: any) => {
            data1.push(item)
        })
        setData1([...secondaryList])
    }
    // console.log(data1);
    useEffect(() => {
        list()
    }, [])

    let push = useNavigate()
    const goDetails = (id: string) => {
        push(`/details/${id}`,{state:{type:'鞋子'}})
    }
    return (
        <div className={style['Secondary']}>
            <div className={style['secon_top']}>
                <p>
                    <span>{name}_{series}</span>
                    <span>Home / SeconDary</span>
                </p>
                <div className={style['content']}></div>
                <div className={style['footer']}>
                    <h2>为你推荐</h2>
                </div>
            </div>
            <div className={style['secon_con']}>
                {
                    data1.map((item: any, index: any) =>
                    (<div className={style['card']} key={index}>
                        <div className={style['card_header']}>
                            <div className={style['card_thumb']} onClick={e => goDetails(item.id)}>
                                <img src={item.img} alt="" />
                            </div>
                            <div className={style['card_content']}>
                                <div>
                                    <div className={style['title']}>{item.title}</div>
                                    <div className={style['desc']}>www.stride.fun</div>
                                </div>
                                <div className={style['bottom']}>
                                    <div className={style['price']}>
                                        <div>
                                            <span>￥</span>
                                            <span>{item.special_price}</span>.
                                            <span>00</span>
                                        </div>
                                    </div>
                                    <div className={style['origin_price']}>￥{item.price}</div>
                                    <div className={style['num']}>x1</div>
                                </div>
                            </div>
                        </div>
                    </div>)
                    )
                }
            </div>
        </div>
    )
}

export default Secondary