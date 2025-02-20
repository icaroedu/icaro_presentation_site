import React from "react";
import styled from "styled-components";

// Contêiner principal
const Container = styled.div`
  display: flex;
  justify-content: space-between; /* Espaçamento entre os grupos de cards */
  padding: 3px 2px; /* Espaçamento interno ao redor do conteúdo */
  flex-wrap: wrap;
`;

// Estilo do título (h1)
const EstiloH1 = styled.h1`
  position: relative;
  margin: 0; /* Remove o margin inicial */
  margin-top: 20px; /* Espaçamento superior */
  margin-left: 20px; /* Espaçamento da borda esquerda */
  font-size: 36px;
  font-family: "Montserrat", sans-serif;
  font-weight: 800;
  color: #333;
  text-align: left; /* Alinha o texto à esquerda */
`;

// Estilo do contêiner dos cards
const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px; /* Margem ao redor de cada card */
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px; /* Largura do card */
  background-color: #f9f9f9;
  transition: transform 0.2s; /* Efeito de transição ao passar o mouse */

  &:hover {
    transform: scale(1.05); /* Efeito de zoom */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2); /* Aumenta a sombra no hover */
  }
`;

// Estilo do título do card
const CardTitle = styled.h2`
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin-bottom: 10px;
  font-size: 1.5em; /* Tamanho do título */
`;

// Estilo da descrição do card
const CardDescription = styled.p`
  font-family: "Montserrat", sans-serif;
  margin: 5px 0;
  font-size: 1em; /* Tamanho do texto */
  text-align: center;
`;

// Estilo do botão
const Button = styled.button`
  margin-top: 15px;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  background-color: #007bff; /* Cor do botão */
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3; /* Cor ao passar o mouse */
  }
`;

// Dados das experiências
const experiences = [
  {
    title: "Analista TI",
    company: "SecMulher",
    duration: "Julho de 2023 - Agosto 2024",
    description:
      "Desen. de software (HTML, CSS, JavaScript e Python), Elaboração de documentos, Suporte técnico, Acompanhamento de projetos, Desenvolver consultas e manutenção em Banco de dados MySQL.",
  },
  {
    title: "Suporte TI",
    company: "SecMulher",
    duration: "Dezembro 2022 - Junho 2023",
    description:
      "Suporte técnico, Acompanhamento de projetos, Desenvolver consultas e manutenção em Banco de dados MySQL.",
  },
  {
    title: "Estagio TI",
    company: "SecMulher",
    duration: "março 2021 - dezembro 2022",
    description:
      "Suporte técnico, Manuteção e revisão de equipamentos de TI, Acopanhamento de projetos",
  },
  {
    title: "Estagio TI",
    company: "Telein",
    duration: "maio 2021 - julho 2021",
    description:
      "teste",
  },
];

// Componente principal
const Experiencias = () => {
  return (
    <>
      <EstiloH1>Experiências</EstiloH1>
      <Container>
        <div>
          {experiences.slice(0, 2).map((exp, index) => (
            <CardContainer key={index}>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.duration}
              </CardDescription>
              <CardDescription>{exp.description}</CardDescription>
              <Button>Ver Mais</Button>
            </CardContainer>
          ))}
        </div>
        <div>
          {experiences.slice(2, 4).map((exp, index) => (
            <CardContainer key={index + 2}>
              <CardTitle>{exp.title}</CardTitle>
              <CardDescription>
                {exp.company} | {exp.duration}
              </CardDescription>
              <CardDescription>{exp.description}</CardDescription>
              <Button>Ver Mais</Button>
            </CardContainer>
          ))}
        </div>
      </Container>
    </>
  );
};

export default Experiencias;