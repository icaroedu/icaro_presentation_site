import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import GlobalStyles from "./Components/globalstyles";
import Sobre from "./Components/Sobremim";
import Projetos from "./Components/Projetos";
import Experiencias from "./Components/Experiencia";
import Habilidades from "./Components/Habilidades";
import Interesses from "./Components/Interesses";
import Certificacoes from "./Components/Certificacoes";

// Animação de fade-in
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Componentes estilizados
const PageLayout = styled.div`
  display: flex;
  flex-direction: row;
  font-family: 'Montserrat', sans-serif;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);
  color: white;
  z-index: 1000;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
    height: auto;
  }
`;

const ProfileImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-bottom: 20px;
  border: 4px solid #61dafb;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  object-fit: cover;
`;

const NavList = styled.ul`
  list-style: none;
  padding: 0;
  width: 100%;
`;

const NavItem = styled.li`
  margin: 10px 0; /* Reduzido para ficar mais próximo */
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
  color: ${(props) => (props.active ? "#61dafb" : "white")};
  font-weight: ${(props) => (props.active ? "bold" : "normal")};
  transition: color 0.3s ease;
  &:hover {
    color: #61dafb;
  }
`;

const SidebarFooter = styled.footer`
  margin-top: auto;
  font-size: 0.9rem;
  color: #aaa;
  text-align: center;
  padding: 10px 0;
`;

const Content = styled.div`
  margin-left: 250px; /* Ajustado para ficar grudado */
  width: calc(100% - 250px);
  scroll-behavior: smooth;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

const Section = styled.section`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.bgColor ? props.bgColor : "white")};
  animation: ${fadeIn} 1s ease-in-out;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  margin: 0; /* Removido para ficar grudado */
  padding: 50px 20px; /* Mantido para espaçamento interno */

  h1 {
    margin-bottom: 20px;
    font-size: 36px;
    color: #34495e;
  }

  p {
    font-size: 18px;
    text-align: center;
    max-width: 800px;
    color: #7f8c8d;
  }
`;

// Componente Sidebar
const SidebarComponent = ({ sections, activeSection, setActiveSection }) => (
  <Sidebar>
    <ProfileImage src="/img/IcaroFT.PNG" alt="Sua Foto" />
    <NavList>
      {sections.map((section) => (
        <NavItem
          key={section.id}
          active={activeSection === section.id}
          onClick={() =>
            document
              .getElementById(section.id)
              .scrollIntoView({ behavior: "smooth" })
          }
          aria-current={activeSection === section.id ? "page" : undefined}
        >
          {section.title}
        </NavItem>
      ))}
    </NavList>
    <SidebarFooter>&copy; 2025 Ícaro Eduardo</SidebarFooter>
  </Sidebar>
);

// Componente principal
function App() {
  const sections = [
    { id: "sobre-mim", title: "Sobre Mim", component: <Sobre />, bgColor: "#f7f7f7" },
    { id: "projetos", title: "Projetos", component: <Projetos />, bgColor: "#e0f7fa" },
    { id: "experiencias", title: "Experiências", component: <Experiencias />, bgColor: "#ffe0b2" },
    { id: "habilidades", title: "Habilidades", component: <Habilidades />, bgColor: "#d1c4e9" },
    { id: "interesses", title: "Interesses", component: <Interesses />, bgColor: "#ffccbc" },
    { id: "certificacoes", title: "Certificações", component: <Certificacoes />, bgColor: "#c8e6c9" },
  ];

  const [activeSection, setActiveSection] = useState(sections[0].id);

  // Rastreia qual seção está visível ao rolar a página
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (
          element.offsetTop <= scrollPosition &&
          element.offsetTop + element.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [sections]);

  return (
    <>
      <GlobalStyles />
      <PageLayout>
        <SidebarComponent
          sections={sections}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Content>
          {sections.map((section) => (
            <Section
              id={section.id}
              key={section.id}
              bgColor={section.bgColor}
            >
              {section.component || (
                <>
                  <h1>{section.title}</h1>
                  <p>{section.content}</p>
                </>
              )}
            </Section>
          ))}
        </Content>
      </PageLayout>
    </>
  );
}

export default App;