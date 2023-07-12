import { styled } from "styled-components";
import logo from "../assets/pngwing.com.png";

export default function NavBar() {
  return (
    <ContainerNavBar>
      <Hearder>
        <img src={logo} alt="logotipo" />
      </Hearder>
      <Nav>
        <div>Iniciar processo</div>
        <div>Marcar entrevista</div>
        <div>Aprovar candidato</div>
        <div>Desclassificar candidato</div>
        <div>Listar candidatos</div>
      </Nav>
    </ContainerNavBar>
  );
}

const ContainerNavBar = styled.div`
  background-color: brown;
  width: 25vw;
  min-width: 250px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
`;

const Hearder = styled.header`
  background-color: blueviolet;
  width: 100%;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  img {
    background-color: aquamarine;
    min-width: 250px;
    width: 84%;
    height: 200px;
    object-fit: cover;
  }
`;

const Nav = styled.nav`
  background-color: aqua;
  width: 100%;

  div {
    background-color: blanchedalmond;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`;
