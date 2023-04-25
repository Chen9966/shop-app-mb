import React, { useEffect, useState } from "react";
import { getDatilsSpu, getDatilsSku } from "@/api/Details/http";
import { addShopCarList, getShopCarList } from "@/api/shopCar/getName";
import { getProduct } from "@/api/home/http";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import style from "./Details.module.scss";
import DetailsSwiper from "@/components/Details/DetailsSwiper";
import DetailsService from "@/components/Details/DetailsService";
import DetailsRanking from "@/components/Details/DetailsRanking";
import DetailsPurchased from "@/components/Details/DetailsPurchased";
import DetailsEvaluate from "@/components/Details/DetailsEvaluate";
import DetaisSelected from "@/components/Details/DetailsSelected";
import DetailsParameter from "@/components/Details/DetailsParameter";
import DetailRules from "@/components/Details/DetailRules";
import Information from "@/components/Details/DetailsInformation";
import DetailsRecommendation from "@/components/Details/DetailsRecommendation";
// import {store} from '@/store'
import {
  LeftOutlined,
  CustomerServiceOutlined,
  ShareAltOutlined,
  StarOutlined,
  CrownOutlined,
  SearchOutlined,
  LikeOutlined,
  MessageOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Drawer, message, Input } from "antd";
import DetailsParticulars from "@/components/Details/DetailsParticulars";

