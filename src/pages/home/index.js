import React from 'react'

import './styles.css'
import Carousel from './carousel'
import avatar from './img/avatar.png'

import {FaCamera} from 'react-icons/fa'
import {Button} from 'react-bootstrap'
export default function Home(){

return (
    <div className="content">
        <Carousel/>
        <div className="aboutMe">
            <img src={avatar} alt="about-me-avatar"/>
            <section>
                <h1>Gerson Vaz</h1>
                <p>Olá! Meu nome é Gerson Vaz e trabalho com fotografia desde 2019. Sou formado em Fotografia Digital pela GINEAD e em Photoshop pela Prime Cursos. Desafios são minha motivação e fotografar é um sonho realizado. E aí, vai um click?</p>
                <Button variant="outline-secondary" className="btn">Agende agora <FaCamera /></Button>
            </section>
            
        </div>
    </div>  
    )
}