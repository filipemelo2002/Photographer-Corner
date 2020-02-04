import React from 'react'

import './styles.css'

import img1 from './img/1.jpg'
import img2 from './img/2.jpg'
import img3 from './img/3.jpg'
import img4 from './img/4.jpg'
import img5 from './img/5.jpg'

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
            
            <div className="imagesWall">
                <div className="imageFrame">
                    <img src={img1} alt="icon-camera"/>
                    <p>Viva momentos incríveis</p>
                </div>
                <div className="imageFrame">
                    <img src={img2} alt="icon-camera"/>
                    <p>Se emocione</p>
                </div>
                <div className="imageFrame">
                    <img src={img3} alt="icon-camera"/>
                    <p>Eternize momentos</p>
                </div>
                <div className="imageFrame">
                    <img src={img4} alt="icon-camera"/>
                    <p>Guarde as recordações</p>
                </div>
                <div className="imageFrame">
                    <img src={img5} alt="icon-camera"/>
                    <p>Agende agora</p>
                </div>
            </div>
            
        </div>
        )
}