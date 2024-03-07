import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/FilterProducts.css";

const ProductFilter = ({ products }) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredProducts = products.filter((product) => {
    if (selectedBrand && product.brand !== selectedBrand) {
      return false;
    }
    if (selectedCategory && product.category !== selectedCategory) {
      return false;
    }
    return true;
  });

  return (
    <div className='filter-products'>
      <h2 className='header-text'>
        Filter Products based on <span>Category/Brand</span>
      </h2>
      <div>
        <label htmlFor='brand'>Select Brand: </label>
        <select
          id='brand'
          onChange={(e) => setSelectedBrand(e.target.value)}
          value={selectedBrand}
        >
          <option value=''>All Brands</option>
          {Array.from(new Set(products.map((product) => product.brand))).map(
            (brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            )
          )}
        </select>
      </div>
      <div>
        <label htmlFor='category'>Select Category: </label>
        <select
          id='category'
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value=''>All Categories</option>
          {Array.from(new Set(products.map((product) => product.category))).map(
            (category) => (
              <option key={category} value={category}>
                {category}
              </option>
            )
          )}
        </select>
      </div>
      <div>
        <h3>Filtered Products</h3>
        {filteredProducts.length > 0 ? (
          <div className='product-list'>
            {filteredProducts.map((product) => (
              <div key={product.id} className='product'>
                <Link to={`/products/${product.id}`}>
                  <img src={product.thumbnail} alt={product.title} />
                  <h4>{product.title}</h4>
                </Link>
              </div>
            ))}
          </div>
        ) : (
          <div className='not-found'>
            <h3>No Products Found</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductFilter;
