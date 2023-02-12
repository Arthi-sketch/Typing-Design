import { useRouter } from "next/router";
import styles from "./button.module.css";

export default function Button(props) {
  const router = useRouter();

  function navigate() {
    if (props.radius === "O") {
      localStorage.setItem("status", false);
      router.push("/");
    }
  }

  return (
    <div className={styles.button} onClick={navigate}>
      <button
        className={`${styles.buttonpushable} ${styles[props.radius]}`}
        role="button"
      >
        <span
          className={`${styles.buttonshadow} ${styles[props.radius]}`}
        ></span>
        <span className={`${styles.buttonedge} ${styles[props.radius]}`}></span>
        <span className={`${styles.buttonfront} ${styles[props.radius]}`}>
          <div className={styles.score}>{props.score}</div>
          <div className={styles.title}>{props.title}</div>
        </span>
      </button>
    </div>
  );
}
