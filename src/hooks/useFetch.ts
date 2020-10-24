import { useState, useEffect } from "react";
import { HistoryItemProps } from "../types/history";
import { Product } from "../types/products";
import { User } from "../types/user";

const useFetch: (
  url: string,
  headers?: Headers | {}
) => {
  data: any | null;
  isLoading: boolean;
  hasError: boolean;
  errorMessage: string;
  executeFetch: () => void;
} = (url, headers = {}) => {
  const abortController = new AbortController();
  const signal = abortController.signal;
  const [data, setData] = useState<any | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<any>("");
  const [shouldFetch, setShouldFetch] = useState<boolean>(false);

  const executeFetch = () => setShouldFetch(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url, { signal, headers });
        const jsonResponse = await response.json();
        if (response.ok) {
          setData(jsonResponse);
        } else {
          setHasError(true);
          setErrorMessage(jsonResponse);
        }
      } catch (err) {
        setHasError(true);
        setErrorMessage(err.message);
      } finally {
        setIsLoading(false);
        setShouldFetch(false);
      }
    };

    if (shouldFetch) fetchData();

    return () => {
      abortController.abort();
    };
  }, [shouldFetch]);

  return { data, isLoading, hasError, errorMessage, executeFetch };
};

export default useFetch;
