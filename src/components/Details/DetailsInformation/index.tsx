import React from 'react'
import style from './DetailsInformation.module.scss'
const Information: React.FC = () => {

    const list = [
        {
            p: "关于商品：",
            span:
              "由于生产批次，产地的不同以及商品更新升级和品跑方图片调整，实物的材质，外观细节、配件和包装等可能与商品图片存在细微差异，具体请以收到的实物为准。如商品上绑有调包扣或贴有防伪纸，请您收到后先确认上无误再进行拆除",
          },
          {
            p: "关于色差：",
            span:
              "因手机、电脑等显示设备的色彩偏差和个人对颜色理解不同，导致实物可能会与照片存在一定色差，请您以收到的实物为准",
          },
          {
            p: "关于气味：",
            span:
              "新商品可能会存在一些气味，这些气味来自材料，鞋底，胶水等，您可以将商品放置在通风处一段时间、减少气味后再穿着",
          },
          {
            p: "关于尺码：",
            span:
              "商品详情页的尺码表仅供参考，由于品牌尺码标准，产品款型及测量方法不同，商品实际尺寸可能会存在些误差，均属于正常情况",
          },
          {
            p: "保养说明：",
            span:
              "请定期清洁，针对不同材质与工艺进行清洁和保养，可以使用干净柔软白色湿棉或软毛刷擦拭，最好使用专业清洁剂，切勿使用刷子猛刷；避免曝晒和火烤，避免阳光曝晒引起老化、变形、褪色及断裂",
          },
          {
            p: "自然氧化：",
            span:
              "部分球鞋由于生产年代久远以及鞋面和鞋底等处的材质特殊与空气长期接触后会发生自然氧化是属正常现象无法避免",
          },
    ]
    return (
        <div className={style['Information']}>
            <div className={style['cell']}>
                <div className={style['cell_title']}>
                    <span>购物须知</span>
                </div>
            </div>
            <ul>
                {
                    list.map((item:any,index:any)=>{
                        return (
                            <li key={index}>
                                <p>{item.p}</p>
                                <span>{item.span}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Information