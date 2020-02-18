import React, {useState} from 'react'

import {FaTrashAlt} from 'react-icons/fa'
import {AiFillFolderAdd}from 'react-icons/ai'
import {MdFullscreen} from 'react-icons/md'
import './styles.css'
import watermark from './watermark.png'
export default function GalleryList({images}){
    const [imageToFullscreen, setImage] = useState('')
    const [offsetScreen,setOffset] = useState('none')
    function fullScreenHandler(img){
        setImage(img)
        setOffset('flex')
        
    }
    return (
        <>
            <div className="gallery">
                {
                    images.map((img, id)=>( 
                            <div className="imgFrame" key={id+img} style={{backgroundImage:`url(${img})`}}>
                                <img src={watermark} alt="images" style={{width:'350px'}} />
                                <div className="adminRemove">
                                    <MdFullscreen className="actionIcon fullscreen" value={id} onClick={()=>fullScreenHandler(img)}/>
                                    <FaTrashAlt className="actionIcon deleteIcon"/>
                                </div>
                            </div>
                        )
                    )
                }
                    <div className="addFrame">
                        <AiFillFolderAdd className="actionIcon addIcon"/>
                    </div>
            </div>
            <div className="fullScreenFrame" style={{height:window.outerHeight, display:offsetScreen}} onClick={()=>{setOffset('none')} }>
                <img src={imageToFullscreen} alt="fullscreen"/>
            </div>
        </>
    )

}