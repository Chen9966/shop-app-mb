import React, { useEffect, useState } from 'react'
import style from './DetailsRanking.module.scss';
import { RightOutlined } from '@ant-design/icons'
import { Drawer } from 'antd';
import { getProduct } from '@/api/home/http'
import { useLocation, useNavigate } from 'react-router-dom'
import index from '@/Pages';

// const iconStyle: React.CSSProperties = {
//     fontSize: '14px',
//     margin: '6px'
// }
const DetailsRanking: React.FC = () => {
    let [open, setOpen] = useState(false)
    const showDrawer = () => {
        setOpen(true)
    }
    const onClose = () => {
        setOpen(false)
    }
    let [data, setData]:any = useState([])
    let location = useLocation()
    // console.log(location);
    let type = location.state.type
    // console.log(type)
    const getList = async () => {
        let { data: res } = await getProduct({ parent_name: type })
        // console.log(res.res);
        let arr = res.res
        arr.forEach((item:any)=>{
            data.push(item)
        })
        
        setData([...data])
        // console.log(data, '///////////////');
    }

    useEffect(() => {
        getList()
    }, [])

    const navigate = useNavigate()
    const goDetails = (id: any) => {
        // getList()
        onClose()
        setTimeout(() => {
            navigate(`/details/${id}`, { state: {type:type} })
            getList()
        }, 10);
    }
    return (
        <div className={style['Ranking']}>
            <div className={style['cell']} onClick={e => showDrawer()}>
                <div className={style['cell_title']}>
                    <span>相关推荐</span>
                </div>
                <div className={style['cell-value']}>
                    <span>查看更多 <RightOutlined /></span>
                </div>
            </div>
            <Drawer height='660px' closable placement="bottom" onClose={onClose} open={open}>
                <div className={style['shuju']}>
                    <ul>
                        {
                            data.map((item: any,index:any) => {
                                return (
                                    <li key={index} onClick={e => goDetails(item.id)}>
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
            </Drawer>
        </div>
    )
}

export default DetailsRanking