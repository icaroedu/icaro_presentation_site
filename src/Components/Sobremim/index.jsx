import React from "react";
import styled from "styled-components";

// Variáveis de estilo
const colors = {
  primary: "#07b0df",
  primaryHover: "#007acc",
  text: "#333",
  background: "#f9f9f9",
  linkText: "#333",
};

const fonts = {
  title: "'Montserrat', sans-serif",
  text: "'Roboto', sans-serif",
};

// Wrapper para o layout geral
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background-color: ${colors.background};
  min-height: 100vh;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin-left: 0; /* Remover margem lateral em telas pequenas */
    width: 100%;
  }
`;

// Estilização do título
const SobreTitulo = styled.h1`
  font-family: ${fonts.title};
  font-weight: 800;
  font-size: 2.5rem;
  margin: 0 0 40px;
  color: ${colors.text};
  text-align: center;
  max-width: 900px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Container principal
const DivEstilo = styled.div`
  max-width: 800px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

// Parágrafo
const Pestilo = styled.p`
  font-size: 1.25rem;
  line-height: 1.6;
  font-family: ${fonts.text};
  font-weight: 500;
  color: ${colors.text};
  margin: 0;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Link com estilo
const LinkEstilo = styled.a`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  color: ${colors.primary};
  font-weight: bold;
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease, text-decoration 0.3s ease;

  &:hover {
    color: ${colors.primaryHover};
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Imagem dos ícones
const ImgEstilo = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 30px;
    width: 30px;
  }
`;

const EstiloStronG = styled.strong`
  color: ${colors.primaryHover};
`;

// Componente principal
const Sobre = () => {
  return (
    <Wrapper>
      <SobreTitulo>Sobre mim</SobreTitulo>
      <DivEstilo>
        <Pestilo>
          Olá, eu sou o <EstiloStronG>Ícaro</EstiloStronG>, um{" "}
          <EstiloStronG>Desenvolvedor Front-End</EstiloStronG> gosto de criar
          interfaces modernas e funcionais. Atualmente, moro em Burgos, na
          Espanha, e continuo aprimorando minhas habilidades em tecnologias
          como React, JavaScript e CSS. Sou comprometido com a entrega de
          soluções inovadoras e com a constante evolução no mundo da
          tecnologia.
        </Pestilo>
        <Pestilo>
          E-mail: <EstiloStronG>icaroeduardo034@gmail.com</EstiloStronG>
        </Pestilo>

        <div>
          <LinkEstilo href="https://github.com/icaroedu" target="_blank">
            <ImgEstilo src="/img/github.png" alt="GitHub" />
            GitHub
          </LinkEstilo>
          <LinkEstilo href="https://www.linkedin.com/in/icaroesr/" target="_blank">
            <ImgEstilo src="/img/linkedin.png" alt="LinkedIn" />
            LinkedIn
          </LinkEstilo>
        </div>
      </DivEstilo>
    </Wrapper>
  );
};

export default Sobre;