import React, { useState, useEffect } from 'react'
import style from './sort.module.css'
import { NavLink, useNavigate,} from 'react-router-dom'
import shopcar from '@/assets/shopcar.svg'
import mine from '@/assets/profile.svg'
import home from '@/assets/home.svg'
import typess from '@/assets/type_active.svg'
import { getName } from '@/api/shopCar/getName'

const Sort: React.FC = () => {
  let arr = [
    { name: '鞋类', index: 1 },
    { name: '服饰', index: 2 },
    { name: '配件', index: 3 },
    { name: '儿童专区', index: 4 },
  ]
  let [name, setName]:any = useState([]);
  const [names, setnames] = useState('鞋类')
  useEffect(() => {
    getName(names)
      .then((res) => {
        name = res.data.data 
        setName(name);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [names]);

  let [isTebs, setTebs] = useState(1)
  const hand = (item: any) => {
    setTebs(item.index)
    setnames(item.name)
  }
  const handfocus=()=>{
  const pushs=useNavigate()

    pushs("/search");
  }
  const handChange=(e:any)=>{
    console.log(e.target.value);
    
  }

  return (

    <div className='content'>

      <div className={style.bbox}>
        <div className={style.sousuo}>
          <input type="text" placeholder='搜索商品' 
          onFocus={e=>handfocus()} 
          onChange={e=>handChange(e)}
          />
        </div>
        <div className={style.sousuo2}></div>
        <div className={style.main}>
          <div className={style.leftbox}>
            <ul>
              {
              arr.map((item:any,index:any) => (
                <li key={index} onClick={e => hand(item)} className={`${style.biao} ${isTebs === item.index ? style.leftborder : false}`}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className={style.lftbtn}></div>
          <div className={style.rightbox}>
            <div className={`${style.buff} ${isTebs === 1 ? false : style.bool}`}>
              <ul>
                {
                name.map((item: any,index:any) => (
                  <li key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${style.buff} ${isTebs === 2 ? false : style.bool}`}>
              <ul>
                {name.map((item: any,index:any) => (
                  <li key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${style.buff} ${isTebs === 3 ? false : style.bool}`}>
              <ul>
                {
                name.map((item: any,index:any) => (
                  <li key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`${style.buff} ${isTebs === 4 ? false : style.bool}`}>
              <ul>
                {
                name.map((item: any,index:any) => (
                  <li key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
      <div className='box'></div>
      <div className='home'>
        <ul>
          <li><NavLink to='/home'><div >
            <img src={home} alt="" />
            <div>首页</div>
          </div></NavLink>
          </li>
          <li>
            <NavLink to='/sort'><div>
              <img src={typess} alt="" />
              <div>分类</div>
            </div>
            </NavLink>
          </li>
          <li>
            <NavLink to='/shopcar'><div >
              <img src={shopcar} alt="" />
              <div>购物车</div>
            </div></NavLink>
          </li>
          <li>
            <NavLink to='/usercenter'><div >
              <img src={mine} alt="" />
              <div>我的</div>
            </div></NavLink>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Sort