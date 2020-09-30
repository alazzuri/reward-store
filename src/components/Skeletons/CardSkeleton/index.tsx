//REACT
import React from "react";

//COMPONENTS
import Skeleton from "react-loading-skeleton";

const CardSkeleton: React.FC = () => (
  <div className="max-w-sm rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-6 relative cursor-pointer transition-all duration-100 product-card">
    <div className="py-4">
      <Skeleton height={250} />
    </div>
    <div className="py-4 border-t-2 border-gray-400">
      <Skeleton width={100} />
      <p className="mt-2">
        <Skeleton width={130} />
      </p>
    </div>
  </div>
);

export default CardSkeleton;
