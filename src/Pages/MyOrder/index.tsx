import React from "react";
import styles from "./myOrder.module.css";
import ToNav from "./children/toNavs/ToNavs";
import lingdang from '@/assets/usercard/lingdang.png';
import OrderTab from './children/tabCard/OrderTab'



const index: React.FC = () => {

  return (
    <div className={styles.MyOrder}>
      <div>
        <ToNav title="我的订单" />
      </div>
      <div className={styles.warning}>
        <img src={lingdang} alt="" />
        <span>关于防诈骗的重要提醒：我们不会以任何理由要求您退货退款，请您提高警惕。</span>
      </div>
      <div>
      <OrderTab />
      </div>

    </div>
  );
};

export default index;
