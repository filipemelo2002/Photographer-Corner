import React, {useState, useEffect} from 'react'

import Spinner from 'react-bootstrap/Spinner'
import GalleryList from '../components/GalleryList'
import Header from '../components/Header'

import Footer from '../components/Contact'
import './styles.css'

export default function Eventos(){
    const [display, setDisplay] = useState('block')
    const [imgs, setImgs] = useState([])


    useEffect(()=>{
        async function loadImages(){
            function importAll(r) {
                return r.keys().map(r);
            }
            const images = importAll(require.context('./img', true, /\.(png|jpe?g|svg|jpg)$/))
            if(images){
                setImgs(images)
                setDisplay('none')
            }
        }   
        loadImages()
    }, [])

    return (
        <>
        <Header/>
        <div className="galeryContent">
            <h1>Eventos</h1>
            <Spinner animation="grow" className="loadingIndicator" style={{display: display}}/>
            <GalleryList images={imgs}/>
        </div>
        <Footer/>
        </>
    )
}