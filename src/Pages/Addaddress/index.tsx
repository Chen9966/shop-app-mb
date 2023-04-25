import React, { useEffect, useState } from "react";
import styles from "./index.module.css";
import { useNavigate, useLocation } from "react-router-dom";
import { LeftOutlined, ShoppingFilled, DeleteFilled } from "@ant-design/icons";
import { delAddress, getAddressList ,defaultAddress} from "@/api/address";
import { Dialog } from "antd-mobile";

const index: React.FC = () => {
  const location = useLocation();
  const push = useNavigate();
  let [userAddress, setUserAddress] = useState([
    {
      id: 30,
      name: "漠视",
      tel: "17760727725",
      address: "天津市 天津市 河东区 幸福花园一号楼",
    },
  ]);

  useEffect(() => {
    const id1 = localStorage.getItem("customer_id");
    getAddressList({ customer_id: id1 }).then((res) => {
      let { data } = res;
      setUserAddress(data);
    });
  }, []);

  const backlf = () => {
    push(-1);
  };
  const addAddress = () => {
    push("/selectaddres");
  };
 
  const toOrder = (item: any) => {
    if(location.state){
      const pathname = location.state.pathname
      if(pathname === '/entorder'){
         defaultAddress({id:item.id,
          prime:true,
          customer_id:item.customer_id
        })
        push("/entorder");
      }else{
        console.log(item);
      }
    }else{
      console.log(item);
      
    }
    
   
  };
  const delBtn = async (item: number) => {
    let res: any = await delAddress({ id: item });
    let { message } = res;
    Dialog.alert({
      content: message,
      onConfirm: () => {
        console.log(message);
      },
    });
    setUserAddress(userAddress);
  };

  return (
    <div className={styles.addAddress}>
      <div className={styles.searchTop}>
        <LeftOutlined onClick={() => backlf()} />
        <span className={styles.text}>添加地址</span>
      </div>
      <div className={styles.writeAdd}>
        <div>
          <ul className={styles.addInfo}>
            {userAddress ? (
              userAddress.map((item: any, index: any) => (
                <li key={index}>
                  <div onClick={() => toOrder(item)}>
                    <p className={styles.pp1}>
                      <span className={styles.sp1}>{item.name}</span>
                      <span className={styles.sp1}>{item.tel}</span>
                    </p>
                    <span className={styles.sp2}>{item.address}</span>
                  </div>

                  <div className={styles.icon}>
                    <ShoppingFilled />
                    <DeleteFilled onClick={() => delBtn(item.id)} />
                  </div>
                </li>
              ))
            ) : (
              <div></div>
            )}
          </ul>
        </div>
        <div className={styles.addBtn} onClick={() => addAddress()}>
          <h1>添加新地址</h1>
        </div>
      </div>
    </div>
  );
};

export default index;
