import { useState } from "react";
import { styled } from "styled-components";
import axios from "axios";
import URL_BASE_API from "../constants/UrlBaseApi.js";

export default function RegisterCandidate() {
  const [candidate, setCandidate] = useState({ nome: "" });
  const [isRegisteringCandidate, setIsRegisteringCandidate] = useState(false);

  function updateNameCandidate(e) {
    setCandidate({ ...candidate, [e.target.name]: e.target.value });
  }

  async function postCandidate(e) {
    e.preventDefault();
    setIsRegisteringCandidate(true);

    try {
      await axios.post(`${URL_BASE_API}/start`, candidate);
      setIsRegisteringCandidate(false);
      setCandidate({ ...candidate, nome: "" });
      alert("Candidato cadastrado com sucesso.");
    } catch (err) {
      setIsRegisteringCandidate(false);
      alert(err.response.data.message);
    }
  }

  return (
    <main>
      <Title>Cadastre candidatos para o seu processo seletivo</Title>
      <Form onSubmit={postCandidate}>
        <label>Nome do candidato:</label>
        <input
          type="text"
          placeholder="Ex: Fulano"
          name="nome"
          value={candidate.nome}
          onChange={updateNameCandidate}
          disabled={isRegisteringCandidate}
          minLength={3}
          required
        />
        <button type="submit" disabled={isRegisteringCandidate}>
          Cadastrar
        </button>
      </Form>
    </main>
  );
}

const Title = styled.h1`
  margin-bottom: 30px;
`;

const Form = styled.form`
  background-color: antiquewhite;
  width: 300px;
  display: flex;
  flex-direction: column;

  input {
    margin: 5px 0 10px;
  }
`;
