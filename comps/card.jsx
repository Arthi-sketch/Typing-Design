import styles from "../styles/Home.module.css";

export default function Card({children, location}) {
  return (
    <div className={styles.main}>
      
        <div className={styles.grid}>
          <div className={styles.card + " " + (location==="pop" ? styles.noborder : styles.border) } >
            {/* {console.log(location, location==="pop" ? "noborder" : "border")} */}
            {children}
          </div>
        </div>
      
    </div>
  );
}
