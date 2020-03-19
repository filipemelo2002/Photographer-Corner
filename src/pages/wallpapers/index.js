import React, { useState } from "react";

import Spinner from "react-bootstrap/Spinner";
import GalleryList from "../components/GalleryList";

import "./styles.css";

export default function Wallpapers() {
    const [display, setDisplay] = useState("block");

    return (
        <>
            <div className="galeryContent">
                <h1>Wallpapers</h1>
                <Spinner
                    animation="grow"
                    className="loadingIndicator"
                    style={{ display: display }}
                />
                <GalleryList category="wallpapers" spinner={setDisplay} />
            </div>
        </>
    );
}
