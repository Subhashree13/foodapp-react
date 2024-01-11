import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";

const MainContent = () => {
  const [resList, setResList] = useState([]);
  const handleFilter = () => {
    setResList(resList.filter((r) => r.avgRating > 4));
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
          <RestaurantCard resData={res.info} key={res.info.id} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
