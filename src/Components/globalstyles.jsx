import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* Reset básico */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Corpo da página */
  body {
    font-family: 'Mulish', sans-serif;
    background-color: #f9f9f9; /* Cor de fundo suave */
    color: #333; /* Cor de texto padrão */
    line-height: 1.6;
    -webkit-font-smoothing: antialiased; /* Melhora a renderização de fontes */
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden; /* Evita rolagem horizontal */
  }

  /* Links */
  a {
    text-decoration: none;
    color: inherit; /* Herda a cor do contexto */
  }

  a:hover {
    text-decoration: underline;
  }

  /* Imagens */
  img {
    max-width: 100%;
    display: block;
  }

  /* Listas */
  ul, ol {
    list-style: none;
  }

  /* Cabeçalhos */
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  /* Botões */
  button {
    font-family: 'Mulish', sans-serif;
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }
`;

export default GlobalStyles;