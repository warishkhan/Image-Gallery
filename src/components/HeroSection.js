import React from "react";
import "./HeroSection.css";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context/context";
import { AiOutlineClose } from "react-icons/ai";

const HeroSection = ({ setToggle }) => {
  const { query, setQuery } = useGlobalContext();
  return (
    <>
      <div className="hero-container">
        <p className="text-center">Download High Quality Images by creators</p>
        <p className="small-text">
          Over 2.4 million+ stock Images by our talented community
        </p>
        <div className="hero-search">
          <FaSearch />
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              value={query}
              placeholder="Search high resolution Images,categories,wallpapers"
              onChange={(e) => setQuery(e.target.value)}
              onClick={() => setToggle(false)}
            />
          </form>
          <AiOutlineClose
            style={{ marginRight: "5px" }}
            onClick={() => setQuery("")}
          />
        </div>
        <div className="gallery-container"></div>
      </div>
    </>
  );
};

export default HeroSection;
