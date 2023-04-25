import React, { useEffect, useState } from "react";
import styles from "./OrderTab.module.css";
import OrderList from "../orderList/OrderList";
import {
  DeleteFilled,
  AlipayCircleOutlined,
  GiftOutlined,
} from "@ant-design/icons";
import { Tabs } from "antd-mobile";
import { getOrder, deleteOrder } from "@/api/getOrder";
import img1 from "@/assets/login/loginBg.jpg";
import { useNavigate } from "react-router-dom";
import { getDatilsSku } from "@/api/Details/http";

const OrderTab: React.FC = () => {
  const push = useNavigate();
  const [Orders, setOrders] = useState([
    {
      id: 33,
      goodsName: "女鞋",
      price: "39",
      spu_id: "",
      flag: true, //待付款
      isShow: true, // 待发货
      shouhuo: false, //待收货
      imgs: img1,
      color: "蓝色",
    },
  ]);
  const [getpays, setPays] = useState([
    {
      id: 1,
      goodsName: "",
      price: "",
      spu_id: "",
      flag: true, //待付款
      isShow: true, // 待发货
      shouhuo: false, //待收货
      imgs: "",
      color: "",
    },
  ]);
  const [fahuo, setFahuo] = useState([
    {
      id: 1,
      goodsName: "",
      price: "",
      spu_id: "",
      flag: true, //待付款
      isShow: true, // 待发货
      shouhuo: false, //待收货
      imgs: "",
      color: "",
    },
  ]);
  const [shouhuo, setShouhuo] = useState([
    {
      id: 1,
      goodsName: "",
      price: "",
      spu_id: "",
      flag: true, //待付款
      isShow: true, // 待发货
      shouhuo: false, //待收货
      imgs: "",
      color: "",
    },
  ]);

  const [isTr, setIsTr] = useState(true);

  const getDefalute = async () => {
    let res = await getOrder({ customer_id: 7 });
    let { data } = res;
    data.forEach((element: any) => {
      const datas = {
        id: 33,
        goodsName: "女鞋",
        price: "39",
        spu_id: "",
        flag: false, //待付款
        isShow: false, // 待发货
        shouhuo: false, //待收货
        imgs: "",
        color: "蓝色",
      };
      datas.id = element.id;
      datas.goodsName = element.skus[0].title;
      datas.price = element.skus[0].price;
      datas.spu_id = element.skus[0].spu_id;
      if (element.status === 3) {
        datas.flag = true;
      } else if (element.status === 0) {
        datas.isShow = true;
      } else if (element.status === 1) {
        datas.shouhuo = true;
      }
      let colors = JSON.parse(element.skus[0].param);
      datas.color = colors[0];
      let img = JSON.parse(element.skus[0].imgs);
      datas.imgs = img[0].small;
      Orders.push(datas);
    });
    setOrders([...Orders]);
  };
  useEffect(() => {
    getDefalute();
  }, []);

  const changes = (item: any) => {
    if (item === "pay") {
      //待付款
      const getpays = Orders.filter((item: any) => item.flag === true);
      setPays([...getpays]);
    }
    if (item === "fahuo") {
      const fahuo = Orders.filter((item) => item.isShow === true);
      setFahuo(fahuo);
    }
    if (item === "shouhuo") {
      const shouhuo = Orders.filter((item) => item.shouhuo === true);
      setShouhuo(shouhuo);
    }
  };
  const toOrder = async (id: any) => {
    let res = await getDatilsSku({ spu_id: id });
    let { data } = res.data; 
    push("/entorder",{ state: { type: data } });
  };
  const delBtn = async (item: any) => {
    let res = await deleteOrder({ id: item });
    console.log(res);
  };
  return (
    <div>
      <Tabs
        className={styles.cards}
        onChange={(item) => {
          changes(item);
        }}
      >
        <Tabs.Tab title="全部" key="all">
          {isTr ? (
            <div>
              <ul className={styles.Info}>
                {Orders.map((item, index) => (
                  <li key={index}>
                    <div onClick={() => toOrder(item.spu_id)}>
                      <img className={styles.imgs} src={item.imgs} alt="" />
                      <p className={styles.pp1}>
                        <span className={styles.sp1}>{item.goodsName}</span>
                        <span className={styles.sp2}>￥{item.price}</span>
                        <br />
                        <span className={styles.colors}>
                          颜色: {item.color}
                        </span>
                      </p>
                    </div>
                    <span className={styles.sp3}>
                      <AlipayCircleOutlined />
                      {item.flag ? "付款完毕" : "未付款"}
                    </span>
                    <span className={styles.sp4}>
                      <GiftOutlined />
                      {item.isShow ? "已发货" : "未发货"}
                    </span>
                    <span className={styles.sp4}>
                      &ensp;
                      <GiftOutlined />
                      {item.shouhuo ? "已收货" : "未收货"}
                    </span>
                    <div className={styles.icon}>
                      删除订单 <DeleteFilled onClick={() => delBtn(item.id)} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <OrderList />
          )}
        </Tabs.Tab>
        <Tabs.Tab title="待付款" key="pay">
          {getpays ? (
            <div>
              <ul className={styles.Info}>
                {getpays.map((item, index) => (
                  <li key={index}>
                    <div onClick={() => toOrder(item.spu_id)}>
                      <img className={styles.imgs} src={item.imgs} alt="" />
                      <p className={styles.pp1}>
                        <span className={styles.sp1}>{item.goodsName}</span>
                        <span className={styles.sp2}>￥{item.price}</span>
                        <br />
                        <span className={styles.colors}>
                          颜色: {item.color}
                        </span>
                      </p>
                    </div>

                    <span className={styles.sp3}>
                      <AlipayCircleOutlined />
                      {item.flag ? "付款完毕" : "未付款"}
                    </span>
                    <span className={styles.sp4}>
                      <GiftOutlined />
                      {item.isShow ? "已发货" : "未发货"}
                    </span>
                    <span className={styles.sp4}>
                      &ensp;
                      <GiftOutlined />
                      {item.shouhuo ? "已收货" : "未收货"}
                    </span>
                    <div className={styles.icon}>
                      删除订单 <DeleteFilled onClick={() => delBtn(item.id)} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <OrderList />
          )}
        </Tabs.Tab>
        <Tabs.Tab title="待发货" key="fahuo">
          {fahuo ? (
            <div>
              <ul className={styles.Info}>
                {fahuo.map((item, index) => (
                  <li key={index}>
                    <div onClick={() => toOrder(item.spu_id)}>
                      <img className={styles.imgs} src={item.imgs} alt="" />
                      <p className={styles.pp1}>
                        <span className={styles.sp1}>{item.goodsName}</span>
                        <span className={styles.sp2}>￥{item.price}</span>
                        <br />
                        <span className={styles.colors}>
                          颜色: {item.color}
                        </span>
                      </p>
                    </div>

                    <span className={styles.sp3}>
                      <AlipayCircleOutlined />
                      {item.flag ? "付款完毕" : "未付款"}
                    </span>
                    <span className={styles.sp4}>
                      <GiftOutlined />
                      {item.isShow ? "已发货" : "未发货"}
                    </span>
                    <span className={styles.sp4}>
                      &ensp;
                      <GiftOutlined />
                      {item.shouhuo ? "已收货" : "未收货"}
                    </span>
                    <div className={styles.icon}>
                      删除订单 <DeleteFilled onClick={() => delBtn(item.id)} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <OrderList />
          )}
        </Tabs.Tab>
        <Tabs.Tab title="待收货" key="shouhuo">
          {shouhuo ? (
            <div>
              <ul className={styles.Info}>
                {shouhuo.map((item, index) => (
                  <li key={index}>
                    <div onClick={() => toOrder(item.spu_id)}>
                      <img className={styles.imgs} src={item.imgs} alt="" />
                      <p className={styles.pp1}>
                        <span className={styles.sp1}>{item.goodsName}</span>
                        <span className={styles.sp2}>￥{item.price}</span>
                        <br />
                        <span className={styles.colors}>
                          颜色: {item.color}
                        </span>
                      </p>
                    </div>

                    <span className={styles.sp3}>
                      <AlipayCircleOutlined />
                      {item.flag ? "付款完毕" : "未付款"}
                    </span>
                    <span className={styles.sp4}>
                      <GiftOutlined />
                      {item.isShow ? "已发货" : "未发货"}
                    </span>
                    <span className={styles.sp4}>
                      &ensp;
                      <GiftOutlined />
                      {item.shouhuo ? "已收货" : "未收货"}
                    </span>
                    <div className={styles.icon}>
                      删除订单 <DeleteFilled onClick={() => delBtn(item.id)} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <OrderList />
          )}
        </Tabs.Tab>
      </Tabs>
    </div>
  );
};

export default OrderTab;
