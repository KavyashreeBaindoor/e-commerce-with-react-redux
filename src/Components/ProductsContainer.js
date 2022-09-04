import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ProductList from "./ProductList";

import { useEffect } from "react";
import { fetchprod } from "../redux/actions/product";

const ProductsContainer = () => {
  const prod = useSelector((state) => {
    return state.productsall.products;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchprod());
  }, []);
  return (
    <>
      {/* no need to pass a prop-- can use useselector in indicidualproduct to access */}
      <ProductList />
    </>
  );
};

export default ProductsContainer;
