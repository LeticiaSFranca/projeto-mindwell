import React from 'react';
import './CardFrases.style.css';
import { BsChatHeartFill } from 'react-icons/bs';

const CardFrases = ({ frase, nomeAutor }) => {
    return (
        <div id="frases-card">
            <div id="texto-frases-card">
                <p className="perguntas-frases">"{frase}"</p>
                <p className="autor-frases"> - {nomeAutor}</p> <br />
            </div>
        </div>
    );
};

export default CardFrases;
