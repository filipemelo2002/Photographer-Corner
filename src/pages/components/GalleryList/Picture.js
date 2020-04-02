import React, { useContext, useMemo, useRef } from "react";
import { useDrag, useDrop } from "react-dnd";
import "./styles.css";
import watermark from "./watermark.png";
import PictureContext from "../../context";
import { FaTrash, FaExpand } from "react-icons/fa";
export default function Picture({
  pic,
  fullScreenClick,
  admin: isAdmin,
  index
}) {
  const ref = useRef();
  const { deletePicture, movePicture } = useContext(PictureContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: "PICTURE", index },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: "PICTURE",
    hover(item, monitor) {
      const draggedIndex = item.index;
      const targetIndex = index;
      if (draggedIndex === targetIndex) return;

      movePicture(draggedIndex, targetIndex);

      item.index = targetIndex;
    }
  });
  dragRef(dropRef(ref));
  const opacity = useMemo(() => (isDragging ? 0.6 : 1), [isDragging]);
  return (
    <div className="imageFrame" ref={ref} style={{ opacity }}>
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
  );
}
