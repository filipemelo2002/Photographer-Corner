import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import img from './img/img.jpg'
export default function Caurousel(){
    return (
        <Carousel>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div style={{
                            maxHeight:'580px'
                        }}>
                    <img
                        className="d-block   w-100"
                        src={img}
                        
                        alt="First slide"
                        fluid
                    />
                </div>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}