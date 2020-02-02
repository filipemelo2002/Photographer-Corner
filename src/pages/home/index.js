import React from 'react'
import './styles.css'

import img1 from '../../assets/photo-camera.png'
import img2 from '../../assets/focus.png'
import img3 from '../../assets/video-editing.png'
import img4 from '../../assets/cable.png'
import img5 from '../../assets/panoramic-view.png'
export default function Home(){
    return (
        <div className="content">
            <div className="aboutMe">
                <div>
                    Sobre mim
                </div>
                <p>
                Olá! Meu nome é Gerson Vaz e trabalho com fotografia desde 2019. Sou formado em Fotografia Digital pela GINEAD e em Photoshop pela Prime Cursos. Desafios são minha motivação e fotografar é um sonho realizado. E aí, vai um click?
                </p>
            </div>
            <div className="floatingCards">
                <div className="floatCard">
                    <img src={img1} alt="icon-camera"/>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="floatCard">
                    <img src={img2} alt="icon-camera"/>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="floatCard">
                    <img src={img3} alt="icon-camera"/>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="floatCard">
                    <img src={img4} alt="icon-camera"/>
                    <p>Lorem Ipsum</p>
                </div>
                <div className="floatCard">
                    <img src={img5} alt="icon-camera"/>
                    <p>Lorem Ipsum</p>
                </div>
            </div>
        </div>
        )
}