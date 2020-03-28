import React, { useState, useEffect, useMemo } from "react";

import Spinner from "react-bootstrap/Spinner";
import GalleryList from "../components/GalleryList";
import FullScreenImager from "../components/FullScreenImager";
import api from "../../service/api";
import "./styles.css";

export default function Ensaios() {
  const [toggleFullscreen, setToggleFullscreen] = useState(false);
  const [pictures, setPictures] = useState([]);
  const [clickedImage, setClickedImage] = useState("");
  const display = useMemo(() => (pictures.length > 0 ? "none" : "flex"), [
    pictures
  ]);
  useEffect(() => {
    async function fetchData() {
      const response = await api.get("/pictures/ensaios");
      setPictures(response.data);
      console.log(response.data);
    }
    fetchData();
  }, []);

  function myOnClick(pic) {
    setToggleFullscreen(!toggleFullscreen);
    setClickedImage(
      `https://photographercorner-api.herokuapp.com${pic.picture_url}`
    );
  }
  return (
    <>
      <div className="galeryContent">
        <h1>Ensaios</h1>
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
    </>
  );
}
