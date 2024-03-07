import React, { useState, useEffect } from "react";
import FilterProducts from "../components/FilterProducts";
import { BallTriangle } from "react-loader-spinner";
import "../styles/Home.css";
const API_URL = "https://dummyjson.com/products";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApiData = async (URL) => {
    setLoading(true);
    try {
      const response = await fetch(URL);
      if (!response.ok) {
        throw new Error("Failed to fatch data");
      }
      const responseData = await response.json();
      setData(responseData.products);
      setLoading(false);
    } catch (error) {
      console.log("Error message", error.message);
    }
  };

  useEffect(() => {
    fetchApiData(API_URL);
  }, []);

  return (
    <div className='home'>
      {loading ? (
        <div className='products-loader-container'>
          <BallTriangle
            type='BallTriangle'
            color='#E48F1E'
            height='100'
            width='100'
          />
        </div>
      ) : (
        <FilterProducts products={data} />
      )}
    </div>
  );
};

export default Home;
