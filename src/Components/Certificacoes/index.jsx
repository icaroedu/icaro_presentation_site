import React from 'react';
import styled from 'styled-components';

// Estilos para o contêiner geral
const EstiloDIV = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  min-height: 100vh;
  box-sizing: border-box;
`;

// Estilos para o título
const EstiloH1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Estilo para os links das certificações
const ListaCertificacoes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

// Estilo para cada link de certificação
const EstiloA = styled.a`
  font-family: 'Roboto', sans-serif;
  font-size: 1.2rem;
  color: #07b0df;
  text-decoration: none;
  transition: color 0.3s ease, transform 0.2s ease;

  &:hover {
    color: #007acc;
    transform: translateX(5px);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Certificacoes = () => {
  return (
    <EstiloDIV>
      <EstiloH1>Certificações</EstiloH1>
      <ListaCertificacoes>
        <EstiloA href="#" target="_blank">React - Alura - 2025</EstiloA>
        <EstiloA href="#" target="_blank">UI & UX - Alura - 2024</EstiloA>
        <EstiloA href="#" target="_blank">Figma - Alura - 2024</EstiloA>
        <EstiloA href="#" target="_blank">React & JavaScript - Alura - 2024</EstiloA>
        <EstiloA href="#" target="_blank">Python DataScience - Alura - 2024</EstiloA>
      </ListaCertificacoes>
    </EstiloDIV>
  );
};

export default Certificacoes;
