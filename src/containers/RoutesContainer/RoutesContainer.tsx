//REACT
import React, { useContext, useEffect } from "react";

//COMPONENTS
import Spinner from "../../components/Spinner";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//ROUTER
import Routes from "../../routes";

//HOOKS
import { useGetFetch } from "../../hooks/useFetch";

//CONSTANTS
import { API_URL } from "../../constants/api";

//UTILS
import { shortenResults } from "../../utils/data";
import { getDefaultHeaders } from "../../utils/fetchOptions";

const RoutesContainer = () => {
  const {
    data: userData,
    isLoading,
    hasError,
    errorMessage,
    executeFetch,
  } = useGetFetch(`${API_URL}/user/me`, getDefaultHeaders());

  const {
    state: { user },
    setState,
  } = useContext(AppContext);

  //Get user information when app loads
  useEffect(() => {
    if (!user) executeFetch();

    if (userData) {
      const sortedData = [...userData.redeemHistory].reverse();
      const shortenedHistory = shortenResults(sortedData);

      const normalizedUserData = {
        ...userData,
        redeemHistory: shortenedHistory,
      };

      setState((prevState: any) => ({
        ...prevState,
        user: normalizedUserData,
      }));
    } else if (hasError) {
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }, [userData, hasError]);

  return isLoading ? <Spinner /> : <Routes />;
};

export default RoutesContainer;
