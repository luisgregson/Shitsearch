import * as React from "react";

const Fragment = React.Fragment;

interface ISearchProps {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  clearSearch: () => void;
}

const Search: React.FunctionComponent<ISearchProps> = ({
  onSearch,
  clearSearch
}) => (
  <Fragment>
    <label>
      Search by id:
      <input onChange={onSearch} />
    </label>
    <button onClick={clearSearch}>Clear</button>
  </Fragment>
);

export default Search;
