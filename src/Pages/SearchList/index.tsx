import React, { useEffect, useState } from 'react'
import SeachTop from '../Search/Children/SeachTop'
import { getProduct } from '../../api/home/http'
import { useLocation, useNavigate } from 'react-router-dom'

import { Dropdown } from 'antd-mobile'
import style from './SearchList.module.scss'

const SearchList: React.FC = () => {

    let location = useLocation()
    console.log(location);
    let { state } = location

    let [data, setData]: any = useState([])
    const [flag, setFlag] = useState(false)
    const getItemList = async () => {
        let { data: res } = await getProduct({ parent_name: state.type })
        console.log(res.res);
        let list = res.res
        list.forEach((item: any) => {
            data.push(item)
        })
        setData([...list])
        if(data.length === 0 ){
            setFlag(true)
        }else{
            setFlag(false)
        }
    }
    const [getFlag,setGetFlag]:any = useState([])
    const flagList = async ()=>{
        let {data:data} = await getProduct({parent_name:'服饰'})
        console.log(data)
        let fushi = data.res
        fushi.forEach((item:any)=>{
            getFlag.push(item)
        })
        setGetFlag([...fushi])
    }
    console.log(data);
    console.log(getFlag);
    useEffect(() => {
        getItemList()
        flagList()
    }, [])
    const Change = (e: any) => {
        console.log(e)
    }
    const changeColor = () => {
        console.log(1)
    }
    let push = useNavigate()
    const goDetails = (id: any) => {
        push(`/details/${id}`, { state: { type: '鞋类' } })
    }
    return (
        <div className={style['searchMain']}>
            <SeachTop></SeachTop>
            <div className={style['dropdown_bar']} style={{ display: flag ? 'none' : 'block' }} >
                <Dropdown>
                    <Dropdown.Item key='sorter' title='全部商品'  >
                        <div style={{ padding: 12 }} onChange={e => Change(e)} defaultValue='default'>
                            <div>
                                全部商品
                            </div>
                        </div>
                    </Dropdown.Item>
                    <Dropdown.Item key='bizop' title='价格排序' >
                        <div style={{ padding: 12 }} onClick={e => Change(e)} >
                            <div style={{ padding: 6 }} className={style['active']}>
                                默认排序
                            </div>
                            <div style={{ padding: 6 }}>
                                价格排序
                            </div>
                            <div style={{ padding: 6 }}>
                                销量排序
                            </div>
                        </div>
                    </Dropdown.Item>
                </Dropdown>
            </div>
            <div className={style['flag']} style={{ display: flag ? 'block' : 'none' }}>
                <p>抱歉，没有找到相关商品，为你推荐以下热门商品</p>
            </div>
            <div style={{ display: flag ? 'block' : 'none' }}>
            <ul>
               {
                 getFlag.map((item: any, index: any) =>
                 (
                     <li key={index} onClick={e => goDetails(item.id)}>
                         <img src={item.img} alt="" />
                         <p>{item.title}</p>
                         <div>
                             <span>
                                 <em>￥</em>
                                 <i>{item.price}</i>
                             </span>
                             <label>{item.sale}人付款</label>
                         </div>
                     </li>
                 ))
               }
            </ul>
            </div>

            <ul>
                {
                    data.map((item: any, index: any) =>
                    (
                        <li key={index} onClick={e => goDetails(item.id)}>
                            <img src={item.img} alt="" />
                            <p>{item.title}</p>
                            <div>
                                <span>
                                    <em>￥</em>
                                    <i>{item.price}</i>
                                </span>
                                <label>{item.sale}人付款</label>
                            </div>
                        </li>
                    )
                    )
                }
            </ul>
        </div>
    )
}

export default SearchList