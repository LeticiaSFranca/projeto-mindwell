import './Home.style.css';
import imgApresentacao from '../../assets/img/img-1.png';
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
                    <p>Fazemos parte de um projeto de engajamento cidadão, na qual o 
                        nosso objetivo é ajudar as pessoas, nesse caso, o quesito é 
                        saúde mental no ambiente universitário. A nossa proposta é 
                        fazer um círculo psicológico, com o intuito de que possamos 
                        escutar e auxiliar as pessoas que tenham dificuldades na esfera 
                        universitária por causa de seus transtornos mentais. Que fique 
                        de antemão, será tudo de forma anônima e facultativa, ou seja, 
                        você pode escolher se quer participar. <b>Saiba que você também pode 
                        ajudar outro pessoas!</b> Faça parte você também!
                    </p>
                </div>
            </section>

            {/* <section id='segunda-apresentacao'>
                <Link to='/desenvolvimento-web' className='botoes-areas'>
                    <img src={imgApresentacao} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                        <p>Desenvolvimento Web<br /> e Design
                        </p>
                </Link>

                <Link to='/medicina-veterinaria' className='botoes-areas'>
                    <img src={imgApresentacao2} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p><b>Medicina <br />Veterinária</b></p>
                </Link>

                <Link to='contato' className='botoes-areas'>
                    <img src={imgApresentacao3} alt="Imagem 1" className='imgs-segunda-apresentacao'/>
                    <p>Entrar em <br />Contato</p>
                </Link>
            </section> */}
        </>
    );
}