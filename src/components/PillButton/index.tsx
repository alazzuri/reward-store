import React from "react";

const PillButton: React.FC<{ onHandleClick?: () => void; styles?: string }> = ({
  children,
  onHandleClick = () => {},
  styles = "",
}) => {
  return (
    <span className="rounded-md w-full">
      <button
        type="button"
        className={`inline-flex justify-center items-center w-11/12 md:w-full rounded-full py-2 px-4 border border-gray-300 bg-gray-200 leading-5 font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800 transition ease-in-out duration-150 ${styles}`}
        onClick={onHandleClick}
      >
        {children}
      </button>
    </span>
  );
};

export default PillButton;
