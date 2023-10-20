import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

export const API_URL = `https://api.unsplash.com/search/photos?page=1&client_id=${process.env.REACT_APP_ACCESS_KEY}`;

const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("cars");
  const [toggle, setToggle] = useState(true);

  // fetching data from unsplash api

  const getImages = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setIsLoading(false);
      setImages(data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const timerOut = setTimeout(() => {
      getImages(`${API_URL}&query=${query}`);
    }, 500);

    return () => {
      clearTimeout(timerOut);
    };
  }, [query]);

  return (
    <AppContext.Provider value={{ isLoading, images, query, setQuery,toggle, setToggle}}>
      {children}
    </AppContext.Provider>
  );
};

// custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
