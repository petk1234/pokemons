export interface Props {
  handleSearch: (value: string) => () => void;
  options: string[];
  value: string;
}
