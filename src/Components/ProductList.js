import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductList = () => {
  const prod = useSelector((state) => {
    return state.productsall.products;
  });

  console.log(prod);
  return (
    <>
      <div className="container">
        <div className="row">
          {prod.map((item) => {
            const { id, title, image, price, category } = item;
            return (
              <>
                <div className="col-4" key={id}>
                  <div className="card">
                    <img src={image} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{title}</h5>
                      <p className="card-text">Rs.{price}</p>
                      <p className="card-text">{category}</p>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ProductList;
