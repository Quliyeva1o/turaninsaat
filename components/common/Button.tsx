// components/common/Button/index.tsx
import Link from "next/link";
import styles from "./index.module.css";
import RightIco from "@/public/assets/icons/rightIco";

const Button = ({ text, type, link }: any) => {
  return (
    <div
      className={`${styles.btn} ${
        type === 1
          ? styles.primary
          : type === 2
          ? styles.solid
          : type === 3
          ? styles.outline
          : styles.ghost
      }`}
    >
      <Link href={link}>{text}</Link>
      {type !== 5 && <RightIco />}
    </div>
  );
};

export default Button;