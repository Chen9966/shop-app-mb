import React from 'react'
import { LeftOutlined } from '@ant-design/icons';
import SelectMenus from '../../../components/menusSelect/SelectMenus'
import style from './seachTop.module.scss'
const SeachTop: React.FC = () => {
    const iconStyle: React.CSSProperties = {
        color: 'rgb(68, 74, 83)',
        fontSize: '30px',
    }
    const goBack = () => {
        history.back()
        console.log(222)
      }
    return (
        <div className={style['Search_top']}>
            <LeftOutlined style={iconStyle} className={style['leftOutlined']} onClick={e => goBack()} />
            <span className={style['spanSearch']}>搜索</span>
            <SelectMenus imgs={true} />
        </div>
    )
}

export default SeachTop