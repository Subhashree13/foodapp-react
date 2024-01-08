import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, sla, cuisines, locality } =
    resData;
  return (
    <div className="res-card">
      <div className="res-img-wrapper">
        <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
      </div>
      <h3 className="res-name">{name}</h3>
      <div className="res-info">
        <span className="res-rating">{avgRating}⭐️</span>
        <span className="res-ETA">{sla?.slaString}</span>
      </div>
      <h5 className="res-cusines">{cuisines.join(", ")}</h5>
      <h5 className="res-location">{locality}</h5>
    </div>
  );
};

export default RestaurantCard;
