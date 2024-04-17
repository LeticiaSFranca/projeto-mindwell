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
                    <p>Ir para<br />Frases Cristãs</p>
                </a>
            </section>

            {/* ===Separação=== */}

            <h1 className='titulos-frases'>Frases Motivacionais</h1>

            <div className='todos-cards-frases' id='frases-motivacionais'>
                <CardFrases
                frase = 'A única forma de chegar ao impossível, é acreditar que é possível!'
                nomeAutor = 'Alice no país das maravilhas'
                 />

                <CardFrases
                frase = 'Amar é colocar as necessidades de alguém acima das suas!'
                nomeAutor = 'Frozen'
                 />

                 <CardFrases
                frase = 'São os pequenos detalhes da vida que ficarão eternizados em nossos corações.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você está onde você se coloca.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você faz suas escolhas, e suas escolhas fazem você!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Não deixe seus sonhos serem apenas sonhos!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Viver é um rasgar-se e remendar-se.'
                nomeAutor = 'Guimarães Rosa'
                 />

                <CardFrases
                frase = 'Eu não sou louco. Apenas minha realidade que é diferente da sua!'
                nomeAutor = 'Alice no país das maravilhas'
                 />

                <CardFrases
                frase = 'A gentileza é o jeito mais bonito de ser o sol no dia nublado de alguém.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'A vida não é sobre metas, conquistas e linhas de chegada. É sobre quem você se torna durante o caminho!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'É ao poucos que conquistamos muito!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Esquece esse medo de tentar e dar errado. Errado é não tentar e deixar a chance de ser feliz, ir em bora.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Quem não ouve a melodia, acha maluco quem dança.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você é incrível mesmo carregando feridas que quase ninguém sabe!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você é incrível quando levanta da cama e decide que vai enfrentar mais um dia!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Pequenas conquistas, ainda são conquistas!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você é incrível quando coloca sua dor no bolso para ouvir a do outro!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Serei heroína da minha própria história!'
                nomeAutor = 'Anne with an E'
                 />

                <CardFrases
                frase = 'As pessoas choram, não porque são fracas. E sim porque tem sido fortes por muito tempo!'
                nomeAutor = 'Johnny Deep'
                 />

                <CardFrases
                frase = 'Em caso de excesso de lucidez, loucure-se!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Não vai doer para sempre, então não deixe que isso afete o que há de melhor em você!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Não é porque o céu está nublado, que as estrelas morreram!'
                nomeAutor = 'Chico Buarque'
                 />

                <CardFrases
                frase = 'Até a Lua passa por fases para voltar a ser cheia e inteira!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'As companhias certas te mostram que a sua forma de ser, é mesmo uma coisa boa!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'É sobre quem não tenta mudar você, mas te incentiva o tempo todo a ser melhor.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'O segredo, querida Alice, é rodear-se de pessoas que te façam sorrir o coração. É então, só então que estarás no país das maravilhas!'
                nomeAutor = 'Chapeleiro Maluco'
                 />

                <CardFrases
                frase = 'Pessoas boas também erram, tem dias difíceis, são imperfeitas e ainda sim precisam aprender muito. Pessoas boas sabem disso tudo e tentam crescer e melhorar!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Nos olhos certos, até seus detalhes mais simples se torna a coisa mais bonita do mundo!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você está louca, pirada, perdeu um parafuso! Mas posso te contar um segredo? As melhores pessoas são assim!'
                nomeAutor = 'Chapeleiro Maluco'
                 />

                <CardFrases
                frase = 'Fique onde puder ser tudo o que você é. Fique onde fazem festa por você simplesmente existir!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Fique onde você se encaixa sem precisar forçar. Fique onde você significa muito, porque você é muito!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Tem muita beleza nas pessoas que tentam fazer as outras se sentirem bem!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Você é aquele tipo de pessoa incrível que, mesmo depois de ter passado por tantas coisas ruins, continuou incrível!'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'A qualidade da companhia influencia na beleza do caminho.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Muitas pessoas tentam te desmotivar porque é nítido o medo que elas tem de você chegar onde elas não chegaram.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Nenhum obstáculo será tão grande o suficiente se sua vontade de vencer for maior.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Se perdoe. Você não tinha a maturidade que tem hoje.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Quando algo parecer muito difícil, concentre-se no primeiro passo.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Que você nunca desista ser tudo aquilo que você sabe que nasceu pra ser.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Se você foca na dor, continuará a sofrer. Se você foca na lição, continuará a crescer.'
                nomeAutor = 'Desconhecido'
                 />

                <CardFrases
                frase = 'Se você iluminar apenas as suas imperfeições, todas as suas qualidades ficarão na sombra.'
                nomeAutor = 'Colleen Hoover'
                 />

                <CardFrases
                frase = 'Se você iluminar apenas as suas imperfeições, todas as suas qualidades ficarão na sombra.'
                nomeAutor = 'Colleen Hoover'
                 />
            </div>

            {/* === Separação === */}

            <h1 className='titulos-frases'>Frases Cristãs</h1>

            <div className='todos-cards-frases' id='frases-biblicas'>
                <CardFrases
                frase = 'Não se amoldem ao padrão deste mundo, mas transformem-se pela renovação da sua mente, para que sejam capazes de experimentar e comprovar a boa, agradável e perfeita vontade de Deus.'
                nomeAutor = 'Romanos 12:2'
                 />

                <CardFrases
                frase = 'Seus erros não te definem.'
                nomeAutor = 'Salmos 37:24'
                 />

                <CardFrases
                frase = 'Você é toda linda, minha querida; Em você não há defeito algum.'
                nomeAutor = 'Cântico 4:7'
                 />

                <CardFrases
                frase = 'Jovem, você é a luz e o tempero do mundo.'
                nomeAutor = 'Mateus 5: 13-16'
                 />

                <CardFrases
                frase = 'Ainda que eu ande pelo vale da sombra da morte, não temerei mau algum. Pois tu estás comigo.'
                nomeAutor = 'Salmos 23:4'
                 />

                <CardFrases
                frase = 'O inimigo não estaria te atacando com tanta força.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Quanto mais em paz nós estamos com nós mesmos, mais fácil é para Deus nos usar para tocar outras pessoas.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'A sua luz deve brilhar, para que os outros vejam através de você, o pai que está no céu.'
                nomeAutor = 'Mateus 5:16'
                />

                <CardFrases
                frase = 'Mesmo quando você não consegue ouvir a voz de Deus, Ele te ouve.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Orar por alguém, é dizer "eu te amo" escondido, é amar sem ser visto, sem platéias ou aplausos. Orar é fortalecer o outro, é abraçá-lo invisivelmente.'
                nomeAutor = 'C.S. Lewis'
                />
            </div>
        </>
    );
}