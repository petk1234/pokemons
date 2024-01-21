import { useState } from "react";
import { Props } from "./types";
import styles from "./searchbar.module.scss";

const SearchBar = ({ handleSearch }: Props) => {
  const [search, setSearch] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <input
        className={styles.searchbar}
        placeholder="Search for pokemon..."
        onChange={handleChange}
        onKeyUp={handleSearch(search)}></input>
    </>
  );
};

export default SearchBar;
