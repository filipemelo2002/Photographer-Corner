import React, {useState, useEffect} from 'react'

import Spinner from 'react-bootstrap/Spinner'

import './styles.css'

export default function Ensaios(){
    const [display, setDisplay] = useState('block')
    const [imgs, setImgs] = useState([])


    useEffect(()=>{
        async function loadImages(){
            function importAll(r) {
                return r.keys().map(r);
            }
            const images = importAll(require.context('./img', true, /\.(png|jpe?g|svg|jpg)$/))
            for(var i=0; i<19; i++){
                images.push(images[0])
            }
            setImgs(images)
            setDisplay('none')
        }   
        loadImages()
    }, [])

    return (
        <div className="galeryContent">
            <h1>Ensaios externos</h1>
            <Spinner animation="grow" className="loadingIndicator" style={{display: display}}/>
            <div className="gallery">

                {
                    imgs.map(img=>(
                        <div className="imgFrame">
                            <img src={img} alt="images" style={{width:'350px'}} />
                        </div>
                    ))
                }
               
            </div>
        </div>
    )
}