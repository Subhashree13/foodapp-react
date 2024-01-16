import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ResCardSkeleton from "./ResCardSkeleton";
//until and unless you get the result from the API show a skeleton loader for that use Shimmer UI
const MainContent = () => {
  const [resList, setResList] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFiltredData] = useState([]);
  const handleInputValue = (e) => {
    setSearchValue(e.target.value);
  };
  const handleSearch = () => {
    const filteredValue = resList.filter((res) =>
      res.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFiltredData(filteredValue);
  };
  const handleFilter = () => {
    setFiltredData(resList.filter((r) => r.info.avgRating > 4));
  };
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.948106&lng=77.703128&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await result.json();
    //optional chaining
    setResList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFiltredData(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering
  // if (resList.length === 0) {
  //   return <ResCardSkeleton />;
  // }
  return filteredData.length === 0 ? (
    <ResCardSkeleton />
  ) : (
    <div className="main-content">
      <div className="filter">
        <div className="search-wrapper">
          <input type="text" value={searchValue} onChange={handleInputValue} />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-wrapper">
        {filteredData.map((res) => (
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
