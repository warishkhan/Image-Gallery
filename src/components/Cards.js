import React from 'react'
import { NavLink } from "react-router-dom";
import { SlLike } from "react-icons/sl";

const Cards = ({images}) => {
  return (
    <div className="gallery-container">
        {images.map((images) => {
          const { urls, id, user, likes } = images;

          function kFormatter(num) {
            return Math.abs(num) > 999
              ? Math.sign(num) * (Math.abs(num) / 1000).toFixed(1) + "k"
              : Math.sign(num) * Math.abs(num);
          }
          return (
            <NavLink
              style={{ textDecoration: "none" }}
              to={`/gallery/${id}`}
              key={id}
            >
              <div className="image-card">
                <img src={urls.regular} alt={`id`} />
                <div className="user">
                  <div className="user-img">
                    <img src={user.profile_image.small} alt="" />
                    <div className="user-social">
                      <p>{user.name}</p>
                      <p>{`@${user.username}`}</p>
                    </div>
                  </div>
                  <div className="user-likes">
                    <SlLike />
                    <span>{kFormatter(likes)}</span>
                  </div>
                </div>
              </div>
            </NavLink>
          );
        })}
      </div>
  )
}

export default Cards