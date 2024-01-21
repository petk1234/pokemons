import { Link } from "react-router-dom";
import styles from "./styles.module.scss";

const ReturnButton = () => {
  return (
    <Link to="/" className={styles.return}>
      Return back
    </Link>
  );
};

export default ReturnButton;
