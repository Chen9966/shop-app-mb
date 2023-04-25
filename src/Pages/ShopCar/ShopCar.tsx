import React, { useState, useEffect } from "react";
import style from "../ShopCar/shopcar.module.css";
import {
  LeftOutlined,
  ShoppingCartOutlined,
  EllipsisOutlined,
} from "@ant-design/icons";
import { getProduct, getShopCarList, deleteShopCar } from "@/api/shopCar/getName";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

function getRandomItems<T>(arr: T[], numItems: number): T[] {
  // 如果数组长度不足 numItems，直接返回数组
  if (arr.length <= numItems) return arr;
  // 复制原数组
  const copyArr = arr.slice();
  // 随机选取 numItems 个不重复的数据
  const result: T[] = [];
  for (let i = 0; i < numItems; i++) {
    const randomIndex = Math.floor(Math.random() * copyArr.length);
    result.push(copyArr[randomIndex]);
    copyArr.splice(randomIndex, 1);
  }

  return result;
}
const ShopCar: React.FC = () => {
  const [isAll, setisAll] = useState(false);

  let arr: any = ["鞋类", "服饰", "配件", "儿童专区"];
  let j = Math.floor(Math.random() * arr.length);
  let i = arr[j];

  const data: any = localStorage.getItem("token");

  const login = () => {
    if (!data) {
      push("/login");
    } else {
      setisAll(true);
    }
  };
  const [none, setnone] = useState(false);

  const [shoplist, setshoplist] = useState([]);
  let [shoparr, setshoparr] = useState([]);
  let customer_id = localStorage.customer_id;


  useEffect(() => {

    getProduct({ parent_name: '儿童专区' })
      .then((res: any) => {
        const momo: any = getRandomItems(res.data.res, 30)
        setshoparr(momo);
      })
      .catch((error) => {
        console.log(error);
      });
    if (data != undefined) {
      setisAll(true);
    }
    getShopCarList({ customer_id })
      .then((res: any) => {
        let list = res.data.data;
        const arr = list.reverse().map((item: any) => {
          return { ...item, selected: false }
        })
        setshoplist(arr);

        if (list.length != 0) {
          setnone(true);
        } else if (list.length = 0) {
          setshoplist([])
          setnone(false)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);444

  const Backs = () => {
    history.back();
  };

  const push = useNavigate();
  const goDetails = (id: any) => {
    console.log(id);
    push(`/details/${id}`, { state: { type: arr[i] } });
  };


  const deleNum = (id: number) => {
    const newItems: any = shoplist.map((item: any) =>
      item.id === id && item.num > 1 ? { ...item, num: item.num - 1 } : item
    );
    setshoplist(newItems);

  }
  // +按钮
  const addNum = (id: number) => {
    const newItems: any = shoplist.map((item: any) =>
      item.id === id ? { ...item, num: item.num + 1, } : item
    );
    setshoplist(newItems)
  }
  const totalPrice = shoplist.reduce(
    (total, item: any) => (item.selected ? total + item.price * item.num : total)
    , 0
  )
  const [isPan, setisPan] = useState(false)

  // 单选
  const chroos = (id: number) => {
    const newItems: any = shoplist.map((item: any) =>
      item.id === id ? { ...item, selected: !item.selected } : item
    );
    setshoplist(newItems)
    setisPan(newItems.every((item: any) => item.selected));

  }
  // 全选
  const handAll = (e: any) => {
    const selected = e.target.checked;
    const newItems: any = shoplist.map((item: any) => ({ ...item, selected }))
    setshoplist(newItems)
    setisPan(selected)
  }
  // 删除购物车
  const delecar = (id: number) => {
    deleteShopCar({ id }).then((res: any) => {
      return getShopCarList({ customer_id });
    }).then((res: any) => {
      let list = res.data.data;

      if (list !== undefined) {
        setnone(true);
        const arr = list.reverse().map((item: any) => {
          return { ...item, selected: false };
        });
        setshoplist(arr);
      } else if (list == undefined) {
        setshoplist([]);
        setnone(false);
      }
    }).catch((error: any) => {
      console.log(error);
    })
  }
  return (
    <div className="content">
      <div key="new" className={style.nav}>
        <LeftOutlined onClick={(e) => Backs()} />
        购物车
      </div>
      <div className={style.content}>
        <div
          className={style.main}
          style={{ display: isAll ? "none" : "block" }}
        >
          <div>
            请您先<button onClick={(e) => login()}>登录</button>
            可以同步电脑和手机的商品
          </div>
        </div>
        <div className={style.kong}>
          <div style={{ display: none ? "none" : "block" }}>
            <ShoppingCartOutlined />
            <div>
              <p>您的购物车暂无商品</p>
              <button>随便逛逛</button>
            </div>
          </div>
          <div
            className={style.bind}
            style={{ display: none ? "block" : "none" }}
          >
            {shoplist.map((item: any) => (
              <div key={item.id} >
                <div
                  className={style.shopcar}
                  style={{ overflow: "hidden", height: "20vw" }}
                >
                  <div>
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => chroos(item.id)}
                    />
                  </div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <div style={{ width: "20vw", padding: "1vw 0" }}>
                      <img onClick={e=>goDetails(item.spu_id)} src={item.img} alt="" />
                    </div>
                    <div style={{ width: "100%", position: "relative", margin: '0 0 0 3vw' }}>
                      <div>{item.title}</div>
                      <p>
                        {`${JSON.parse(item.params)[0]}`}{" "}&nbsp;
                        <span>{`${JSON.parse(item.params)[1]}`}</span>
                      </p>
                      <div className={style.btn} id={style.btn}>
                        ￥<span>{item.price}</span>
                        <button id={style.shanchu} onClick={() => delecar(item.id)}>删除</button>

                        <div className={style.bombtn}>
                          <button onClick={() => deleNum(item.id)}>-</button>
                          ×{item.num}
                          <button onClick={() => addNum(item.id)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={style.shop}>
        <p>为您优选新品</p>
        <ul>
          {shoparr.map((item: any) => {
            return (
              <li key={item.id} onClick={(e) => goDetails(item.id)}>
                <img src={item.img} alt="" />
                <div style={{ height: "16px", overflow: "hidden" }}>
                  {item.title}
                </div>
                <div>
                  <p>
                    ￥{item.special_price}
                    <span>{item.price}</span>
                  </p>
                  <div>
                    <EllipsisOutlined />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style.zhankong}></div>
      <div className={style.botnav}>
        <div className={style.botbtom}>
          <input type="checkbox"
            onChange={(e) => handAll(e)}
            checked={isPan} />全选
        </div>
        <div className={style.footnav}>合计: <span className={style.span}>￥</span><span>{totalPrice}</span><strong>.00</strong>
          <div className={style.footbtn}>
            <button className={style.shopmoney}>提交订单</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCar;
