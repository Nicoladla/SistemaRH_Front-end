import { styled } from "styled-components";

export default function RegisterCandidate() {
  return (
    <main>
      <Title>Cadastre candidatos para o seu processo seletivo</Title>
      <Form>
        <label>Nome do candidato:</label>
        <input type="text" minLength={3} placeholder="Ex: Fulano" />
        <button>Cadastrar</button>
      </Form>
    </main>
  );
}

const Title= styled.h1`
    margin-bottom: 30px;
`

const Form = styled.form`
  background-color: antiquewhite;
  width: 300px;
  display: flex;
  flex-direction: column;

  input{
    margin: 5px 0 10px;
  }
`;

