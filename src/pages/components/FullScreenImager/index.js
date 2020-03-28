import React, { useMemo } from "react";
import { CSSTransition } from "react-transition-group";
import "./styles.css";
export default function FullScreenImager({ image, setToggle, toggle }) {
  const display = useMemo(() => (toggle ? "flex" : "none"), [toggle]);
  return (
    <CSSTransition in={toggle} timeout={300} classNames="fade">
      <div
        onClick={() => setToggle(false)}
        className="fullScreenHandler"
        style={{ height: window.outerHeight, display }}
      >
        <div>
          <img className="fullSizeImage" src={image} alt="fullscreen-sized" />
          <span onClick={() => setToggle(false)}>X</span>
        </div>
      </div>
    </CSSTransition>
  );
}
