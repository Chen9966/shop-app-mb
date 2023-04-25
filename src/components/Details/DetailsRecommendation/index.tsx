import React, { useEffect, useState } from 'react'
import style from './DetailsRecommendation.module.scss'
// import { useLocation, useNavigate } from 'react-router-dom'
type selfProps = {
    getChildData: Function,
    productList:[]
}
// interface
const DetailsRecommendation: React.FC<selfProps> = (props: selfProps) => {
    const { getChildData,productList} = props
    // console.log(getChildData,productList)

    let [arr, setArr]: any = useState([])
    const Random = () => {
        // console.log(data)
        let num = Math.floor(Math.random() * (productList.length - 30))
        // console.log(num)
        let arr1 = productList.slice(num, num + 30)
        arr.push(...arr1)
        // console.log(arr)
    }
    Random()

    const handler = (id: any) => {
    
        getChildData(id)
    }



    return (
        <div className={style['Recommendation']}>
            <div className={style['cell']}>
                <div className={style['cell_title']}>
                    <span>为你推荐</span>
                </div>
            </div>
            <ul>
                {
                    arr.map((item: any, index: number) => {
                        return (
                            <li key={index} onClick={e => handler(item.id)}>
                                <img src={item.img} alt="" />
                                <div>
                                    <p>{item.title}</p>
                                    <p>{item.price}</p>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DetailsRecommendation