import React from 'react'

import './styles.css'
import Carousel from './carousel'
import avatar from './img/avatar.jpeg'
import illustration from './img/illustration.png'

import {FaCamera} from 'react-icons/fa'
import {Button} from 'react-bootstrap'


export default function Home(){

return (
    <>

    <div className="content">
        <Carousel/>
        <div className="aboutSection">
            <div className="aboutMe">
                <img src={avatar} alt="about-me-avatar"/>
                <h1>Gerson Vaz</h1>
                <section>
                    <p>
                        Fala galera, meu nome é Gerson, eu tenho 23 anos e trabalho com fotografia desde 2019. Sempre fui apaixonado por artes. Música, desenhos, cinema essas coisas sempre me encantaram e encheram os meus olhos. Não é diferente com a fotografia.
                    </p>
                    <p>
                        Ao fotografar eu sinto alegria em saber que estou fazendo o que eu gosto. Sempre fui grato a Deus por tudo o que Ele fez na minha vida e também sou grato pelo imenso prazer de tirar fotos.
                    </p>
                    <p>
                        Sou formado em Fotografia Digital pelo instituto GINEAD e em Photoshop pela Prime Cursos. Especializado em retratos, porque eu acredito na combinação ideal entre a fotografia e as pessoas. Representar cada olhar, cada expressão, cada sentimento faz parte do meu trabalho. Eu acredito também que a fotografia pra mim é o trabalho que exemplifica a frase de Confúcio:  
                        <span>
                            “Escolha um trabalho que você ama e você nunca terá que trabalhar um dia sequer na vida.”
                        </span>
                    </p>
                    <p>
                        Desafios me motivam e não desisto tão fácil dos meus objetivos. E sobre fotografia... nunca é só um click, sempre conseguimos experiências novas e incomparáveis.
                    </p>
                    <p>
                        E aí? Me conta as tuas ideias que vou fazer de tudo para transformá-las em recordações incríveis. Vai um click?
                    </p>
                    <Button variant="outline-secondary" className="btn">Agende agora <FaCamera /></Button>
                </section>
                
            </div>
            <div className="illustration">
                <img src={illustration} id="illustration" alt="about-me-avatar"/>
            </div>
        </div>
        <div className="peoplesThoughts">
            <h3>O que dizem sobre meu trabalho</h3>
            <div className="cardPersonGroup">
                <div className="cardPerson">
                    <section>
                        <p>"Gerson, passando para agradecer pelo trabalho maravilhoso. Você foi super paciente, cheio de ideias e poses para as melhores fotos, super recomendo seu trabalho."</p>
                    </section>
                    <footer>
                        <p>- Franciele Luna</p>
                    </footer>
                </div>
                <div className="cardPerson">
                    <section>
                        <p>"Aquele que tem o poder de eternizar momentos, foi um dos primeiros a chegar no evento, muito prestativo, cuidadoso e detalhista nas fotos que junto com sua ajudadora procuraram o melhor ângulo. As fotos foram entregues rapidamente e com boa qualidade. Recomendável a todo tipo de evento."</p>
                    </section>
                    <footer>
                        <p>- Jhonatan e Maria Eduarda</p>
                    </footer>
                </div>
                <div className="cardPerson">
                    <section>
                        <p>"Amei o ensaio, Gerson. Você foi muito paciente e detalhista. Parabéns pelo seu trabalho!!!"</p>
                    </section>
                    <footer>
                        <p>- Tarcila Melo</p>
                    </footer>
                </div>
            </div>
            
        </div>
    </div>

    </> 
    )
}