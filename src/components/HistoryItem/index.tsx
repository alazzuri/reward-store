//REACT
import React from "react";

//ASSETS
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

const HistoryItem: React.FC<{
  name: string;
  category: string;
  date: string;
  imgUrl: string;
  cost: number;
}> = ({ name, category, date, imgUrl, cost }) => {
  return (
    <div className="w-full flex items-center justify-evenly rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-3 py-3 text-gray-700 font-bold">
      <img src={imgUrl} alt={`product-${name}`} className="rounded-full h-20" />
      <p className="flex flex-col">
        <span>{name}</span>
        <span className="text-gray-600">{category}</span>
      </p>
      <p>{date}</p>
      <p className="text-red-600 flex items-center">
        <span className="mr-3">{cost.toLocaleString()}</span>
        <Coin />
      </p>
    </div>
  );
};

export default HistoryItem;
