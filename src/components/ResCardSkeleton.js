const ResCardSkeleton = () => {
  return (
    <div className="res-card-skeleton">
      <div className="shimmerBG  res-img-wrapper-skeleton">
        <img className="res-img-skeleton" />
      </div>
      <h3 className="shimmerBG res-name-skeleton"></h3>
      <div className="res-info-skeleton">
        <span className="shimmerBG res-rating-skeleton"></span>
        <span className="shimmerBG res-ETA-skeleton"></span>
      </div>
      <h5 className="shimmerBG res-cusines-skeleton"></h5>
      <h5 className="shimmerBG res-location-skeleton"></h5>
    </div>
  );
};

export default ResCardSkeleton;
