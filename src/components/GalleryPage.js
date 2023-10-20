import React from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "../context/context";
import "./GalleryPage.css";
import Tags from "./Tags";
import Loading from "./Loading";
import Cards from "./Cards";

const GalleryPage = () => {
  const { images, isLoading, toggle, setToggle } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {!toggle ? (
        <Tags images={images} />
      ) : (
        <HeroSection setToggle={setToggle} />
      )}
      <Cards images={images} />
    </>
  );
};

export default GalleryPage;
