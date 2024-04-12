import './Depoimentos.style.css';
import CardDepoimentos from '../../components/CardDepoimentos';
import { useEffect } from 'react';
import React from 'react';

export function Depoimentos() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <>
            <h1 id='titulo-depoimentos'>Inspire-se com histórias reais🥰! Esperamos que ajude🧡!</h1>

            <div className='todos-os-cards'>
            <CardDepoimentos
            // Ivone
            resposta1 = 'Não.'
            resposta2 = 'Escuto bastante música.'
            resposta3 = 'Maiores compromissos fora da universidade que impedem minha concentração e dedicação total.'
            resposta4 = 'Acredito que minha melhora na comunicação e quebra da timidez, o que me impedia de me comunicar com os professores e fazer novas amizades.' />

            <CardDepoimentos
            // Maria Dotiê
            resposta1 = 'Ansiedade.'
            resposta2 = 'Faço academia.'
            resposta3 = 'Lidar com a pressão psicológica.'
            resposta4 = 'Não!' />


            <CardDepoimentos
            // Artur Bomtempo
            resposta1 = 'Não.'
            resposta2 = 'Encontrar os amigos, ter momentos de descanso (sair sozinho às vezes), ir na igreja na qual faço parte, ficar com a família, etc.'
            resposta3 = 'Conciliar todas as demandas propostas e definir prioridades.'
            resposta4 = 'No meio universitário ainda não.' />

            <CardDepoimentos
            // Estevão
            resposta1 = 'Ansiedade, TDAH4.'
            resposta2 = 'Descanso.'
            resposta3 = 'Conciliar rotina de estudos com estágio obrigatório do curso.'
            resposta4 = 'Não.' />

            <CardDepoimentos
            // Letícia
            resposta1 = 'Ansiedade nível médio para alto.'
            resposta2 = 'Separo o fim de semana para ir pra roça andar a cavalo, praticar esportes/atividades físicas e ficar com meus bichinhos de estimação. Durante a semana separo 1hr/30min para fazer algo que eu gosto, seja ouvir música ou assistir um desenho enquanto almoço.'
            resposta3 = 'Conciliar vida estudantil, profissional e pessoal,  e tentar dar conta de tudo 100%.'
            resposta4 = 'Minha dica é para você se apegar aos seus amigos, foi o que me salvou da auto sabotagem dos meus próprios pensamentos. Não ache que você consegue sozinho e não precisa de ninguém, deixa as pessoas te ajudarem, se distraia sempre. Porque foi isso que me salvou, além da minha fé quando eu tinha altas crises de ansiedade e precisava sair de sala pra surtar e não atrapalhar ninguém.' />
            
            <CardDepoimentos
            // Saulo
            resposta1 = 'Ansiedade.'
            resposta2 = 'Cantarolar me ajuda demais, conversar com minha namorada também, tomar água, entre outros.'
            resposta3 = 'Não se preocupar demais.'
            resposta4 = 'Não e espero que eu nem precise.' />
            </div>
        </>
    );
}