import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin-top: 100px;
  max-width: 1200px;
  margin: 100px auto 0;
`;

const EstiloH1 = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  text-align: center;
  margin: 50px 0 20px 0;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const EstiloDIV = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Grade responsiva */
  gap: 20px;
  width: 100%;
  padding: 0 20px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #f9f9f9;
  padding: 15px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

const EstiloIMG = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const EstiloP = styled.p`
  margin-top: 15px;
  font-size: 1rem;
  color: #333;
`;

const Projetos = () => {
  return (
    <Container>
      <EstiloH1>Projetos</EstiloH1>
      <EstiloDIV>
        <Card>
          <EstiloIMG src="/img/ApresentacaoNegocio.PNG" alt="Apresentação Negócio" />
          <EstiloP>Negócio Digital: Link do projeto</EstiloP>
        </Card>
        <Card>
          <EstiloIMG src="/img/OrganoProjeto.PNG" alt="Organo Projeto" />
          <EstiloP>Organo: Link do projeto</EstiloP>
        </Card>
      </EstiloDIV>
    </Container>
  );
};

export default Projetos;
