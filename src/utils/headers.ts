import { API_TOKEN } from "../constants/api";

export const getDefaultHeaders = () => {
  const headers = new Headers();
  headers.append("Authorization", API_TOKEN);

  return headers;
};
