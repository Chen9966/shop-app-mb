import React, { useState } from "react";
import styles from "./index.module.css";
import {
  LeftOutlined,
  RightOutlined,
  EnvironmentFilled,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Cascader, Drawer, Space, Button, Switch, QRCode } from "antd";
import { addAddress,defaultAddress } from "@/api/address";
import cityData from "@/assets/area/area";
import { Dialog } from "antd-mobile";

const indeex: React.FC = () => {
  const [username, setUsername] = useState("");
  const [tel, setTel] = useState("");
  const [address, setAddress] = useState("");
  const [xiAddress, setXiAddress] = useState("");
  const [open, setOpen] = useState(false);
  const [flag, setFlag] = useState(false);
  const [switchs, setSwitchs] = useState(false);
  let id2 = Number(localStorage.getItem("customer_id"))
  let id1 = Math.floor(Math.random() * 10000);

  // console.log(store.getState());
  const datas = {
    id: id1,
    customer_id: id2,
    name: username,
    tel: tel,
    address: address + " " + xiAddress,
    prime: switchs,
  };
  const push = useNavigate();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const onChange = (value: any, item: any) => {
    let res = "";
    for (let i = 0; i < item.length; i++) {
      res += item[i].text + " ";
    }
    setAddress(res);
  };
  const onChangeSwicht = async (checked: boolean) => {
    setSwitchs(checked);
    let res = await defaultAddress({
      id:datas.id,
      prime:datas.prime,
      customer_id:datas.customer_id
    })
 
    
  };
  const baocun = async () => {
    let res: any = await addAddress(datas);
    let { message } = res;
    Dialog.alert({
      content: message,
      onConfirm: () => {
        console.log(message);
      },
    });
    push("/addaddress")
  };
  const onFlage = () => {
    if (flag) {
      setFlag(false);
    } else {
      return;
    }
  };
  const backlf = () => {
    push(-1);
  };

  return (
    <div className={styles.addAddress} onClick={() => onFlage()}>
      <div className={styles.searchTop}>
        <LeftOutlined onClick={() => backlf()} />
        <span className={styles.text}>添加地址</span>
      </div>

      <div className={styles.addMain}>
        <div className={styles.tips}>
          <p>为提高配送时效，请您尽量准确填写四级地址。</p>
        </div>
        <div className={styles.info}>
          <div>
            <label htmlFor="">姓名</label>
            <input
              type="text"
              value={username}
              placeholder="收货人姓名"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </div>
          <div>
            <label htmlFor="">电话</label>
            <input
              type="text"
              value={tel}
              placeholder="收货人手机号"
              onChange={(e) => {
                setTel(e.target.value);
              }}
            />
          </div>
          <div onClick={() => showDrawer()}>
            <label>地区</label>
            <input
              type="text"
              value={address}
              onChange={(e) => {
                e.target.value = address;
              }}
              placeholder="选择省/市/区"
            />
            <RightOutlined />
          </div>
          <div
            onClick={() => {
              setFlag(true);
            }}
          >
            <label>详细地址</label>
            <input
              type="text"
              value={xiAddress}
              onChange={(e) => {
                setXiAddress(e.target.value);
              }}
              placeholder="街道门牌,楼层房间号等信息"
            />
          </div>
        </div>
        <div className={styles.bot}>
          {flag ? (
            <div
              className={styles.show}
              onClick={() => {
                setFlag(false);
              }}
            >
              <EnvironmentFilled /> <span>{xiAddress}</span>
            </div>
          ) : (
            <div>
              <div className={styles.switchs}>
                <span className={styles.sps}>设为默认地址收获地址</span>
                <Switch onChange={onChangeSwicht} />
              </div>
              <div className={styles.btnbox}>
                <button className={styles.btnbao} onClick={() => baocun()}>
                  保存
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 地址选择抽屉 */}
      <Drawer
        title={address}
        placement="bottom"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>取消</Button>
            <Button type="primary" onClick={onClose}>
              确认
            </Button>
          </Space>
        }
      >
        <Cascader
          fieldNames={{
            label: "text",
            value: "value",
            children: "children",
          }}
          options={cityData}
          onChange={onChange}
        />
      </Drawer>
    </div>
  );
};

export default indeex;
