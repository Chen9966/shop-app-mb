import React from "react";
import styles from "./ToNav.module.css";
import back from "@/assets/usercard/backs.png";
import { useNavigate} from "react-router-dom";
import SelectMenus from '../menusSelect/SelectMenus'


interface title {
  title:string,
}

const index: React.FC<title>= (props:title) => {
  let {title} = props
  const push = useNavigate();

  const baclk = () => {
    push(-1);
  };


  return (
    <div>
      <div className={styles.topbox}>
        <div onClick={() => baclk()}>
          <img className={styles.back} src={back} alt="" />
        </div>
        <div className={styles.text}>{title}</div>
        <SelectMenus imgs={true}  />
      </div>
    </div>
  );
};

export default index;
