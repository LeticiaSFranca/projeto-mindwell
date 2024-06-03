import React from 'react';
import './CardDepoimentos.style.css';
import { BsChatHeartFill } from 'react-icons/bs';

const CardDepoimentos = ({ resposta1, resposta2, resposta3, resposta4 }) => {
    return (
        <div id="depoimentos-card">
            <div id="icone-depoimentos-card">
                <BsChatHeartFill />
            </div>

            <div id="texto-depoimentos-card">
                <h3>Pessoa Anônima</h3>
                <p className="perguntas-depoimentos">
                    Você possui algum transtorno mental, como ansiedade,
                    depressão, TDAH etc. ?
                </p>
                <p className="respostas-depoimentos">{resposta1}</p> <br />
                <p className="perguntas-depoimentos">
                    O que você faz para aliviar sua mente dos problemas diários
                    ?
                </p>
                <p className="respostas-depoimentos">{resposta2}</p> <br />
                <p className="perguntas-depoimentos">
                    Qual é a sua maior dificuldade dentro do ambiente
                    universitário?
                </p>
                <p className="respostas-depoimentos">{resposta3}</p> <br />
                <p className="perguntas-depoimentos">
                    Você tem uma história de superação relacionada à saúde
                    mental na universidade? Se sim, conte-a.
                </p>
                <p className="respostas-depoimentos">{resposta4}</p> <br />
            </div>
        </div>
    );
};

export default CardDepoimentos;
