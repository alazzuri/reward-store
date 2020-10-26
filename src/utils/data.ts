//LIBS
import numeral from "numeral";

export const shortenResults = (results: any) => results.slice(0, 32);

export const formatNumber = (number: number) => {
  if (!+number) return -1;

  return numeral(+number).format("0,0");
};
