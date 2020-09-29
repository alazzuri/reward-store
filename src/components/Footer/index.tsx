//REACT
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full pb-5 text-gray-700">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative pt-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p>
            Codeado con
            <span className="mx-1">
              <i className="fas fa-heart transform hover:scale-110 cursor-pointer"></i>
            </span>
            por Alexis Lazzuri
          </p>

          <a
            href="https://github.com/alazzuri"
            target="_blank"
            rel="noopener noreferrer"
            className="github mt-3 md:mt-0"
          >
            <i className="fab fa-github-alt fa-lg transform hover:scale-110"></i>
            github.com/alazzuri
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
