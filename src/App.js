import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import ResetCss from "./assets/Style/ResetCss.js";
import GlobalStyle from "./assets/Style/GlobalStyle.js";
import RegisterCandidate from "./pages/RegisterCandidate";
import ScheduleInterview from "./pages/ScheduleInterview";
import ApproveCandidate from "./pages/ApproveCandidate";
import DisqualifyCandidate from "./pages/DisqualifyCandidate";
import ListCandidates from "./pages/ListCandidates";
import { styled } from "styled-components";

function App() {
  return (
    <ContainerApp>
      <BrowserRouter>
        <ResetCss />
        <GlobalStyle />

        <NavBar />

        <Routes>
          <Route path="/" element={<RegisterCandidate />} />
          <Route path="/interviw/schedule" element={<ScheduleInterview />} />
          <Route path="/candidate/approve" element={<ApproveCandidate />} />
          <Route path="/candidate/disqualify" element={<DisqualifyCandidate />} />
          <Route path="/candidate/list" element={<ListCandidates />} />
        </Routes>
      </BrowserRouter>
    </ContainerApp>
  );
}

const ContainerApp = styled.main`
  background-color: chocolate;
  width: 100vw;
  height: 100vh;
  padding: 40px 20px 40px 320px;
`;

export default App;
