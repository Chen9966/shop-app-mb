import React, { useState } from "react";
import styles from "./userTop.module.css";
import touxiang from "../../../assets/usercard/touxiang.png";
import qr from "../../../assets/usercard/qr.png";
import nexts from "../../../assets/usercard/next.png";
import { useNavigate } from "react-router-dom";


interface shuju {
  datas: { 
    email?: string,
    username:string,
    imgs?:string
   }
}
const UserTop: React.FC<shuju> = (props: shuju) => {
  let { datas } = props

  // console.log(datas, '/////');
  let { email, username, imgs } = datas;

  const push = useNavigate();
  const toUserXinxi = () => {
    push("/userxinxi");
  };
  const onQr = () => {
    push('/mycode')
  }


  return (
    <div >
      <div className={styles.top}>
        <div onClick={() => toUserXinxi()} className={styles.xinxi}>
          <div className={styles.leftImgs}>
            <img src={imgs ? imgs : touxiang} alt="" />
          </div>
          <div className={styles.text}>{username ? username : "##"}<br />
            {email ? email : " "}
          </div>
        </div>
        <div className={styles.rightImgs} onClick={() => onQr()}>
          <img src={qr} alt="" />
        </div>
      </div>
      <div className={styles.topbot}>
        <div>
          <span>默认频道</span>
        </div>
        <div>
          <span>主页</span>
          <img src={nexts} alt="" />
        </div>
      </div>

    </div>
  );
};

export default UserTop;
