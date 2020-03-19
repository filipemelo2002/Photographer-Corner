import React, { useState, useEffect, memo } from "react";

import { FaTrashAlt } from "react-icons/fa";
import { AiFillFolderAdd } from "react-icons/ai";
import { MdFullscreen } from "react-icons/md";
import "./styles.css";
import watermark from "./watermark.png";

import api from "../../admin/service/api";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css";
import { useMemo } from "react";
function GalleryList({ category, spinner }) {
    const [imageToFullscreen, setImage] = useState("");
    const [offsetScreen, setOffset] = useState("none");
    const [data, setData] = useState([]);
    const [imgDataSet, setImgDataSet] = useState([]);
    const [adminActions, setAdminActions] = useState(false);
    const [uploadedImage, setUploadedImage] = useState(null);

    const preview = useMemo(() => {
        return uploadedImage ? URL.createObjectURL(uploadedImage) : null;
    }, [uploadedImage]);
    useEffect(() => {
        const adminLogged = localStorage.getItem("user");
        if (adminLogged) {
            setAdminActions(true);
        }

        async function loadImages() {
            const images = await api.get(`/pictures?category=${category}`);
            const pic = images.data.map(
                image =>
                    "https://photographercorner-api.herokuapp.com/" +
                    image.picture_url
            );
            setData(pic);
            setImgDataSet(images.data);
            spinner("none");
        }
        loadImages();
    }, [category, spinner]);
    function fullScreenHandler(img) {
        setImage(img);
        setOffset("flex");
    }
    function uploadImage(event) {
        event.preventDefault();
        async function apiCall() {
            const myForm = new FormData();
            myForm.append("picture", uploadedImage);
            myForm.append("category", category);

            const response = await api.post("/pictures", myForm);

            setData([...data, URL.createObjectURL(uploadedImage)]);
            setUploadedImage(null);
        }

        apiCall();
    }
    function deleteImage(img, id) {
        confirmAlert({
            customUI: ({ onClose }) => (
                <div className="alertDialog">
                    <h3>Você deseja excluir este arquivo?</h3>
                    <p>Cuidado, esta ação não poderá ser desfeita...</p>
                    <div>
                        <button
                            onClick={async () => {
                                const newData = Object.assign([], data);
                                newData.splice(id, 1);
                                setData(newData);
                                const apiCall = await api.delete(
                                    `/pictures/${imgDataSet[id].id}/${imgDataSet[id].picture}`
                                );
                                if (!apiCall) alert("Erro ao apagar imagem");
                                onClose();
                            }}
                            style={{
                                padding: "7px",
                                paddingRight: "25px",
                                paddingLeft: "25px",
                                borderColor: "#cf0e0e",
                                color: "#cf0e0e",
                                backgroundColor: "#fff",
                                borderRadius: "7px"
                            }}
                        >
                            Sim
                        </button>
                        <button
                            onClick={() => {
                                onClose();
                            }}
                            style={{
                                padding: "7px",
                                borderColor: "#404040",
                                marginLeft: "5px",
                                paddingRight: "25px",
                                paddingLeft: "25px",
                                borderRadius: "7px",
                                backgroundColor: "#fff"
                            }}
                        >
                            Não
                        </button>
                    </div>
                </div>
            )
        });
    }
    return (
        <>
            <div className="gallery">
                {data.map((img, id) => (
                    <div key={id + "-" + img}>
                        <div
                            className="imgFrame"
                            style={{ backgroundImage: `url(${img})` }}
                        >
                            <img
                                src={watermark}
                                alt="images"
                                style={{ width: "350px" }}
                            />
                            <div className="adminRemove">
                                <MdFullscreen
                                    className="actionIcon fullscreen"
                                    value={id}
                                    onClick={() => fullScreenHandler(img)}
                                />
                                {adminActions !== false ? (
                                    <FaTrashAlt
                                        className="actionIcon deleteIcon"
                                        onClick={() => deleteImage(img, id)}
                                    />
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {adminActions !== false ? (
                    <div
                        className="addFrame"
                        style={{ backgroundImage: `url(${preview})` }}
                    >
                        <input
                            type="file"
                            onChange={event =>
                                setUploadedImage(event.target.files[0])
                            }
                        />
                        <AiFillFolderAdd
                            className="actionIcon addIcon"
                            onClick={uploadImage}
                        />
                    </div>
                ) : (
                    ""
                )}
            </div>
            <div
                className="fullScreenFrame"
                style={{ height: window.outerHeight, display: offsetScreen }}
                onClick={() => {
                    setOffset("none");
                }}
            >
                <div>
                    <img src={imageToFullscreen} alt="fullscreen" />
                    <span>X</span>
                </div>
            </div>
        </>
    );
}

export default memo(GalleryList);
