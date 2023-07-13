import { styled } from "styled-components";
import userImgDefault from "../assets/user.png";

export default function CandidateCard({ list }) {
  return (
    <List>
      {list.map((candidate) => {
        return (
          <Candidate>
            <img src={userImgDefault} alt="Usuário padrão" />
            <p>{candidate}</p>
          </Candidate>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  background-color: yellowgreen;
  display: flex;
  flex-wrap: wrap;
`;

const Candidate = styled.li`
  background-color: blanchedalmond;
  width: 150px;
  height: 180px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 20px;

  img {
    background-color: aliceblue;
    width: 80%;
    margin: 10px;
  }
`;
