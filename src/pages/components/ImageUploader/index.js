import React, { useState, useMemo, useContext } from "react";

import api from "../../../service/api";
import { FaFolder } from "react-icons/fa";
import "./styles.css";
import PictureContext from "../../context";
export default function ImageUploader() {
  const { addNewPicture, category: categoria } = useContext(PictureContext);
  const [image, setImage] = useState(null);
  const preview = useMemo(() => (image ? URL.createObjectURL(image) : null), [
    image
  ]);
  async function uploadImage(e) {
    e.preventDefault();
    if (!image) alert("Nenhum arquivo de imagem foi selecionado");
    const data = new FormData();
    data.append("picture", image);
    data.append("category", categoria);
    const response = await api.post("/pictures", data);
    const { id, picture_id, picture, category, picture_url } = response.data[0];
    const newImage = {
      id,
      picture,
      category,
      picture_id,
      picture_url
    };
    setImage(null);
    addNewPicture(newImage);
  }
  return (
    <div className="addPicture">
      <img src={preview} width="350px" className="previewImage" alt="preview" />
      <div>
        <form>
          <input
            type="file"
            onChange={event => setImage(event.target.files[0])}
          />
          <button type="submit" onClick={uploadImage}>
            <FaFolder size={50} color="#3d3d3d" />
          </button>
        </form>
      </div>
    </div>
  );
}
