import React from "react";
import HeroSection from "./HeroSection";
import { useGlobalContext } from "../context/context";
import "./GalleryPage.css";
import Tags from "./Tags";
import Loading from "./Loading";
import Cards from "./Cards";
import PageNotFound from "./PageNotFound";

const GalleryPage = () => {
  const { images, isLoading, toggle, setToggle,query } = useGlobalContext();

  if (isLoading) {
    return <Loading />;
  }else if(!query || !images.length){
    return <PageNotFound/>
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
