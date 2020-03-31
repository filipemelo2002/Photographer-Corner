import React, { useState, useEffect, useMemo } from "react";

import Spinner from "react-bootstrap/Spinner";
import GalleryList from "../components/GalleryList";
import FullScreenImager from "../components/FullScreenImager";
import api from "../../service/api";
import "./styles.css";

import PictureContext from "../context";
export default function Eventos() {
  const [toggleFullscreen, setToggleFullscreen] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [clickedImage, setClickedImage] = useState("");
  const display = useMemo(() => (pictures.length > 0 ? "none" : "flex"), [
    pictures
  ]);
  const prevOpacity = useMemo(() => (page === 1 ? 0.6 : 1), [page]);
  const nextOpacity = useMemo(() => (total / 9 <= page ? 0.6 : 1), [
    page,
    total
  ]);
  async function fetchData() {
    const response = await api.get(`/pictures/${category}?page=${page}`);
    setPictures(response.data.pictures);
    setTotal(response.data.total);
  }

  useEffect(() => {
    fetchData();
  }, []);
  useEffect(() => {
    fetchData();
  }, [page]);
  const category = "eventos";
  function addNewPicture(newPic) {
    //console.log(newPic);
    setPictures([...pictures, newPic]);
  }
  function prevButton() {
    if (page === 1) return;
    setPage(page - 1);
  }
  function nextButton() {
    if (total / 9 <= page) return;
    setPage(page + 1);
  }
  async function deletePicture(pic) {
    console.log(pic.picture_id);
    await api.delete(`/pictures/${pic.picture_id}/${pic.picture}`);
    setPictures(
      pictures.filter(newPics => newPics.picture_id !== pic.picture_id)
    );
  }
  function myOnClick(pic) {
    setToggleFullscreen(!toggleFullscreen);
    setClickedImage(
      `https://photographercorner-api.herokuapp.com${pic.picture_url}`
    );
  }
  return (
    <PictureContext.Provider value={{ addNewPicture, deletePicture, category }}>
      <div className="galeryContent">
        <h1>Eventos</h1>
        <Spinner
          animation="grow"
          className="loadingIndicator"
          style={{ display: display }}
        />
        <GalleryList pictures={pictures} fullScreenClick={myOnClick} />
        <FullScreenImager
          image={clickedImage}
          toggle={toggleFullscreen}
          setToggle={setToggleFullscreen}
        />
      </div>
      <div className="pagination">
        <button style={{ opacity: prevOpacity }} onClick={() => prevButton()}>
          Página anterior
        </button>
        <button style={{ opacity: nextOpacity }} onClick={() => nextButton()}>
          Próxima página
        </button>
      </div>
    </PictureContext.Provider>
  );
}
