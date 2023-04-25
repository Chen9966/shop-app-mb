import React, { useEffect, useState } from 'react';
import homeStyle from './home.module.scss';
import { SearchOutlined } from '@ant-design/icons';
import { getSwiper, getProductSku } from '@/api/home/http'
import { Carousel } from 'antd';
import { useNavigate } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    display: 'inline-block'
};
const HomeBar: React.FC = () => {
    let [swiperList, setSwiperList]: any[] = useState([])
    // let [param, setparam]: any[] = useState([])
    const getSwiperList = async (data: any) => {
        // console.log(data);
        let { params, spu_id } = data
        let { name, series, id } = JSON.parse(params)
        // console.log(typeof spu_id);
        // console.log(id)
  
        if (spu_id) {
            push(`/details/${id}`, { state: { type: '鞋类' } })
        } else {
            push(`/secondary/${series}`, {
                state: {
                    obj: {name,series}
                }
            })
        }
    }




    useEffect(() => {
        getSwiper().then(res => {
            setSwiperList(res.data.res)
        })
    }, [])

    const onChange = (currentSlide: number) => {
        console.log(currentSlide);
    };
    let push = useNavigate()
    const goSearch = () => {
        push('/search')
    }
    return (
        <div className={homeStyle['home-top']}>
            <div className={homeStyle['home-bar']}>
                <div className={homeStyle['content']}>
                    <div className={homeStyle['bar-left']}>
                        <div className={homeStyle['li']}>
                            <div className={homeStyle['home_log']}>
                                <div className={homeStyle['front_img']}></div>
                            </div>
                        </div>
                    </div>
                    <div className={homeStyle['bar-right']}>
                        <SearchOutlined onClick={e => { goSearch() }} />
                    </div>
                </div>
            </div>
            <div className={homeStyle['my-swiper']}>
                <Carousel afterChange={onChange} >
                    {
                        swiperList.map((item: any) => {
                            return (
                                <div key={item.id} onClick={e => getSwiperList(item)} >
                                    <img style={contentStyle} src={item.swiperImg} alt="" />
                                </div>
                            )
                        })
                    }
                </Carousel>



            </div>
        </div>
    )
}
export default HomeBar