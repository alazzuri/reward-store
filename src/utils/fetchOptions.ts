import { API_TOKEN } from "../constants/api";

export const getDefaultHeaders = () => {
  const headers = new Headers();
  headers.append("Authorization", API_TOKEN);

  return headers;
};

export const getPostHeaders = () => {
  const headers = new Headers();
  headers.append("Authorization", API_TOKEN);
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");

  return headers;
};

export const createFetchBody = (data: any) => JSON.stringify(data);
