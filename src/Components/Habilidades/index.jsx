import React from 'react';
import styled from 'styled-components';

const EstiloH1 = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-weight: 800;
    text-align: center;
`;

const HabilidadesContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0;
`;

const HabilidadeItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    text-align: center;

    p {
        margin: 5px 0;
    }
`;

const EstiloIMG = styled.img`
    width: 60px;
    height: 60px; // Adicionando altura para manter a proporção
`;

const habilidades = [
    { nome: 'JavaScript', img: '../../public/img/script-java.png', alt: 'JavaScriptLogo' },
    { nome: 'React', img: '../../public/img/biblioteca.png', alt: 'ReactLogo' },
    { nome: 'Figma', img: '../../public/img/figma.png', alt: 'FigmaLogo' },
    { nome: 'Python', img: '../../public/img/logotipo-da-linguagem-python.png', alt: 'PythonLogo' },
    { nome: 'Node', img: '../../public/img/node-js.png', alt: 'NodeLogo' },
];

const Habilidades = () => {
  return (
    <div>
      <EstiloH1>Habilidades</EstiloH1>
      <HabilidadesContainer>
        {habilidades.map((habilidade, index) => (
          <HabilidadeItem key={index}>
            <p>{habilidade.nome}</p>
            <EstiloIMG src={habilidade.img} alt={habilidade.alt} />
          </HabilidadeItem>
        ))}
      </HabilidadesContainer>
    </div>
  );
}

export default Habilidades;