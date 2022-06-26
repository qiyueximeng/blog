import styles from "./toptip.module.css";

export default function TopTip({ children, className = "", tip }) {
  return (
    <div className={`${styles.container} ${className}`}>
      <div className={styles.content}>{children}</div>
      <div className={styles.tip}>{tip}</div>
    </div>
  );
}
