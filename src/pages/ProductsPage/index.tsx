//REACT
import React, { useContext, useEffect, useState } from "react";

//CONTEXT
import { AppContext } from "../../context/AppContext";

//COMPONENTS
import Banner from "../../components/Banner";
import FilterBar from "../../components/FilterBar";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Pagination from "../../components/Pagination";
import ProductsContainer from "../../containers/ProductsContainer";

//ASSETS
import MainImage from "../../assets/images/header-x1.png";
import MainImage2x from "../../assets/images/header-x2.png";

//HOOKS
import { useGetFetch, usePostFetch } from "../../hooks/useFetch";
import usePagination from "../../hooks/usePagination";

//UTILS
import Swal from "sweetalert2";
import { normalizedProductData } from "../../utils/products";
import {
  createFetchBody,
  getDefaultHeaders,
  getPostHeaders,
} from "../../utils/fetchOptions";
import {
  createFilters,
  getCategories,
  sortByCategory,
  sortByPrice,
} from "../../utils/filters";
import { shortenResults } from "../../utils/data";

//CONSTANTS
import { API_URL } from "../../constants/api";

const ProductsPage = () => {
  const [filters, setFilters] = useState<{
    category?: string;
    price?: string;
  }>({});

  const {
    data: userData,
    hasError: userInfoError,
    errorMessage: userInfoErrorMessage,
    executeFetch: updateUserInformation,
  } = useGetFetch(`${API_URL}/user/me`, getDefaultHeaders());

  const {
    data: productsData,
    hasError,
    errorMessage,
    executeFetch,
  } = useGetFetch(`${API_URL}/products`, getDefaultHeaders());

  const {
    executeFetch: redeemProduct,
    hasError: redeemError,
    errorMessage: redeemErrorMessage,
    data: redeemData,
  } = usePostFetch();

  const {
    state: { products, user, productsCategories, filteredProducts },
    setState,
  } = useContext(AppContext);

  const currentProducts = filteredProducts?.length
    ? filteredProducts
    : products;

  const {
    itemsInPage,
    totalItems,
    currentData,
    nextPage,
    prevPage,
  } = usePagination(currentProducts || [], 16);

  const onSelectFilter = (e: any) => {
    const {
      dataset: { itemtype },
      textContent,
    } = e.target;

    setFilters((prevState) => ({ ...prevState, [itemtype]: textContent }));
  };

  const onClearFilters = () => setFilters({});

  const onRedeemProduct = (productId: string) => {
    const body = createFetchBody({ productId });
    redeemProduct(`${API_URL}/redeem`, getPostHeaders(), body);
  };

  //Get products from API if they dont exist in the state.
  useEffect(() => {
    if (!products) executeFetch();

    if (productsData) {
      const productsCategories = getCategories(productsData);

      setState((prevState: any) => ({
        ...prevState,
        products: normalizedProductData(productsData, user),
        productsCategories,
      }));
    } else if (hasError) {
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
  }, [productsData, hasError]);

  //Updating data based on filters
  useEffect(() => {
    let filteredProducts = products ? [...products] : [];

    if (filters.category) {
      filteredProducts = sortByCategory(filteredProducts, filters.category);
    }

    if (filters.price) {
      filteredProducts = sortByPrice(filteredProducts, filters.price);
    }

    setState((prevState) => ({ ...prevState, filteredProducts }));
  }, [filters]);

  // If a redemption occurs. Update user info and show success notification.
  useEffect(() => {
    if (redeemData) {
      updateUserInformation();
      Swal.fire("Success!", `${redeemData.message}`, "success");
    } else if (redeemError) {
      console.error(redeemErrorMessage);
      Swal.fire(
        "Error",
        `${
          redeemErrorMessage || "An error has ocurred. Please try again later."
        }`,
        "error"
      );
    }
  }, [redeemData, redeemError]);

  //To update user info in the state. It causes the header and history to be
  //updated with the latest redemption

  useEffect(() => {
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
    } else if (userInfoError) {
      console.error(userInfoErrorMessage);
      throw new Error(userInfoErrorMessage);
    }
  }, [userData, userInfoError]);

  return (
    <>
      <Header />
      <Banner
        title="Electronics"
        imgSrc={MainImage}
        srcSet={`${MainImage2x} 2x`}
      />
      <FilterBar
        handleNext={nextPage}
        handlePrev={prevPage}
        maxItems={totalItems}
        currentItems={itemsInPage}
        filterItems={createFilters(productsCategories)}
        handleSelect={onSelectFilter}
        filters={filters}
        handleClear={onClearFilters}
      />
      <ProductsContainer
        products={currentData()}
        onHandleRedeem={onRedeemProduct}
      />
      <Pagination
        onClickNext={nextPage}
        onClickPrev={prevPage}
        maxItems={totalItems}
        currentItems={itemsInPage}
      />
      <Footer />
    </>
  );
};

export default ProductsPage;
