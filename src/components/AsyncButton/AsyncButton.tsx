import Spinner from "../Spinner/Spinner";
import { Props } from "./types";

const AsyncButton = ({ isLoading, handleClick }: Props) => {
  return isLoading ? <Spinner /> : <button onClick={handleClick}>Load more</button>;
};

export default AsyncButton;
