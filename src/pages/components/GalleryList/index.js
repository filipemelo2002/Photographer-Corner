import React from 'react'

import {FaTrashAlt} from 'react-icons/fa'
import {AiFillFolderAdd}from 'react-icons/ai'
import './styles.css'
import watermark from './watermark.png'
export default function GalleryList({images}){

    return (
        <div className="gallery">
            {
                images.map(img=>(
                        <div className="imgFrame" key={img} style={{backgroundImage:`url(${img})`}}>
                            <img src={watermark} alt="images" style={{width:'350px'}} />
                            <div className="adminRemove">
                                <FaTrashAlt className="deleteIcon"/>
                            </div>
                        </div>
                    )
                )
            }
                <div className="addFrame">
                    <AiFillFolderAdd className="addIcon"/>
                </div>
        </div>
    )

}