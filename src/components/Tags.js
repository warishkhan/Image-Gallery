import React from "react";
import { useGlobalContext } from "../context/context";
import "./Tags.css";

const Tags = ({ images }) => {
  const { query } = useGlobalContext();
  return (
    <>
    <div className="header">
      <p>{query}</p>
      <div className="header-btn">
        {images.map((image, index) => {
          return <button key={index}>{`${image.tags[0].title}`}</button>;
        })}
      </div>
    </div>
    </>
  );
};

export default Tags;
