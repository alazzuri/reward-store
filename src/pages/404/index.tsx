//REACT
import React from "react";
import { Link } from "react-router-dom";

//ASSETS
import NotFoundImage from "../../assets/images/404.png";

const NotFoundPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-300 flex flex-col justify-center items-center">
      <p className="text-4xl mb-4 text-gray-800">Not Found</p>
      <img src={NotFoundImage} alt="not-found" className="w-1/4" />
      <Link
        to="/"
        className="rounded-full border p-2 mt-4 border-gray-600 text-gray-800 hover:text-gray-600"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
