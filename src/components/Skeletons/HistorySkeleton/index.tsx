//REACT
import React from "react";

//COMPONENTS
import Skeleton from "react-loading-skeleton";

const HistorySkeleton: React.FC = () => {
  const MobileView: React.FC = () => (
    <div className="mx-auto flex items-center justify-between rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-8 py-3 text-gray-700 font-bold my-3 md:hidden">
      <Skeleton circle={true} height={50} width={50} />
      <p className="flex flex-col">
        <Skeleton width={90} />
        <Skeleton width={90} />
      </p>
      <Skeleton width={90} />
      <Skeleton width={90} />
    </div>
  );

  const DesktopView: React.FC = () => (
    <div className="w-3/4 mx-auto md:flex items-center justify-between rounded shadow-2xl bg-white h-auto m-2 border-gray-400 px-8 py-3 text-gray-700 font-bold my-3 hidden">
      <Skeleton circle={true} height={80} width={80} />
      <p className="flex flex-col">
        <Skeleton width={120} />
        <Skeleton width={120} />
      </p>
      <Skeleton width={120} />
      <Skeleton width={120} />
    </div>
  );

  return (
    <>
      <DesktopView />
      <MobileView />
    </>
  );
};

export default HistorySkeleton;
