import React, { useState, useEffect } from "react";
import FilterProducts from "../components/FilterProducts";
import { BallTriangle } from "react-loader-spinner";
import axios from "axios";
import "../styles/Home.css";
const API_URL = "https://dummyjson.com/products";

const Home = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchApiData = async (URL) => {
    setLoading(true);
    try {
      const response = await axios.get(URL);

      setData(response.data.products);
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
