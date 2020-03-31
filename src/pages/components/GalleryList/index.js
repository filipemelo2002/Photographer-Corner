import React, { useContext } from "react";

import "./styles.css";
import watermark from "./watermark.png";
import { FaTrash, FaExpand } from "react-icons/fa";
import PictureContext from "../../context";
import ImageUploader from "../ImageUploader";
export default function GalleryList({ pictures, fullScreenClick }) {
  const isAdmin = localStorage.getItem("adminId");
  const { deletePicture } = useContext(PictureContext);
  return (
    <div className="pictureGrid">
      {pictures.map(pic => (
        <div key={pic.picture_id} className="imageFrame">
          <div className="deleteButton">
            <button onClick={() => fullScreenClick(pic)}>
              <FaExpand size={35} color="#ffffff" />
            </button>
            {isAdmin && (
              <button onClick={() => deletePicture(pic)}>
                <FaTrash size={35} color="#ffffff" />
              </button>
            )}
          </div>

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
      {isAdmin && <ImageUploader />}
    </div>
  );
}
