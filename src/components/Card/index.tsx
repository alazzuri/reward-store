import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm rounded shadow-2xl bg-white divide-y divide-gray-400 h-auto m-2 border-gray-400 px-6">
      <figure className="px-2 py-4 card-image">
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
