import { styled } from "styled-components";
import CandidateCard from "../components/CandidateCard";
import { useEffect, useState } from "react";
import axios from "axios";
import URL_BASE_API from "../constants/UrlBaseApi";

export default function ScheduleInterview() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidateId, setSelectedCandidateId] = useState(null);

  useEffect(() => {
    axios
      .get(URL_BASE_API)
      .then((res) => setCandidates(res.data))
      .catch((err) => alert(err.response.data.message));
  }, []);

  if (candidates.length === 0) return <div>loading</div>;

  return (
    <main>
      <Title>
        Escolha com qual candidato você deseja marcar uma entrevista:
      </Title>

      <List>
        {candidates.map((candidates) => {
          if (candidates.status === "RECEBIDO") {
            return (
              <CandidateCard
                name={candidates.nome}
                id={candidates.id}
                key={candidates.id}
                setSelectedCandidateId={setSelectedCandidateId}
                selectedCandidateId={selectedCandidateId}
              />
            );
          }
        })}
      </List>
    </main>
  );
}

const Title = styled.h1`
  margin-bottom: 30px;
`;

const List = styled.ul`
  background-color: blueviolet;
  display: flex;
  flex-wrap: wrap;
`;
