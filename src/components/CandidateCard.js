import { styled } from "styled-components";
import userImgDefault from "../assets/user.png";

export default function CandidateCard({
  name,
  id,
  setSelectedCandidateId,
  selectedCandidateId,
}) {
  
  function updateSelectedCandidate() {
    if (selectedCandidateId === id) {
      setSelectedCandidateId(null);
    } else {
      setSelectedCandidateId(id);
    }
  }

  return (
    <Candidate
      onClick={updateSelectedCandidate}
      selectedCandidate={selectedCandidateId}
      id={id}
    >
      <img src={userImgDefault} alt="Usuário padrão" />
      <p>{name}</p>
    </Candidate>
  );
}

const Candidate = styled.li`
  background-color: blanchedalmond;
  width: 150px;
  height: 180px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: ${({ selectedCandidate, id }) =>
    selectedCandidate === id ? "solid 5px #32CD32" : "none"};
  border-radius: 20px;

  img {
    background-color: aliceblue;
    width: 80%;
    margin: 10px;
  }
`;
