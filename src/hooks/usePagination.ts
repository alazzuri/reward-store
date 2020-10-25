import { useState } from "react";

const usePagination: (
  data: any[],
  itemsPerPage: number
) => {
  currentPage: number;
  maxPage: number;
  itemsPerPage: number;
  totalItems: number;
  itemsInPage: number;
  nextPage: () => void;
  prevPage: () => void;
  currentData: () => any[];
} = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / itemsPerPage);
  const totalItems = data.length;
  const itemsInPage = Math.min(itemsPerPage * currentPage, totalItems);

  const nextPage = () =>
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));

  const prevPage = () =>
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };

  return {
    currentPage,
    maxPage,
    itemsPerPage,
    totalItems,
    itemsInPage,
    nextPage,
    prevPage,
    currentData,
  };
};

export default usePagination;
