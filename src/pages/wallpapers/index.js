import React, {useState, useEffect} from 'react'

import Spinner from 'react-bootstrap/Spinner'
import GalleryList from '../components/GalleryList'

import './styles.css'

export default function Wallpapers(){
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
            if(images){
                setImgs(images)
                setDisplay('none')
            }
        }   
        loadImages()
    }, [])

    return (
        <div className="galeryContent">
            <h1>Wallpapers</h1>
            <Spinner animation="grow" className="loadingIndicator" style={{display: display}}/>
            <GalleryList images={imgs}/>
        </div>
    )
}