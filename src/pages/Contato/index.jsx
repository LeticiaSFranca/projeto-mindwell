import './Contato.style.css';
import React from 'react';
import imgContato from '../../assets/img/img-4.png';
import { FaPaperPlane } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
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
                        <input type="text" name="nome" required placeholder="Seu nome" />
                    </label>

                    <label>
                        <span><i className="icon icon-email"></i><IoMdMail /> E-mail</span>
                        <input type="text" name="email" className="fade_8S" placeholder="exemplo@email.com" />
                    </label>

                    <label>
                        <span><i className="icon icon-email"></i><FaPhone /> Telefone</span>
                        <input type="tel" name="celular" required placeholder="(31)91234-5678" id="telefone" />
                    </label>

                    <label>
                        <span><i className="icon icon-flag"></i>< MdMarkunreadMailbox /> Assunto</span>
                        <input type="text" name="assunto" required placeholder="ex: Orçamento" />
                    </label>

                    <label>
                        <span><i className="icon icon-comment" id="caixaMensagem"></i><AiFillMessage /> Mensagem</span>
                        <textarea name="mensagem" required placeholder="Digite aqui sua mensagem." />
                    </label>

                    <input type="hidden" name="acao" value="enviar" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_next" value="https://leticiafranca.vercel.app" />
                    <button type="submit" className="btn-envia" title="Enviar"><b>Enviar <FaPaperPlane /></b></button>
                </form>
                <br />
            </section>
        </>
    );
}