import styles from "./select.module.scss";
import { useState } from "react";
import { Props } from "./types";
import { ALL_TYPE } from "../../store/pokemons/reducer";

const Select = ({ handleSearch, options, value }: Props) => {
  const [activeType, setActiveType] = useState("");

  return (
    <div className={styles.selectWrapper}>
      <select
        value={activeType || value}
        className={styles.typesSelector}
        onChange={(e) => setActiveType(e.target.value)}>
        <option value={ALL_TYPE}>all</option>
        {options.length > 0 &&
          options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
      </select>
      <button className={styles.typeSearch} onClick={handleSearch(activeType)}>
        Find
      </button>
    </div>
  );
};

export default Select;
