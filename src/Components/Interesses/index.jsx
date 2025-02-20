import React from "react";
import styled from "styled-components";

const colors = {
  primary: "#07b0df",
  text: "#333",
  background: "#f9f9f9",
};

const fonts = {
  title: "'Montserrat', sans-serif",
  text: "'Roboto', sans-serif",
};

// Estilo para o título
const EstiloH1 = styled.h1`
  font-family: ${fonts.title};
  font-weight: 800;
  font-size: 2.5rem;
  color: ${colors.text};
  margin-bottom: 20px;
  text-align: center;
`;

// Lista de interesses
const InterestsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

// Estilo de cada item da lista
const InterestItem = styled.li`
  font-family: ${fonts.text};
  font-size: 1.2rem;
  font-weight: 500;
  color: ${colors.text};
  background-color: ${colors.background};
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Ícones para interesses
const InterestIcon = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
`;

// Componente de Interesses
const Interesses = () => {
  return (
    <div>
      <EstiloH1>Interesses</EstiloH1>
      <InterestsList>
        <InterestItem>
          <InterestIcon src="/img/react.png" alt="React" />
          Desenvolver com React
        </InterestItem>
        <InterestItem>
          <InterestIcon src="/img/javascript.png" alt="JavaScript" />
          JavaScript Moderno (ES6+)
        </InterestItem>
        <InterestItem>
          <InterestIcon src="/img/css.png" alt="CSS" />
          Estilizar com CSS e animações
        </InterestItem>
        <InterestItem>
          <InterestIcon src="/img/api.png" alt="APIs" />
          Consumo de APIs REST/GraphQL
        </InterestItem>
        <InterestItem>
          <InterestIcon src="/img/git.png" alt="Git" />
          Versionamento com Git/GitHub
        </InterestItem>
        <InterestItem>
          <InterestIcon src="/img/responsive.png" alt="Responsive Design" />
          Design Responsivo
        </InterestItem>
      </InterestsList>
    </div>
  );
};

export default Interesses;

