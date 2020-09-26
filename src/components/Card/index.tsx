import React from "react";
import { ReactComponent as BuyBlue } from "../../assets/icons/buy-blue.svg";
import { ReactComponent as Coin } from "../../assets/icons/coin.svg";

import PillButton from "../PillButton";

const Card = () => {
  return (
    <div className="max-w-sm rounded shadow-2xl bg-white divide-y divide-gray-400 h-auto m-2 border-gray-400 px-6 relative">
      <figure className="px-2 py-4 card-image">
        <BuyBlue className="absolute right-0 mr-4" />
        <figcaption className="w-1/2 p-0 absolute right-0 mr-4">
          <PillButton styles="w-auto bg-gray-900 bg-opacity-50 border-none">
            <span className="text-sm mr-2 text-white">You need 8000</span>
            <Coin />
          </PillButton>
        </figcaption>
        <img
          className="w-full mx-auto h-full"
          src="https://picsum.photos/100"
          alt="Sunset in the mountains"
        />
      </figure>
      <div className="py-4">
        <div className="font-bold text-base mb-2 text-gray-500">Phones</div>
        <p className="text-gray-600 text-xl font-bold">Iphone 8</p>
      </div>
    </div>
  );
};

export default Card;
