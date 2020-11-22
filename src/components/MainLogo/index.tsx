//REACT
import React from "react";

//ROUTER
import { Link } from "react-router-dom";

const MainLogo: React.FC<{
  logoSrc: string;
  title?: string;
  styles?: string;
  link?: string;
}> = ({ logoSrc, title = "", styles = "", link = "/" }) => {
  return (
    <>
      <Link to={link} className="flex items-center justify-start w-1/4 md:w-64">
        <img
          className={`h-8 w-auto sm:h-10 ${styles}`}
          src={logoSrc}
          alt="Logo"
        />
        <span className="text-2xl text-gray-900 ml-4 hidden md:block w-auto">
          {title}
        </span>
      </Link>
    </>
  );
};

export default MainLogo;
