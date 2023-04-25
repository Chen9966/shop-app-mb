import React from "react";
import styles from "./orderPay.module.css";

const index: React.FC = () => {
  return (
    <div className={styles.pay}>
      <ul>
        <li>
          <span>支付方式</span>
          <span>支付宝(仅支持)</span>
        </li>
        <li>
          <span>配送方式</span>
          <span>雷电快送：200⚡值(江浙沪包邮)</span>
        </li>
        <li>
          <span>送货时间</span>
          <span>365days(地球不爆炸我们不放假)</span>
        </li>
      </ul>
    </div>
  );
};

export default index;
