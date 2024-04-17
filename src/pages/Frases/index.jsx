import './Frases.style.css';
import { useEffect } from 'react';
import { FaBible } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import img8 from '../../assets/img/img-8.png';
import React from 'react';
import CardFrases from '../../components/CardFrases';

export function Frases() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <section id='primeira-apresentacao'>
                <img src={img8} alt="img-apresentação" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Precisando de Motivação?</h3>
                    <p>Separamos algumas frases para te impulsonar! Venha sempre que quiser (ou que precisar)! 
                        E lembre-se <b id='destaque-apresentacao'>"um dia por vez!"</b>.
                    </p>
                </div>
            </section>

            <section id='segunda-apresentacao'>
                <a href='#frases-motivacionais' className='botoes-areas'>
                    <FaHandHoldingHeart className='imgs-segunda-apresentacao' />
                    <p>Ir para<br />Frases Motivacionais</p>
                </a>

                <a href='#frases-biblicas' className='botoes-areas'>
                    <FaBible className='imgs-segunda-apresentacao' />
                    <p>Ir para<br />Frases Bíblicas</p>
                </a>
            </section>

            {/* ===Separação=== */}

            <h1 className='titulos-frases'>Frases Motivacionais</h1>

            <div className='todos-cards-frases' id='frases-motivacionais'>
                <CardFrases
                frase = 'Sim.'
                nomeAutor = 'Jogos no computador, jogar futebol e vôlei.'
                 />

                <CardFrases
                frase = 'Sim.'
                nomeAutor = 'Jogos no computador, jogar futebol e vôlei.'
                 />

                 <CardFrases
                frase = 'Sim.'
                nomeAutor = 'Jogos no computador, jogar futebol e vôlei.'
                 />
            </div>

            {/* === Separação === */}

            <h1 className='titulos-frases'>Frases Bíblicas</h1>

            <div className='todos-cards-frases' id='frases-biblicas'>
                <CardFrases
                frase = 'Sim.'
                nomeAutor = 'Jogos no computador, jogar futebol e vôlei.'
                 />
            </div>
        </>
    );
}