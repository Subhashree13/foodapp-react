import { useState } from "react";
const SearchBar = ({ resInfo }) => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFiltredData] = useState();
  const handleInputValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    r;
  };
  return (
    <div className="search-wrapper">
      <input type="text" value={searchValue} onChange={handleInputValue} />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;
