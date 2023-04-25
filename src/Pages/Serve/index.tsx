import React from 'react'
import style from './Serve.module.scss'
import { LeftOutlined } from '@ant-design/icons'

const Serve: React.FC = () => {

    const icons: React.CSSProperties = {
        fontSize: '28px',
        color: '#2f3640',
    }
    const goBack =()=>{
        history.back()
    }
    return (
        <div className={style['serve']}>
            <div>
                <div className={style['serve_bar']}>
                    <div className={style['serve_content']}>
                        <div className={style['serve_left']}>
                            <LeftOutlined style={icons} onClick={e=>goBack()} />
                        </div>
                        <div className={style['serve_title']}>SKR线上</div>
                    </div>
                </div>
            </div>
            <div className={style['serve_text']}>
                <div className={style['serve_contents']}>
                    <div className={style['serve_normal']}>
                        <b>客服的工作时间为9:00-24:00</b>
                    </div>
                </div>
                <div className={style['serve_textarea']}>
                    <div className={style['serve_vlaue']}>
                        <div className={style['serve_body']}>
                            <textarea className={style['serve_control']} name="" id="" placeholder='客服将尽快回复您'></textarea>
                        </div>
                    </div>
                </div>
                <button className={style['serve_send']}>
                    <div className={style['btn_content']}>
                        <span>发送</span>
                    </div>
                </button>
            </div>
        </div>
    )
}

export default Serve