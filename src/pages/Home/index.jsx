import './Home.style.css';
import { Link } from 'react-router-dom';
import imgApresentacao from '../../assets/img/img-1.png';
import logo from '../../assets/img/logo.png';
import { useEffect } from 'react';
import React from 'react';

export function Home() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgApresentacao} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Bem-vindo(a)! Sinta-se em casa!</h3>
                    <p>Fazemos parte de um <b id='destaque-apresentacao'>projeto de engajamento cidadão</b>, 
                        na qual o nosso objetivo é ajudar as pessoas, nesse caso, o quesito é 
                        <b id='destaque-apresentacao'> saúde mental no ambiente universitário</b>.
                    </p>
                </div>
            </section>

            <section id='segunda-apresentacao'>
            <img src={logo} alt="logo" id='logo' />
                <div id='texto-abertura'>
                    <p>O objetivo do <b id='destaque-apresentacao'>Projeto MindWell</b> é fazer um círculo psicológico, com o intuito 
                        de que possamos escutar e auxiliar as pessoas que tenham dificuldades na esfera 
                        universitária por causa de seus transtornos mentais. Que fique 
                        de antemão, será tudo de forma anônima e facultativa, ou seja, 
                        você pode escolher se quer participar. <b id='destaque-apresentacao'>
                        Saiba que você também pode ajudar outras pessoas! Faça parte você também!</b>
                    </p>
                </div>
            </section>

            <Link to='/contato' id='botao-ajuda'>Quero Ajudar!</Link>
        </>
    );
}