import ReturnButton from "../../components/ReturnButton/ReturnButton";
import styles from "./blank.module.scss";

const BlankPage = () => {
  return (
    <>
      <div className={styles.blank}>Pokemon was not found, please try again</div>
      <ReturnButton />
    </>
  );
};

export default BlankPage;
