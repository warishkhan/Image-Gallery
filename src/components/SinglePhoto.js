import React, { useEffect, useState } from "react";
import { Link, NavLink, useParams } from "react-router-dom";
import "./SinglePhoto.css";
import {
  SlShare,
  SlInfo,
  SlSocialInstagram,
  SlSocialTwitter,
  SlLike,
} from "react-icons/sl";
import Loading from "./Loading";
import { AiOutlineClose } from "react-icons/ai";

const API_URL = `https://api.unsplash.com/photos`;

const SinglePhoto = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [image, setImage] = useState("");

  const getImages = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json();

      setIsLoading(false);
      setImage(data);
      console.log(data);
    } catch (error) {
      console.log({ error: "data not found" });
    }
  };
  useEffect(() => {
    const timerOut = setTimeout(() => {
      getImages(
        `${API_URL}/${id}?client_id=${process.env.REACT_APP_ACCESS_KEY}`
      );
    }, 500);

    return () => clearTimeout(timerOut);
  }, [id]);

  if (isLoading) {
    return <Loading />;
  }

  function kFormatter(num) {
    return Math.abs(num) > 999
      ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
      : Math.sign(num) * Math.abs(num);
  }

  return (
    <>
      <div className="singlePhoto">
        <NavLink to="/" style={{ textDecoration: "none" }} className="back-btn">
          <AiOutlineClose size={25} />
        </NavLink>
        <img src={image.urls.raw} alt="" />
        <div className="share-Download">
          <div className="details">
            <Link style={{ textDecoration: "none" }} className="share-btn">
              <SlShare />
              <p>share</p>
            </Link>
            <Link style={{ textDecoration: "none" }} className="share-btn">
              <SlInfo />
              <p>info</p>
            </Link>
          </div>
          <button className="btn">Download Image</button>
        </div>
        <div className="user-info">
          <div className="user-socials">
            <div className="user-profile">
              <img src={image.user.profile_image.small} alt="" />
              <div className="profile-names">
                <p>{image.user.name}</p>
                <p>{`@${image.user.username}`}</p>
              </div>
              <div className="social-id">
                <div className="user-id">
                  <SlSocialInstagram />
                  <p>{`/${image.user.username}`}</p>
                </div>
                <div className="user-id">
                  <SlSocialTwitter />
                  <p>{`/${image.user.username}`}</p>
                </div>
              </div>
            </div>
            <div className="user-downloads">
              <div className="downloads">
                <p>
                  <span>{kFormatter(image.downloads)} </span>downloads
                </p>
              </div>
              <div className="likes">
                <p>
                  <SlLike /> <span>{kFormatter(image.likes)} </span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <p className="rel-tags">Related Tags</p>
          <div className="tags">
            {image?.tags?.map((tag, index) => (
              <button className="tag-btn" key={index}>
                {tag.title}
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePhoto;
