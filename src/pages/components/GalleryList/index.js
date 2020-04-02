import React from "react";

import "./styles.css";
import Picture from "./Picture";
import ImageUploader from "../ImageUploader";
export default function GalleryList({ pictures, fullScreenClick }) {
  const isAdmin = localStorage.getItem("adminId");
  return (
    <div className="pictureGrid">
      {pictures.map((pic, index) => (
        <Picture
          key={pic.picture_id}
          pic={pic}
          index={index}
          admin={isAdmin}
          fullScreenClick={fullScreenClick}
        />
      ))}
      {isAdmin && <ImageUploader />}
    </div>
  );
}
