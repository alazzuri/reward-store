//REACT
import React from "react";

//ROUTER
import { Link } from "react-router-dom";

const MainLogo: React.FC<{
  logoSrc: string;
  styles?: string;
  link?: string;
}> = ({ logoSrc, styles = "", link = "/" }) => {
  return (
    <>
      <Link to={link}>
        <img
          className={`h-8 w-auto sm:h-10 ${styles}`}
          src={logoSrc}
          alt="Logo"
        />
      </Link>
    </>
  );
};

export default MainLogo;
