import React from 'react'

import './styles.css'
import watermark from './watermark.png'
export default function GalleryList({images}){

    return (
        <div className="gallery">
            {
                images.map(img=>(
                        <div className="imgFrame" key={img} style={{backgroundImage:`url(${img})`, width:'350px', backgroundPosition:'center', backgroundSize:'350px'}}>
                            <img src={watermark} alt="images" style={{width:'350px'}} />
                        </div>
                    )
                )
            }
        </div>
    )

}