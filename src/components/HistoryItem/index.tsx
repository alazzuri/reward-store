//REACT
import React from "react";

//ASSETS
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//TYPESCRIPT
import { HistoryItemProps } from "../../types/history";

const HistoryItem: React.FC<HistoryItemProps> = ({
  name,
  category,
  date,
  imgSrc,
  cost,
}) => {
  return (
    <div className="md:w-3/4 mx-auto flex items-center justify-between rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-4 md:px-8 py-3 text-gray-700 font-bold my-3">
      <img
        src={imgSrc}
        alt={`product-${name}`}
        className="rounded-full w-1/6 md:w-auto md:h-20"
      />
      <p className="flex flex-col text-sm md:text-base">
        <span>{name}</span>
        <span className="text-gray-600">{category}</span>
      </p>
      <p className="text-sm md:text-base">{date}</p>
      <p className="text-red-600 flex items-center text-sm md:text-base">
        <span className="mr-3">{cost.toLocaleString()}</span>
        <Coin />
      </p>
    </div>
  );
};

export default HistoryItem;
