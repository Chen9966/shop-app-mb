import React, { useState } from "react";
import styles from "./orderDiscount.module.css";
import { Button, Card, Drawer, Input, Radio } from "antd";



const index: React.FC = () => {
  let [count, setCount] = useState(1);
  let [flag, setFlag] = useState(false);
  let [daima, setDaima] = useState("");
  let [disabl, setDisable] = useState(true);
  const [activeTabKey2, setActiveTabKey2] = useState<string>("oks");



  let [coupon,setCoupon] = useState([
    {
      available: 1,
      condition: "无使用门槛\n最多优惠12元",
      reason: "",
      value: 150,
      name: "优惠券名称",
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: "1.5",
      unitDesc: "元",
    },
  ])
  let [coupon1,setCoupon1] = useState([
    {
      available: 1,
      condition: "无使用门槛\n最多优惠12元",
      reason: "",
      value: 150,
      name: "优惠券名称",
      startAt: 1489104000,
      endAt: 1514592000,
      valueDesc: "1.5",
      unitDesc: "元",
    },
  ])
  const contentListNoTitle: Record<string, React.ReactNode> = {
    oks: (
      <ul className={styles.boxList}>
         { coupon.map((item,index)=>(
          <li className={styles.liList} key={index}>
          <p>
            <span className={styles.sp1}>{item.valueDesc}{item.unitDesc}</span>
            <br />
            <span className={styles.sp2}>{item.condition}</span>
          </p>
          <div className={styles.pp}>
            <p className={styles.pp1}>{item.name}</p>
            <p className={styles.pp2}>{item.startAt}-{item.endAt}</p>
          </div>
          <div >
            <Radio value={index}/>
          </div>
        </li>
         ))}
        
      </ul>
    ),
    offs: <ul className={styles.boxList}>
    { coupon1.map((item,index)=>(
     
     <li className={styles.liList} key={index}>
     <p>
       <span className={styles.sp1}>{item.valueDesc}{item.unitDesc}</span>
       <br />
       <span className={styles.sp2}>{item.condition}</span>
     </p>
     <div className={styles.pp}>
       <p className={styles.pp1}>{item.name}</p>
       <p className={styles.pp2}>{item.startAt}-{item.endAt}</p>
     </div>
     <div >
       <Radio value={index}/>
     </div>
       </li>
     )) 
    }
      </ul>,
  };





  const tabListNoTitle = [
    {
      key: "oks",
      tab: `可用的(${count})`,
    },
    {
      key: "offs",
      tab: `不可用的(1)`,
    },
  ];

  const offs =()=>{
    setFlag(false)
  }
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  const onClose = () => {
    setFlag(false);
  };
  const inpChange = (item: any) => {
    setDaima(item.target.value);
    setDisable(false);
  };
  const duiHuan = () => {
    setCount(count+1)
    coupon.push(coupon[0])
    setCoupon(coupon)
  };
  const isShow = () => {
    setFlag(true);
  };

  return (
    <div>
      <ul className={styles.discount}>
        <li className={styles.youhui} onClick={() => isShow()}>
          <p>优惠券</p>
          <p className={styles.sp1}>{count}张可用 &gt;</p>
        </li>
        <li>
          <p>
            闪电值<span className={styles.shandian}>共有0⚡值，满100可用</span>
          </p>
        </li>
      </ul>

      <div>
        <Drawer
          title={
            <div>
              <Input
                placeholder="请输入优惠码"
                value={daima}
                className={styles.inpt}
                bordered={false}
                onChange={(e) => inpChange(e)}
              />
              <Button danger disabled={disabl} onClick={() => duiHuan()}>
                兑换
              </Button>
            </div>
          }
          size="large"
          placement={"bottom"}
          width={500}
          bodyStyle={{ backgroundColor: "#F7F8FA" }}
          closable={false}
          onClose={onClose}
          open={flag}
        >
          <div>
            <Card
              tabList={tabListNoTitle}
              bordered={false}
              activeTabKey={activeTabKey2}
              onTabChange={onTab2Change}
            >
              {contentListNoTitle[activeTabKey2]}
            </Card>
          </div>
          <div className={styles.bot}>
          <button className={styles.botbtn} onClick={()=>offs()}>不适用优惠券</button>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default index;
