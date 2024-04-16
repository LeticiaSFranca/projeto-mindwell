import './Contato.style.css';
import React from 'react';
import imgContato from '../../assets/img/img-4.png';
import { FaPaperPlane } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { MdMarkunreadMailbox } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { useEffect } from 'react';

export function Contato() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <section id='primeira-apresentacao'>
                <img src={imgContato} alt="img-contato" id='img-apresentacao' />
                <div id='texto-abertura'>
                    <h3 id='titulo-apresentacao'>Entrar em Contato</h3>
                    <p>Conte-nos sobre suas dificuldades psicológicas e sentimentais na universidade, como você se sente!
                        Deixe também conselho para pessoas que passam por isso e ajude-as! Lembre-se <b id='destaque-apresentacao'>será tudo
                            de forma ANÔNIMA!</b>
                    </p>
                </div>
            </section>

            <section className="formularioContato">
                <form action="https://formsubmit.co/leticiasilvafranca17@gmail.com" method="post" encType="multipart/form-data">
                    <h3>Formulário</h3>
                    <br />
                    <label>
                        <span><i className="icon icon-user-1"></i><IoPersonSharp /> Nome</span>
                        <input type="text" name="nome" required placeholder="Seu nome (será anônimo)" />
                    </label>

                    <label>
                        <span><i className="icon icon-flag"></i>< MdMarkunreadMailbox /> Assunto</span>
                        <input type="text" name="assunto" required placeholder="ex: Meu Depoimento." />
                    </label>

                    <label>
                        <span><i className="icon icon-comment" id="caixaMensagem"></i><AiFillMessage /> Experiência</span>
                        <textarea name="mensagem" required placeholder="Digite aqui sua experiência na universidade!" />
                    </label>

                    <label>
                        <span><i className="icon icon-comment" id="caixaMensagem"></i><AiFillMessage /> Minha válvula de escape</span>
                        <textarea name="mensagem" required placeholder="E qual sua válvula de escape/ como resolveu?" />
                    </label>

                    <input type="hidden" name="acao" value="enviar" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://projetowindwell.vercel.app" />
                    <button type="submit" className="btn-envia" title="Enviar"><b>Enviar <FaPaperPlane /></b></button>
                </form>
                <br />
            </section>
        </>
    );
}