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
                frase = 'A maior coragem está em dar o primeiro passo. Depois é só enfrentar a caminhada e você chegará-la!'
                nomeAutor = 'Beatriz Mello'
                />

                <CardFrases
                frase = 'Ser bom em algo não é um dom, mas sim treino!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Sem lutas, não há vitória.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'As melhores coisas da vida não são coisas. São sensações, momentos, conexões. Espero que você tenha as mais incríveis!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Não é todo mundo que vai entender seu caminho. E tudo bem. O caminho é seu, não deles.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Nunca perco. Ou eu ganho, ou eu aprendo.'
                nomeAutor = 'Nelson Mandela'
                />

                <CardFrases
                frase = 'Somos o que fazemos repetidamente. Excelência não é um ato, mas sim um hábito.'
                nomeAutor = 'Aristóteles'
                />

                <CardFrases
                frase = 'Seja a pessoa que ninguém acreditou que você seria.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Não sou perfeito(a). Mas sou uma versão difícil de ser encontrado(a).'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'É sobre ter um coração fã de detalhes e que enxerga, antes de tudo essência.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Tudo que vale a pena, leva tempo e é difícil. Siga em frente!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Metade de mim é força, e a outra está aprendendo a ser forte também!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'É sobre ter um coração fã de detalhes e que enxerga, antes de tudo essência.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Consulte suas esperanças. Não seus medos.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Você é jovem demais para deixar o mundo quebrar você.'
                nomeAutor = 'Taehyung'
                />

                <CardFrases
                frase = 'É a sua energia que faz que as pessoas se apaixonem por você! Não é seu físico ou status que lhe torna inesquecível. É como você transforma o coração das pessoas com a sua presença!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'O sucesso é a soma de pequenos esforços todos os dias!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Não chore nem brigue. Você é a pessoa que não acontece duas vezes na vida de alguém!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Nunca estaremos totalmente prontos. Mas, podemos conquistar coisas incríveis se tivermos coragem!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Perdi muito tempo até aprender que não se guarda palavras. Ou você as fala, as escreve ou elas te sufocam.'
                nomeAutor = 'Clarice Lispector'
                />

                <CardFrases
                frase = 'Você não está cansado de fazer coisas demais. Está cansado de fazer pouco do que te faz sentir vivo!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Se apaixone pelo processo.'
                nomeAutor = 'Desconhecido'
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

                <CardFrases
                frase = 'Nenhuma folha caia sem que Deus permita. Para tudo possui um propósito.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Todos nós precisamos de um momento de escuridão para ver o que brilha em nossas vidas.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Quando ela não consegue sorrir, ela ora. Esse é o segredo da força dela.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Alguns planos de Deus doem, mas todos são perfeitos.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Ore até expelir sua dor. E depois torne orar um hábito.'
                nomeAutor = 'Desconhecido'
                />     

                <CardFrases
                frase = 'Um dia você entenderá porque Deus permitiu que você chorasse tanto!'
                nomeAutor = 'Desconhecido'
                />           

                <CardFrases
                frase = 'Não pare de orar, a resposta virá na hora certa.'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Sorria! Você está sendo amado por Cristo!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Nenhuma bênção está atrasada, porque o relógio de Deus está sempre certo!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Eu tenho dado a Cristo, incontáveis razões para nãome amar, e nenhuma delas tem sido suficiente para mudá-lo.'
                nomeAutor = 'Paul Washer'
                />

                <CardFrases
                frase = 'Ele fará você rir denovo!'
                nomeAutor = 'Jó 8:21'
                />

                <CardFrases
                frase = 'Eu vim para tenham vida em abundância!'
                nomeAutor = 'João 10:10'
                />

                <CardFrases
                frase = 'Deixa Deus curar as feridas que a vida te causou!'
                nomeAutor = 'Salmos 107:20'
                />

                <CardFrases
                frase = 'Existe força brotando da sua fraqueza!'
                nomeAutor = '2 Coríntios 12:9'
                />

                <CardFrases
                frase = 'Deus te reconstruirá quantas vezes for necessário!'
                nomeAutor = '1 Coríntios 3:16'
                />

                <CardFrases
                frase = 'Você não está só!'
                nomeAutor = 'Mateus 28:20'
                />

                <CardFrases
                frase = 'O único que podia nos julgar, nos amou!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Ela não é forte. Forte mesmo é o Deus que habita nela!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'As coisas terrenas não preenchem um coração que foi feito para o céu!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Todas as coisas contribuem para o bem daqueles que amam a Deus.'
                nomeAutor = 'Romanos 8:28'
                />

                <CardFrases
                frase = 'Batei e a porta vos será aberta.'
                nomeAutor = 'Mateus 7:7-12'
                />

                <CardFrases
                frase = 'Se seu coração está batendo, significa que os planos de Deus ainda não foram totalmente realizados!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Sejam fortes e corajosos! Não fiquem assustados, nem tenham medo[...] Pois aquele que está do nosso lado é mais poderoso[...].'
                nomeAutor = '2 Crônicas 32:7'
                />

                <CardFrases
                frase = 'Pois o Espírito Santo de Deus que me fez e é o sopro do Todo-Poderoso que me da vida.'
                nomeAutor = 'Jó 33:4'
                />

                <CardFrases
                frase = 'Lembrem que o Senhor Deus trata com cuidado especial aqueles que são fiéis a Ele; o Senhor me ouve quando eu o chamo.'
                nomeAutor = 'Salmos 4:3'
                />

                <CardFrases
                frase = 'Felizes são aqueles que buscam a proteção de Deus!'
                nomeAutor = 'Salmos 2:12'
                />

                <CardFrases
                frase = 'Não se aborreça por causa dos maus, nem tenha inveja dos que praticam o mau. Pois eles vão desaparecer logo como a erva que seca; eles morrerão como as plantas que murcham.'
                nomeAutor = 'Salmos 37:1-2'
                />

                <CardFrases
                frase = 'Os ensinamentos das pessoas sábias são uma fonte de vida; eles ajudam a evitar as armadilhas da morte.'
                nomeAutor = 'Provérbios 13:14'
                />

                <CardFrases
                frase = 'Só quem sabe a dor de se perder...sabe a felicidade de ser encontrado por Jesus!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Use o dom que Deus te deu, para que outras pessoas se beneficiem dele!'
                nomeAutor = 'Desconhecido'
                />

                <CardFrases
                frase = 'Estejam vigilantes, mantenham-se firmes na fé, sejam corajosos, sejam fortes.'
                nomeAutor = '1 Coríntios 16:13'
                />

                <CardFrases
                frase = 'E tudo que pedires em oração, crendo, recebereis.'
                nomeAutor = 'Mateus 21:22'
                />
            </div>
        </>
    );
}