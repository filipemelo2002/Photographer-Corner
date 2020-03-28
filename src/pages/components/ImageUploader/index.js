import React, { useState, useMemo } from "react";

import api from "../../../service/api";
import { FaFolder, FaUpload } from "react-icons/fa";
import "./styles.css";

export default function ImageUploader() {
  const [image, setImage] = useState(null);
  const preview = useMemo(() => (image ? URL.createObjectURL(image) : null), [
    image
  ]);
  return (
    <div className="addPicture">
      <img src={preview} width="350px" className="previewImage" />
      <div>
        <form>
          <input
            type="file"
            onChange={event => setImage(event.target.files[0])}
          />
          <button type="submit">
            <FaUpload size={50} color="#3d3d3d" />
          </button>
        </form>
      </div>
    </div>
  );
}
