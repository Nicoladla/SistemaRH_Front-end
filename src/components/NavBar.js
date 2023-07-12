import { styled } from "styled-components";
import logo from "../assets/pngwing.com.png";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <ContainerNavBar>
      <Hearder>
        <img src={logo} alt="logotipo" />
      </Hearder>
      <Nav>
        <Link to="/">Iniciar processo</Link>
        <Link to="/interviw/schedule">Marcar entrevista</Link>
        <Link to="/candidate/approve">Aprovar candidato</Link>
        <Link to="/candidate/disqualify">Desclassificar candidato</Link>
        <Link to="/candidate/list">Listar candidatos</Link>
      </Nav>
    </ContainerNavBar>
  );
}

const ContainerNavBar = styled.div`
  background-color: brown;
  width: 300px;
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

  a {
    background-color: blanchedalmond;
    width: 100%;
    height: 40px;
    margin-bottom: 10px;
    display: flex;
    align-items: center;
  }
`;
