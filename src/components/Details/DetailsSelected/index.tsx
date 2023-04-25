import React from 'react'
import style from './DetailsSelected.module.scss'
import { Image } from 'antd';

interface imgs {
    res:[]
}
const DetailsSelected: React.FC<imgs> = (props:imgs) => {
    let {res} = props
    // console.log(res)
    return (
        <div className={style['Selected']}>
            <div className={style['cell']}>
                <div className={style['cell_title']}>
                    <span>穿搭精选({res.length})</span>
                </div>
            </div>
            <ul>
                {
                    res.map((item:any,index:any)=>{
                        return (
                            <li key={index}>
                               <Image key={item} src={item.small}  alt=""/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DetailsSelected