const Details: React.FC = () => {
  let token = localStorage.token
  // console.log(token);
  let customer_id = localStorage.customer_id;
  console.log(typeof customer_id);

  const params = useParams();
  let id = params.id;
  // console.log(id);

  // 定义响应式数据 res为返回数据的img图片 传递给子组件使用
  let [res, setRes]: any[] = useState([]);
  // 定义响应式数据 res
  // data为返回的数据
  let [data, setData]: any = useState([]);

  // price为价格数据 传递给子组件使用
  let [price, setPirce] = useState(1);
  let location = useLocation();
  let type = location.state.type;
  let [productList, setProductList]: any = useState([]);
  // 颜色索引
  let [colorActive, setColorActive] = useState(0);
  // 响应式数据 用来接收颜色数据
  let [param, setParams]: any = useState([]);
  // 尺码
  let rule = ["36", "37", "38", "39", "40", "41", "41", "42", "43"];
  // 颜色索引
  let [rules, setRules] = useState(-1);
  let [stocks, setStocks]: any = useState([]);
  // 商品id 添加购物车必传的参数
  let [sku_id, setSku_id] = useState(0);
  const req = async () => {
    let { data: data } = await getDatilsSku({ spu_id: id });
    let arr = JSON.parse(
      data.data[0].imgs.replace(/\n/g, "\\n").replace(/\r/g, "\\r")
    );
    let arrs = JSON.parse(
      data.data[0].param.replace(/\n/g, "\\n").replace(/\r/g, "\\r")
    );
    if (arr.length > 0) {
      res.splice(0);
      arr.forEach((item: any) => {
        res.push(item);
      });
      setRes([...arr]);
    }
    if (arrs.length > 0) {
      param.splice(0);
      arrs.forEach((item: any) => {
        param.push(item);
      });
      setParams([...arrs]);
    }
    let inventory = JSON.parse(data.data[0].stock);
    inventory.forEach((element: any) => {
      stocks.splice(0);
      stocks.push(element);
    });
    setStocks(inventory);
    setData(data.data);
    setPirce(data.data[0].price);
    setSku_id(data.data[0].id);
  };
  // let [s1,setS1] = useState([])
  useEffect(() => {
    getDatilsSpu({ id: id }).then((res: any) => {
      // console.log(res);
    });
    req();
    getProductList();
  }, [id]);

  useEffect(() => { }, [res]);
  const getProductList = async () => {
    let { data: res } = await getProduct({ parent_name: type });
    let arr = res.res;
    productList.splice(0);
    arr.forEach((item: any) => {
      productList.push(item);
    });
    setProductList([...productList]);
  };
  const contentStyle: React.CSSProperties = {
    fontSize: "28px",
    color: " #2f3640",
    marginRight: "4px",
    position: "relative",
    display: "inline - block",
    top: 3,
  };
  const share: React.CSSProperties = {
    fontSize: "28px",
    color: " #2f3640",
    position: "absolute",
    display: "inline - block",
    left: 260,
    top: 10,
  };
  const iconsStyle: React.CSSProperties = {
    fontSize: "30px",
    color: " #2f3640",
    position: "absolute",
    display: "inline - block",
    left: 300,
    top: 10,
  };
  const starStyle: React.CSSProperties = {
    fontSize: "30px",
    color: " #2f3640",
    position: "absolute",
    display: "inline - block",
    left: 340,
    top: 10,
  };
  const expressStyle: React.CSSProperties = {
    marginTop: "2px",
    fontSize: "18px",
  };
  const headerStyle: React.CSSProperties = {
    textAlign: "center",
    borderRadius: "12px",
  };
  const btn: React.CSSProperties = {
    display: "block",
    width: "100%",
    padding: 0,
    fontSize: "16px",
    lineHeight: "48px",
    textAlign: "center",
    background: "#fff",
    border: "none",
    cursor: "pointer",
    marginTop: "20px",
  };
  const footerIcon: React.CSSProperties = {
    cursor: "pointer",
    position: "relative",
    width: "1em",
    margin: "0 auto 5px",
    color: "#323233",
    fontSize: "22px",
  };
  const btnContent: React.CSSProperties = {
    color: "white",
    background: "rgb(47, 54, 64)",
    borderColor: "rgb(47, 54, 64)",
    borderTopRightRadius: "999px",
    borderBottomRightRadius: "999px",
  };
  const btn1Content: React.CSSProperties = {
    color: "white",
    background: "rgb(113, 128, 147)",
    borderColor: "rgb(113, 128, 147)",
    borderTopLeftRadius: "999px",
    borderBottomLeftRadius: "999px",
  };
  // 返回上一层
  const goBack = () => {
    history.back();
    console.log(123);
  };
  // 分享给好友抽屉
  const [open, setOpen] = useState(false);
  const forward = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // 取消分享
  const cancel = () => {
    onClose();
  };
  // 路由跳转到serve页面
  const push = useNavigate();
  const handler = () => {
    push("/serve");
  };

  // 点击跳转详情页
  const getChildData = (id: any) => {
    setTimeout(() => {
      push(`/details/${id}`, { state: { type: type } });
      getProductList();
    }, 10);
  };
  // 加入购物车抽屉
  const [opens, setOpens] = useState(false);
  const openDrward = () => {
    setOpens(true);
  };
  const close = () => {
    setOpens(false);
  };
  // 立即购买抽屉
  const [open1, setOpen1] = useState(false);
  const open1Drward = () => {
    setOpen1(true);
  };
  const close1 = () => {
    setOpen1(false);
  };
  // tabs颜色切换传递参数
  const tabswitch = (index: any) => {
    // console.log(index);
    setColorActive(index);
  };
  // tabs尺码切换传递参数
  const ruleSwitch = (index: any) => {
    setRules(index);
    // console.log(index);
  };
  // const [messageApi, contextHolder] = message.useMessage()

  // 根据判断跳转购物车页面
  const goOrder = () => {
    if (rules === -1) {
      message.info("请选择尺寸");
      return;
    }
    if (stocks[colorActive] === 0) {
      message.error("暂时没有库存啦!");
      return;
    } //    let res =  addShopCarList()
    push("/entorder", { state: { type: data } });
  };
  const list = [
    {
      img: "https://img01.yzcdn.cn/vant/share-sheet-wechat.png",
      name: "微信",
    },
    {
      img: "https://img01.yzcdn.cn/vant/share-sheet-weibo.png",
      name: "微博",
    },
    {
      img: "	https://img01.yzcdn.cn/vant/share-sheet-link.png",
      name: "复制链接",
    },
    {
      img: "	https://img01.yzcdn.cn/vant/share-sheet-poster.png",
      name: "分享海报",
    },
    {
      img: "	https://img01.yzcdn.cn/vant/share-sheet-qrcode.png",
      name: "二维码",
    },
  ];

  // input的默认值
  let [inputValue, setInputValue] = useState(1);
  // 商品数量添加
  const add = () => {
    setInputValue(inputValue + 1);
  };
  // 商品数量减少
  const reduce = () => {
    if (inputValue > 1) {
      setInputValue(inputValue - 1);
    }
  };
  // 定义类型
  interface type {
    num: number;
    sku_id: number;
    customer_id: string;
    params: any[];
  }
  let shopParams: type = {
    num: inputValue,
    sku_id: sku_id,
    customer_id: customer_id,
    params: [param[colorActive], rule[colorActive]],
  };

  let [shopCarlist, setShopCarlist]: any = useState([]);
  const addShopCar = async () => {
    if(!token){
      message.error('请先登录')
      setTimeout(()=>{
        push('/login')
      },1500)
      return 
    }
    if (rules === -1) {
      message.info("请选择尺寸");
      return;
    }
    if (stocks[colorActive] === 0) {
      message.error("暂时没有库存啦!");
      return;
    }
    // console.log(typeof customer_id);
    let res = await addShopCarList(shopParams);
    // console.log(res);
    message.success("添加购物车成功");
    reo();
  };
  const reo = async () => {
    let { data: datas } = await getShopCarList({ customer_id });
    let data1 = datas.data;
    data1.forEach((e: any) => {
      shopCarlist.push(e);
    });
    setShopCarlist([...data1]);
    console.log(datas);
    console.log(shopCarlist.length);
  };

  // 跳转到购物车页面
  const goShopCarList = () => {
    push("/shopcar");
  };
  useEffect(() => {
    reo();
  }, []);
  return (
    <div className={style["Details"]}>
      <div className={style["NavBar"]}>
        <div className={style["NavBar-hairline"]}>
          {/* <div className={style['NavBar-conten']}></div> */}
          <div className={style["NavBar-content"]}>
            <div className={style["NavBar-left"]}>
              <LeftOutlined style={contentStyle} onClick={(e) => goBack()} />
              <div className={style["NavBar-title"]}></div>
            </div>
            <div className={style["NavBar-right"]}>
              <CustomerServiceOutlined
                style={share}
                onClick={(e) => handler()}
              />
              <ShareAltOutlined style={iconsStyle} onClick={(e) => forward()} />
              <StarOutlined style={starStyle} />
            </div>
            <Drawer
              style={headerStyle}
              height="300px"
              title="立即分享给好友"
              placement="bottom"
              onClose={onClose}
              open={open}
            >
              <div className={style["Details_options"]}>
                {list.map((item, index) => {
                  return (
                    <div key={index} className={style["Details_option"]}>
                      <img src={item.img} alt="" />
                      <span>{item.name}</span>
                    </div>
                  );
                })}
              </div>

              <button style={btn} onClick={(e) => cancel()}>
                取消
              </button>
            </Drawer>
          </div>
        </div>
      </div>
      <DetailsSwiper res={res}></DetailsSwiper>
      <div className={style["title"]}>
        {data.map((item: any) => {
          return (
            <div key={item.id}>
              <p>{item.title}</p>
              <p>{item.price}</p>
            </div>
          );
        })}
      </div>
      <div className={style["banner"]}>
        <ul>
          <li>
            <CrownOutlined style={expressStyle} />
            <p>鉴别后发货</p>
          </li>
          <li>
            <SearchOutlined style={expressStyle} />
            <p>逐件查验</p>
          </li>
          <li>
            <LikeOutlined style={expressStyle} />
            <p>正品保障</p>
          </li>
        </ul>
      </div>
      <div>
        <DetailsService price={price}></DetailsService>
        <DetailsRanking></DetailsRanking>
        <DetailsPurchased></DetailsPurchased>
        <DetailsEvaluate></DetailsEvaluate>
        <DetaisSelected res={res}></DetaisSelected>
        <DetailsParameter data={data} param={param}></DetailsParameter>
        <DetailsParticulars res={res}></DetailsParticulars>
        <DetailRules></DetailRules>
        <Information></Information>
        <DetailsRecommendation
          getChildData={getChildData}
          productList={productList}
        ></DetailsRecommendation>
      </div>
      <div className={style["Detail_Footer"]}>
        <div className={style["detail_goods_action"]}>
          <div
            className={style["detail_goods_action_icon"]}
            onClick={(e) => handler()}
          >
            <MessageOutlined style={footerIcon} />
            客服
          </div>
          <div
            className={style["detail_goods_action_icon"]}
            onClick={(e) => goShopCarList()}
          >
            <ShoppingCartOutlined style={footerIcon} />
            <div className={style["footer_icon_info"]}>
              {shopCarlist.length}
            </div>
            购物车
          </div>
          <button
            className={style["detail_goods-action_button"]}
            onClick={(e) => openDrward()}
          >
            <div className={style["detail_button_content"]} style={btn1Content}>
              <span>加入购物车</span>
            </div>
          </button>
          <Drawer
            height="650px"
            placement="bottom"
            onClose={(e) => close()}
            open={opens}
          >
            <div className={style["Drawar_content"]}>
              <div className={style["smallImg"]}>
                {res[0] ? <img src={res[colorActive].small} alt="" /> : null}
              </div>
              <p>选择颜色</p>
              <div>
                {param.map((item: any, index: any) => (
                  <button
                    key={index}
                    className={`${style["color_Active"]} ${index === colorActive ? style.dynamic_style : ""
                      }`}
                    onClick={(e) => tabswitch(index)}
                  >
                    <div className={`${style.btn_content}`}>
                      <span>{item}</span>
                    </div>
                  </button>
                ))}
              </div>
              <p>选择尺码</p>
              <div className={style["rules"]}>
                {rule.map((item: any, index: any) => (
                  <button
                    key={index}
                    disabled={index === 1}
                    className={`${style.rule_btn} ${index === rules ? style.rulesActive : ""
                      } ${index === 1 ? style.disabled : ""}`}
                    onClick={(e) => ruleSwitch(index)}
                  >
                    <div>
                      <span>{item}</span>
                    </div>
                  </button>
                ))}
              </div>
              <p>库存: {stocks[colorActive]}</p>
              <div className={style["number"]}>
                <div className={style["cell"]}>
                  <div className={style["label"]}>
                    <span>购买数量:</span>
                  </div>
                  <div className={style["value"]}>
                    <div className={style["body"]}>
                      <div className={style["custom"]}>
                        <div className={style["stepper"]}>
                          <button
                            disabled={inputValue === 1 ? true : false}
                            className={style["minus"]}
                            onClick={(e) => reduce()}
                          >
                            -
                          </button>
                          <Input value={inputValue} max={stocks[colorActive]} />
                          {/* <input type="text" value={inputValue} /> */}
                          <button
                            disabled={
                              inputValue === stocks[colorActive] ? true : false
                            }
                            className={style["plus"]}
                            onClick={(e) => add()}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style["sub"]}>
                <button onClick={(e) => addShopCar()}>
                  <div className={style["content"]}>
                    <span>加入购物车</span>
                  </div>
                </button>
              </div>
            </div>
          </Drawer>
          <button
            className={style["detail_goods-action_button"]}
            onClick={(e) => open1Drward()}
          >
            <div className={style["detail_button_content"]} style={btnContent}>
              <span>立即购买</span>
            </div>
          </button>
          <Drawer
            height="650px"
            placement="bottom"
            onClose={(e) => close1()}
            open={open1}
          >
            <div className={style["Drawar_content"]}>
              <div className={style["smallImg"]}>
                {res[0] ? <img src={res[colorActive].small} alt="" /> : null}
              </div>
              <p>选择颜色</p>
              <div>
                {param.map((item: any, index: any) => (
                  <button
                    key={index}
                    className={`${style["color_Active"]} ${index === colorActive ? style.dynamic_style : ""
                      }`}
                    onClick={(e) => tabswitch(index)}
                  >
                    <div className={`${style.btn_content}`}>
                      <span>{item}</span>
                    </div>
                  </button>
                ))}
              </div>
              <p>选择尺码</p>
              <div className={style["rules"]}>
                {rule.map((item: any, index: any) => (
                  <button
                    key={index}
                    disabled={index === 1}
                    className={`${style.rule_btn} ${index === rules ? style.rulesActive : ""
                      } ${index === 1 ? style.disabled : ""}`}
                    onClick={(e) => ruleSwitch(index)}
                  >
                    <div>
                      <span>{item}</span>
                    </div>
                  </button>
                ))}
              </div>
              <p>库存: {stocks[colorActive]}</p>

              {/* <div>{contextHolder}</div> */}
              <div className={style["number"]}>
                <div className={style["cell"]}>
                  <div className={style["label"]}>
                    <span>购买数量:</span>
                  </div>
                  <div className={style["value"]}>
                    <div className={style["body"]}>
                      <div className={style["custom"]}>
                        <div className={style["stepper"]}>
                          <button
                            disabled={inputValue === 1 ? true : false}
                            className={style["minus"]}
                            onClick={(e) => reduce()}
                          >
                            -
                          </button>
                          <Input value={inputValue} max={stocks[colorActive]} />
                          {/* <input type="text" value={inputValue} /> */}
                          <button
                            disabled={
                              inputValue === stocks[colorActive] ? true : false
                            }
                            className={style["plus"]}
                            onClick={(e) => add()}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={style["sub"]}>
                <button onClick={(e) => goOrder()}>
                  <div className={style["content"]}>
                    <span>立即购买 现在购买仅需0元</span>
                  </div>
                </button>
              </div>
            </div>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Details;
