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

//CONSTANTS
import { API_URL } from "../../constants/api";

const ProductsPage = () => {
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
    data,
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

  const [filters, setFilters] = useState<{
    category?: string;
    price?: string;
  }>({});

  const dropdownFilterItems = createFilters(productsCategories);

  const onSelectFilter = (e: any) => {
    const {
      dataset: { itemtype },
      textContent,
    } = e.target;

    setFilters((prevState) => ({ ...prevState, [itemtype]: textContent }));
  };

  const onClearFilters = () => setFilters({});

  const onRedeemProduct = (productId: string) => {
    const body = createFetchBody(productId);
    redeemProduct(`${API_URL}/redeem`, getPostHeaders(), body);
  };

  useEffect(() => {
    if (redeemError) {
      console.error(redeemErrorMessage);
      throw new Error(redeemErrorMessage);
    }
  }, [redeemError]);

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
        filterItems={dropdownFilterItems}
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
