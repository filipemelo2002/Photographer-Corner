import React, { useState, useMemo, useContext } from "react";

import api from "../../../service/api";
import { FaFolder } from "react-icons/fa";
import "./styles.css";
import PictureContext from "../../context";
export default function ImageUploader() {
  const { addNewPicture, category: categoria } = useContext(PictureContext);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const preview = useMemo(() => (image ? URL.createObjectURL(image) : null), [
    image
  ]);

  const uploadForm = useMemo(() => (isLoading ? "none" : "flex"), [isLoading]);
  const loadingIndicator = useMemo(() => (isLoading ? "flex" : "none"), [
    isLoading
  ]);
  async function uploadImage(e) {
    e.preventDefault();
    if (!image) {
      alert("Nenhum arquivo de imagem foi selecionado");
      return;
    }
    const data = new FormData();
    data.append("picture", image);
    data.append("category", categoria);
    setIsLoading(true);
    const response = await api.post("/pictures", data);
    setIsLoading(false);
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
      <img
        src={preview}
        width="350px"
        style={{
          display: preview ? "block" : "none"
        }}
        className="previewImage"
        alt="preview"
      />
      <div style={{ display: uploadForm }}>
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
      <div
        className="loadingIndicator"
        style={{ display: loadingIndicator }}
      ></div>
    </div>
  );
}
