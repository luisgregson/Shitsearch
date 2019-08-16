import * as React from "react";

interface SearchBoxProps {
  inputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  refresh: () => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  inputChange,
  refresh
}): JSX.Element => (
  <>
    <label>
      Search by id:
      <input onChange={inputChange} />
    </label>
    <button onClick={refresh}>Clear</button>
  </>
);

export default SearchBox;
