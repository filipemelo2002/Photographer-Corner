import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img1 from './img/img1.jpeg'
import img2 from './img/img2.jpeg'
import img3 from './img/img3.jpeg'

import './styles.css'
export default function Caurousel(){
    return (
        <Carousel>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img1}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption className="captionItem">
                    <h3>Viva intensamente</h3>  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img2}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption className="captionItem">
                    <h3>Eternize momentos</h3>  
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img3}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption className="captionItem">
                    <h3>Guarde as recordações</h3>  
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}