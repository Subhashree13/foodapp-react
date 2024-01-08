import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resArray from "../utils/mockData";

const MainContent = () => {
  const [resList, setResList] = useState(resArray);
  const handleFilter = () => {
    setResList(resList.filter((r) => r.avgRating > 4));
  };
  return (
    <div className="main-content">
      <div className="filter">
        <button className="filter-btn" onClick={handleFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-wrapper">
        {resList.map((res) => (
          <RestaurantCard resData={res} key={res.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
