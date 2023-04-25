import React from 'react'
import style from './DetailsParticulars.module.scss'

interface imgs{
    res:[]
}
const DetailsParticulars: React.FC<imgs> = (props:imgs) => {
    let {res} = props
    // console.log(res,'..........')
    return (
        <div className={style['Particulars']}>
            <div className={style['cell']}>
                <div className={style['cell_title']}>
                    <span>细节展示</span>
                </div>
            </div>
            <ul>
                
                {
                    res.map((item:any,index:any)=>{
                        return (
                            <li key={index}>
                                <img src={item.normal} alt="" />
                            </li>
                        )
                    })

                }
            </ul>
        </div>
    )
}

export default DetailsParticulars