import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BallTriangle } from "react-loader-spinner";
import StarRateIcon from "@mui/icons-material/StarRate";
import { useCart } from "../context/CartContext";
import axios from "axios";
import "../styles/ProductDetails.css";

const ProductDetails = () => {
  const productId = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addItem } = useCart();

  useEffect(() => {
    const fetchProductApi = async () => {
      try {
        const response = await axios.get(
          `https://dummyjson.com/products/${productId.id}`
        );

        setProduct(response.data);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching data:", error.message);
        setLoading(false);
      }
    };
    fetchProductApi();
  }, [productId]);

  return (
    <>
      {loading ? (
        <div className='loader-container'>
          <BallTriangle
            type='BallTriangle'
            color='#E48F1E'
            height='100'
            width='100'
          />
        </div>
      ) : (
        <div className='product-section'>
          <div className='product-image-section'>
            <img src={product.thumbnail} alt='product-img' />
            <div className='product-images'>
              {product.images.map((eachImg, ind) => (
                <li key={ind}>
                  <img src={eachImg} alt='images' />
                </li>
              ))}
            </div>
          </div>
          <div className='product-details-section'>
            <h1>Product Details</h1>
            <div>
              <h2>
                {product.title} - <span>{product.brand}</span>
              </h2>
              <p>{product.description}</p>
              <p>
                <span>Price: </span>₹{product.price}
              </p>
              <p>
                <span>Rating:</span>
                <span>
                  <StarRateIcon />
                </span>
                {product.rating}
              </p>
            </div>
            <button className='add-cart' onClick={() => addItem(product)}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
