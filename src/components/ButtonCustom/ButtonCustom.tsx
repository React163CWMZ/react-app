import styles from "./ButtonCustom.module.css";

function ButtonCustom() {
  return (
    <div className={[styles.btn, styles.btnPrimary].join(" ")}>
      ButtonCustom
    </div>
  );
}

export default ButtonCustom;
