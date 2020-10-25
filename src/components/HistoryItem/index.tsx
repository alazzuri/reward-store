//REACT
import React from "react";

//ASSETS
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

//TYPESCRIPT
import { HistoryItemProps } from "../../types/history";
import { formatNumber } from "../../utils/data";

//UTILS
import { formatDate } from "../../utils/date";

const HistoryItem: React.FC<HistoryItemProps> = ({
  name,
  category,
  createDate,
  img,
  cost,
}) => {
  return (
    <div className="md:w-3/4 mx-auto flex items-center justify-between rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-4 md:px-8 py-3 text-gray-700 font-bold my-3">
      <img
        src={img.url}
        alt={name}
        className="rounded-full w-1/4 md:w-auto md:h-20"
      />
      <p className="flex w-1/4 flex-col items-start text-xs sm:text-base xl:pl-20">
        <span>{name}</span>
        <span className="text-gray-600">{category}</span>
      </p>
      <p className="w-1/4 sm:text-base flex justify-end text-xs">
        {formatDate(createDate)}
      </p>
      <p className="text-red-600 w-1/4 flex items-center justify-end sm:text-base text-xs">
        <span className="mr-3">{formatNumber(cost)}</span>
        <Coin />
      </p>
    </div>
  );
};

export default HistoryItem;
