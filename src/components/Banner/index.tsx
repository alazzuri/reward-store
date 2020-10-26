//REACT
import React from "react";

const Banner: React.FC<{
  imgSrc: string;
  srcSet?: string;
  title: string;
}> = ({ imgSrc, srcSet = "", title }) => {
  return (
    <div className="w-full banner relative flex items-end">
      <img
        src={imgSrc}
        srcSet={srcSet}
        alt="banner"
        className="w-full absolute z-0"
      />
      <h1 className="text-4xl md:text-6xl text-gray-100 font-bold z-50 mb-10 md:ml-40 ml-16">
        {title}
      </h1>
    </div>
  );
};

export default Banner;
