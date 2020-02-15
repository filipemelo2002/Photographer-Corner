import React from 'react'

import './styles.css'
export default function GalleryList({images}){

    return (
        <div className="gallery">
            {
                images.map(img=>(
                        <div className="imgFrame" key={img}>
                            <img src={img} alt="images" style={{width:'350px'}} />
                        </div>
                    )
                )
            }
        </div>
    )

}