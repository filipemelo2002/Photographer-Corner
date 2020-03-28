import React from "react";

import "./styles.css";
import watermark from "./watermark.png";
import ImageUploader from "../ImageUploader";
export default function GalleryList({ pictures, fullScreenClick }) {
  const isAdmin = localStorage.getItem("adminId");
  return (
    <div className="pictureGrid">
      {pictures.map((pic, id) => (
        <div key={id} onClick={() => fullScreenClick(pic)}>
          <img
            src={watermark}
            width="350px"
            alt="watermark"
            className="watermark"
          />
          <img
            src={`https://photographercorner-api.herokuapp.com${pic.picture_url}`}
            width="350px"
            alt="loaded"
            className="image"
          />
        </div>
      ))}
      {isAdmin ? <ImageUploader /> : ""}
    </div>
  );
}
