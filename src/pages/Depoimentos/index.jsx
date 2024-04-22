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

            <CardDepoimentos
            // Luiza
            resposta1 = 'Ansiedade e TDAH.'
            resposta2 = 'Procuro fazer coisas que eu considero relaxante, então gosto de ler.'
            resposta3 = 'Concentrar quando tem muita gente conversando ao redor.'
            resposta4 = 'Não e espero que eu nem precise.' />

            <CardDepoimentos
            // Rafael Bremtropp
            resposta1 = 'Sim, possuo.'
            resposta2 = 'Ar fresco e música quando posso.'
            resposta3 = 'Tempo e foco.'
            resposta4 = 'Não.' />

            <CardDepoimentos
            // Rebeca Oliveira
            resposta1 = 'TDA (sem hiperatividade).'
            resposta2 = 'Faço todo planejamento da semana, e tento não me frustar se não conseguir cumpri-los. Vivendo literalmente um dia de cada vez.'
            resposta3 = 'Lidar com o sentimento de ser “sozinha”, o nível de responsabilidade e o desespero de estar atarefada demais.  '
            resposta4 = 'Não.' />

            <CardDepoimentos
            // Laura Ferreira
            resposta1 = 'Sim.'
            resposta2 = 'Me mantenho longe de grandes tecnologias, celular, internet e redes sociais'
            resposta3 = '-'
            resposta4 = '-' />

            <CardDepoimentos
            // Ana Clara Braga
            resposta1 = 'Sim.'
            resposta2 = 'Faço coisas que eu gosto, fazer bolos, ouvir música, vê algum filme que eu amo assim consigo distrair a cabeça e a gata ar os pensamentos ruins.'
            resposta3 = 'Me concentrar nas aulas e controlar a ansiedade em conseguir compreender, aprender e ter a certeza que venci todas a matérias de forma clara.'
            resposta4 = '-' />

            <CardDepoimentos
            // Pablo Washington
            resposta1 = 'TDAH.'
            resposta2 = 'Música.'
            resposta3 = 'Concentração.'
            resposta4 = 'Não.' />

            <CardDepoimentos
            // Pedro Henrique da Silva Rocha
            resposta1 = 'Sim.'
            resposta2 = 'Jogos no computador, jogar futebol e vôlei.'
            resposta3 = 'Concentração em aula.'
            resposta4 = 'Não.' />

            <CardDepoimentos
            // Matheus Manoel   
            resposta1 = 'TDAH e ansiedade.'
            resposta2 = 'Tentativas de desacelerar o cérebro com exercícios de respiração.'
            resposta3 = 'Concentração e desenvolvimento próprio.'
            resposta4 = 'Não.' />

            <CardDepoimentos
            // Júlia Leal   
            resposta1 = 'Sim.'
            resposta2 = 'Leio livros de romance, assisto séries e oro.'
            resposta3 = 'Manter o foco nas matérias e não me distrair.'
            resposta4 = 'Não possuo.' />

            <CardDepoimentos
            // Gabriela Bitencourt
            resposta1 = 'Sim, tdah e ansiedade.'
            resposta2 = 'Jogo voleibol.'
            resposta3 = 'Focar, procastinar.'
            resposta4 = 'Não possuo.' />
            </div>
        </>
    );
}