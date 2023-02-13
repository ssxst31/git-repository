import { Route, Routes, BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";

import Main from "pages/Main";
import Repository from "pages/Repository";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter basename="https://ssxst31.github.io/issue-house">
      <RecoilRoot>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/repository/:user" element={<Repository />} />
        </Routes>
      </RecoilRoot>
    </BrowserRouter>
  );
}

export default App;
