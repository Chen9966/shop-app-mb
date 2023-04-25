import React, { useState } from 'react'
import style from './DetailsParameter.module.scss'
import { QuestionCircleOutlined } from '@ant-design/icons';
import { Collapse } from 'antd';
interface list {
    data: any[],
    param:any[]
}
const DetailsParameter: React.FC<list> = (props: list) => {
    let { data,param } = props
    // console.log(param);
    // let res = data[0].param
    // console.log(data[0].param); 

    const { Panel } = Collapse

    const onChange = () => {
        console.log(1);
    }
    return (
        <div className={style['Parameter']}>
            <div className={style['cell']}>
                <div className={style['cell_title']}>
                    <span>参数</span>
                </div>
                <div className={style['cell_value']}>
                    <span>商品信息有疑问 <QuestionCircleOutlined /></span>
                </div>
            </div>
            <ul>
                {
                    data.map((item: any, index: any) => {
                        return (
                            <div key={index}>
                                <li>
                                    <p>品牌</p>
                                    <p>安踏</p>
                                </li>
                                <li>
                                    <p>名称</p>
                                    <p>{item.title}</p>
                                </li>
                                <li>
                                    <p>发售价格</p>
                                    <p>￥{item.price}(仅供参考)</p>
                                </li>
                                <Collapse className={style['collapse']} defaultActiveKey={['1']} ghost onChange={onChange} expandIconPosition='end'>
                                    <Panel header="点击展开" key="1" >
                                        <li>
                                            <p>发货日期</p>
                                            <p>2020.2.28</p>
                                        </li>
                                        <li>
                                            <p>风格</p>
                                            <p>运动</p>
                                        </li>
                                        <li>
                                            <p>配色</p>
                                            <p>{param}</p>
                                        </li>
                                        <li>
                                            <p>使用季节</p>
                                            <p>春 夏 秋 冬</p>
                                        </li>
                                    </Panel>

                                </Collapse>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default DetailsParameter