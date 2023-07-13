import { styled } from "styled-components";
import CandidateCard from "../components/CandidateCard";

export default function ScheduleInterview() {
  return (
    <main>
      <Title>
        Escolha com qual candidato você deseja marcar uma entrevista:
      </Title>

      <CandidateCard list={["Fulano", "Sicrano"]}/>
    </main>
  );
}

const Title = styled.h1`
  margin-bottom: 30px;
`;
