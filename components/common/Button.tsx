import Link from "next/link";
import styles from "./index.module.css";
import RightIco from "@/public/assets/icons/rightIco";

const Button = ({ text, type, link}: any) => {
  return (
    <div className={`${styles.btn} ${type==1?styles.maviag: type==2? styles.goy: type==3? styles.xett: styles.ag}`}>
      <Link href={link} >
        {text}
      </Link>
      {type!==1 && <RightIco/>}
    </div>
  );
};

export default Button;
